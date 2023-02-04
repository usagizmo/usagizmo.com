import { graphql } from '$houdini';
import { paramsPathToNotePath } from '$lib/utils';
import type { NotesPathsQueryVariables, AfterLoadEvent } from './$houdini';
import { ContentParser } from './ContentParser';

export const _houdini_load = graphql(`
  query NotesPathsQuery($current: String!, $mdsLike: String!) {
    current: notes_by_pk(path: $current) {
      path
      basename
      content
      createdAt
      updatedAt
    }
    mds: notes(where: { path: { _like: $mdsLike } }, order_by: { updatedAt: desc }) {
      path
      basename
      updatedAt
    }
  }
`);

export const _NotesPathsQueryVariables: NotesPathsQueryVariables = ({ params }) => {
  const current = paramsPathToNotePath(params.paths, '.md');
  const mdsLike = params.paths ? '' : '%.md'; // `/notes` only

  return {
    current,
    mdsLike,
  };
};

export const _houdini_afterLoad = async ({ data, event: { params } }: AfterLoadEvent) => {
  const contentParser = new ContentParser(data.NotesPathsQuery.current?.content ?? '');
  return {
    ...data,
    params,
    content: await contentParser.getContent(),
  };
};
