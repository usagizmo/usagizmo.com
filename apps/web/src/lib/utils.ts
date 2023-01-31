import { PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';

const noteDir = 'notes';

export const tryErrorAlertOnNhostApi = (res: { error?: { message: string } | null }): boolean => {
  const errorMessage = res.error?.message;
  errorMessage && alert(errorMessage);
  return !!errorMessage;
};

export const notePathToRoutePath = (notePath: string) => {
  const paramsPath = notePath.slice(PUBLIC_OBSIDIAN_PUBLIC_DIR.length);
  return `/${noteDir}${paramsPath}`;
};

export const paramsPathToRoutePath = (paramsPath: string) => {
  return `/${noteDir}/${paramsPath}`;
};

export const updateHtmlContent = (html: string): string => {
  const getWidthAttr = (width: string | undefined) => (width ? ` width="${width}"` : '');

  return html
    .replaceAll(
      /!\[\[([^\]]+?(?:png|jpg))\|?(\d+)?\]\]/g,
      (_, name, width) =>
        `<a href="Attachments/${name}" target="_blank" rel="noopener noreferrer"><img src="Attachments/${name}" ${getWidthAttr(
          width
        )} /></a>`
    )
    .replaceAll(
      /!\[\[([^\]]+?(?:mp4))\|?(\d+)?\]\]/g,
      (_, name, width) => `<video src="Attachments/${name}" ${getWidthAttr(width)} controls />`
    )
    .replaceAll('[!info]', '💡')
    .replaceAll(/<p>([\s\S]+?)<\/p>/g, (_, text) => `<p>${text.replaceAll('\n', '<br />')}</p>`)
    .replaceAll(/\[\[(.+?)\]\]/g, '<a href="/notes/$1">$1</a>');
};
