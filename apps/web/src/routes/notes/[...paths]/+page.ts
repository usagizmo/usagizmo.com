import { graphql } from '$houdini';
import { getMdsAuthNSimilar, paramsPathToNotePath } from '$lib/utils';
import type { NotesPathsQueryVariables, AfterLoadEvent } from './$houdini';
import { ContentParser } from './ContentParser';

export const _houdini_load = graphql(`
  query NotesPathsQuery($current: String!, $mdsLike: String!, $mdsAuthNSimilar: String!) {
    current: notes_by_pk(path: $current) {
      path
      basename
      content
      createdAt
      updatedAt
    }
    mds: notes(
      where: { path: { _like: $mdsLike, _nsimilar: $mdsAuthNSimilar } }
      order_by: { updatedAt: desc }
    ) {
      path
      basename
      updatedAt
    }
  }
`);

export const _NotesPathsQueryVariables: NotesPathsQueryVariables = ({ params }) => {
  const current = paramsPathToNotePath(params.paths, '.md');
  const mdsLike = params.paths ? '' : '%.md'; // `/notes` only
  const mdsAuthNSimilar = getMdsAuthNSimilar();

  return {
    current,
    mdsLike,
    mdsAuthNSimilar,
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
