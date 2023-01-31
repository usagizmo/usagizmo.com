import { describe, it, expect, vi } from 'vitest';
import { PUBLIC_OBSIDIAN_PUBLIC_DIR } from '$env/static/public';
import {
  tryErrorAlertOnNhostApi,
  notePathToRoutePath,
  paramsPathToRoutePath,
  paramsPathToNotePath,
} from './utils';

describe('@tryErrorAlertOnNhostApi', () => {
  it('return false if it does not have `error.message`', () => {
    const mock = vi.fn();
    vi.stubGlobal('alert', mock);

    expect(tryErrorAlertOnNhostApi({})).toBe(false);
    expect(tryErrorAlertOnNhostApi({ error: null })).toBe(false);
    expect(tryErrorAlertOnNhostApi({ error: { message: '' } })).toBe(false);

    expect(mock).toBeCalledTimes(0);
  });

  it('alert message and return true if it has `error.message`', () => {
    const mock = vi.fn();
    vi.stubGlobal('alert', mock);

    expect(tryErrorAlertOnNhostApi({ error: { message: 'test' } })).toBe(true);

    expect(mock).toBeCalledTimes(1);
  });
});

it('@notePathToRoutePath', () => {
  expect(notePathToRoutePath(`${PUBLIC_OBSIDIAN_PUBLIC_DIR}/dir1/dir2.md`)).toBe(
    '/notes/dir1/dir2'
  );
});

it('@paramsPathToRoutePath', () => {
  expect(paramsPathToRoutePath('dir1/dir2')).toBe('/notes/dir1/dir2');
});

it('@paramsPathToNotePath', () => {
  expect(paramsPathToNotePath('dir1/dir2', null)).toBe(`${PUBLIC_OBSIDIAN_PUBLIC_DIR}/dir1/dir2`);
  expect(paramsPathToNotePath('dir1/dir2', '.md')).toBe(
    `${PUBLIC_OBSIDIAN_PUBLIC_DIR}/dir1/dir2.md`
  );
});
