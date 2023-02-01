import matter from 'gray-matter';
import { marked } from 'marked';
import { NhostClient } from '@nhost/nhost-js';
import { gql, GraphQLClient } from 'graphql-request';
import {
  PUBLIC_GRAPHQL_ENDPOINT,
  PUBLIC_NHOST_REGION,
  PUBLIC_NHOST_SUBDOMAIN,
} from '$env/static/public';
import { notePathToRoutePath } from '$lib/utils';

export class ContentParser {
  client: GraphQLClient;
  nhost: NhostClient;
  meta: { [key: string]: unknown };
  parsedContent: string;

  constructor(content: string) {
    this.client = new GraphQLClient(PUBLIC_GRAPHQL_ENDPOINT);
    this.nhost = new NhostClient({
      subdomain: PUBLIC_NHOST_SUBDOMAIN,
      region: PUBLIC_NHOST_REGION,
    });

    const mattered = matter(content);
    this.meta = mattered.data;
    this.parsedContent = marked.parse(mattered.content);
  }

  async getMetaContent() {
    return {
      meta: this.meta,
      content: await this.getContent(),
    };
  }

  private async getContent(): Promise<string> {
    const html = this.parsedContent;
    const getWidthAttr = (width: string | undefined) => (width ? ` width="${width}"` : '');

    const noteNames = [];
    for (const match of html.matchAll(/!\[\[([^\]]+?(?:png|jpg))\|?(\d+)?\]\]/g)) {
      noteNames.push(match[1]);
    }
    for (const match of html.matchAll(/!\[\[([^\]]+?(?:mp4))\|?(\d+)?\]\]/g)) {
      noteNames.push(match[1]);
    }
    for (const match of html.matchAll(/\[\[(.+?)\]\]/g)) {
      if (match[1].endsWith('.png') || match[1].endsWith('.jpg') || match[1].endsWith('.mp4')) {
        continue;
      }
      noteNames.push(match[1] + '.md');
    }

    const fileUrlByName = await this.getFileUrlByNameByNames(noteNames);

    return html
      .replaceAll(
        /!\[\[([^\]]+?(?:png|jpg))\|?(\d+)?\]\]/g,
        (_, name, width) =>
          `<a href="${fileUrlByName[name]}" target="_blank" rel="noopener noreferrer"><img src="${
            fileUrlByName[name]
          }" ${getWidthAttr(width)} /></a>`
      )
      .replaceAll(
        /!\[\[([^\]]+?(?:mp4))\|?(\d+)?\]\]/g,
        (_, name, width) => `<video src="${fileUrlByName[name]}" ${getWidthAttr(width)} controls />`
      )
      .replaceAll('[!info]', '💡')
      .replaceAll(/<p>([\s\S]+?)<\/p>/g, (_, text) => `<p>${text.replaceAll('\n', '<br />')}</p>`)
      .replaceAll(
        /\[\[(.+?)\]\]/g,
        (_, name) => `<a href="${fileUrlByName[name + '.md']}">${name}</a>`
      );
  }

  private async getFileUrlByNameByNames(names: string[]) {
    const notesQuery = gql`
      query Notes($names: [String!]!) {
        notes(where: { name: { _in: $names } }) {
          name
          path
          fileId
        }
      }
    `;
    const { notes } = await this.client.request<{
      notes: { name: string; path: string; fileId: string | null }[];
    }>(notesQuery, {
      names,
    });

    const fileNameUrls = notes.map((note) => {
      const url = note.fileId
        ? this.nhost.storage.getPublicUrl({ fileId: note.fileId })
        : notePathToRoutePath(note.path);
      return { name: note.name, url };
    });

    return fileNameUrls.reduce((acc, { name, url }) => {
      acc[name] = url;
      return acc;
    }, {} as { [name: string]: string });
  }
}
