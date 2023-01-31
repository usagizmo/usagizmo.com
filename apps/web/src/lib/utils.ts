import { PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';

export const tryErrorAlertOnNhostApi = (res: { error?: { message: string } | null }): boolean => {
  const errorMessage = res.error?.message;
  errorMessage && alert(errorMessage);
  return !!errorMessage;
};

export const pathToAbsPath = (path: string) => {
  const notePath = path.slice(PUBLIC_OBSIDIAN_PUBLIC_DIR.length);
  return `/notes${notePath}`;
};
