import { graphql } from '$houdini';
import { paramsPathToNotePath } from '$lib/utils';
import type { NotesInfoVariables, AfterLoadEvent } from './$houdini';
import { ContentParser } from './ContentParser';

export const _houdini_load = graphql(`
  query NotesInfo($current: String!, $mdsLike: String!) {
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
    }
  }
`);

export const _NotesInfoVariables: NotesInfoVariables = ({ params }) => {
  const current = paramsPathToNotePath(params.paths, '.md');
  const mdsLike = params.paths ? '' : '%.md'; // only for `notes` dir

  return {
    current,
    mdsLike,
  };
};

export const _houdini_afterLoad = async ({ data }: AfterLoadEvent) => {
  const contentParser = new ContentParser(data.NotesInfo.current?.content ?? '');

  return {
    ...data,
    ...(await contentParser.getMetaContent()),
  };
};
