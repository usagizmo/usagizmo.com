import { PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';

export const tryErrorAlertOnNhostApi = (res: { error?: { message: string } | null }): boolean => {
  const errorMessage = res.error?.message;
  errorMessage && alert(errorMessage);
  return !!errorMessage;
};

export const notePathToRoutePath = (notePath: string) => {
  const paramsPath = notePath.slice(PUBLIC_OBSIDIAN_PUBLIC_DIR.length, notePath.lastIndexOf('.'));
  return `/notes${paramsPath}`;
};

export const paramsPathToRoutePath = (paramsPath: string) => {
  return `/notes/${paramsPath}`;
};

export const paramsPathToNotePath = (paramsPath: string, extension: string | null) => {
  return `${PUBLIC_OBSIDIAN_PUBLIC_DIR}/${paramsPath}${extension ?? ''}`;
};

export const dateToISO = (date?: Date): string => {
  return date?.toISOString() ?? '';
};

export const dateToString = (date?: Date): string => {
  if (!date) return '';
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return y === new Date().getFullYear() ? `${m}/${d}` : `${m}/${d}/${y}`;
};
