import { PUBLIC_OBSIDIAN_PUBLIC_AUTH_DIRS, PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';
import { NOTES_DIR } from './const';

export const tryErrorAlertOnNhostApi = (res: { error?: { message: string } | null }): boolean => {
  const errorMessage = res.error?.message;
  errorMessage && alert(errorMessage);
  return !!errorMessage;
};

export const notePathToRoutePath = (notePath: string) => {
  const paramsPath = notePath.slice(PUBLIC_OBSIDIAN_PUBLIC_DIR.length, notePath.lastIndexOf('.'));
  return `/${NOTES_DIR}${paramsPath}`;
};

export const paramsPathToRoutePath = (paramsPath: string) => {
  return `/${NOTES_DIR}/${paramsPath}`;
};

export const paramsPathToNotePath = (paramsPath: string, extension: string | null) => {
  return `${PUBLIC_OBSIDIAN_PUBLIC_DIR}/${paramsPath}${extension ?? ''}`;
};

export const getMdsAuthNSimilar = () => {
  const pipedAuthDirs = PUBLIC_OBSIDIAN_PUBLIC_AUTH_DIRS.split(',')
    .map((authDir) => authDir.split('=')[0])
    .join('|');
  return `${PUBLIC_OBSIDIAN_PUBLIC_DIR}/(${pipedAuthDirs})/%.md`;
};
