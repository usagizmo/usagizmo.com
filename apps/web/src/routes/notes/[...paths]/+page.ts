import { graphql } from '$houdini';
import { getMdsAuthNSimilar, paramsPathToNotePath } from '$lib/utils';
import type { NotesInfoVariables, AfterLoadEvent } from './$houdini';
import { ContentParser } from './ContentParser';

export const _houdini_load = graphql(`
  query NotesInfo($current: String!, $mdsLike: String!, $mdsAuthNSimilar: String!) {
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
    }
  }
`);

export const _NotesInfoVariables: NotesInfoVariables = ({ params }) => {
  const current = paramsPathToNotePath(params.paths, '.md');
  const mdsLike = params.paths ? '' : '%.md'; // only for `/notes` dir
  const mdsAuthNSimilar = getMdsAuthNSimilar();

  return {
    current,
    mdsLike,
    mdsAuthNSimilar,
  };
};

export const _houdini_afterLoad = async ({ data }: AfterLoadEvent) => {
  const contentParser = new ContentParser(data.NotesInfo.current?.content ?? '');

  return {
    ...data,
    ...(await contentParser.getMetaContent()),
  };
};
