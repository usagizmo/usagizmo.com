import { PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';
import { NOTES_DIR } from './const';
import type { NhostSession } from '$lib/nhost';

export const tryErrorAlertOnNhostApi = (res: { error?: { message: string } | null }): boolean => {
  const errorMessage = res.error?.message;
  errorMessage && alert(errorMessage);
  return !!errorMessage;
};

export const parseSession = (cookiesSession: string | undefined): NhostSession | null => {
  return cookiesSession ? JSON.parse(cookiesSession) : null;
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
