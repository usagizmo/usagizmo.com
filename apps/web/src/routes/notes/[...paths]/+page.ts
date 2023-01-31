import { PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';
import { graphql } from '$houdini';
import type { NotesInfoVariables } from './$houdini';

export const _houdini_load = graphql(`
  query NotesInfo($current: String!, $mdsLike: String!) {
    current: notes_by_pk(path: $current) {
      path
      basename
      content
    }
    mds: notes(where: { path: { _like: $mdsLike } }, order_by: { updatedAt: desc }) {
      path
      basename
    }
    attachments: notes(where: { path: { _nlike: "%.md" } }) {
      path
    }
  }
`);

export const _NotesInfoVariables: NotesInfoVariables = ({ params }) => {
  const current = `${PUBLIC_OBSIDIAN_PUBLIC_DIR}/${params.paths}`;
  const mdsLike = `${current}%.md`; // only for `notes` dir

  return {
    current,
    mdsLike,
  };
};
