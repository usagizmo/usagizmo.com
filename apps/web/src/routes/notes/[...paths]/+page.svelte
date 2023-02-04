<script lang="ts">
  import { BreadHeader, C2MDates, Li, Meta, TextLink, Ul } from 'ui';
  import type { PageData } from './$houdini';
  import { NOTES_DIR } from '$lib/const';
  import { notePathToRoutePath } from '$lib/utils';

  export let data: PageData;
  $: ({ NotesPathsQuery, params, content } = data);

  $: isListPage = params.paths === ''; // is `/notes`
  $: mds = $NotesPathsQuery.data?.mds ?? [];

  $: current = $NotesPathsQuery.data?.current;

  let breadcrumbs: { href: string; text: string }[] = [];
  let breadHeaderTitle = '';

  let meta = {
    title: '',
    canonical: '',
  };

  $: {
    if (isListPage) {
      breadcrumbs = [{ href: '/', text: '🏠' }];
      breadHeaderTitle = '📔 Notes';
      meta = {
        title: '📔 Notes - usagizmo.com',
        canonical: `https://usagizmo.com/${NOTES_DIR}`,
      };
    } else {
      breadcrumbs = [
        { href: '/', text: '🏠' },
        { href: `/${NOTES_DIR}`, text: '📔 Notes' },
      ];
      breadHeaderTitle = current?.basename ?? '';
      meta = {
        title: `${breadHeaderTitle} | 📔 Notes - usagizmo.com`,
        canonical: `https://usagizmo.com/${NOTES_DIR}/${params.paths}`,
      };
    }
  }
</script>

<Meta {...meta} />

<div class="relative mx-auto max-w-prose">
  <header class="mb-12">
    <BreadHeader {breadcrumbs} title={breadHeaderTitle} />
    {#if current}
      <div class="absolute right-0 top-0 grid h-6 place-content-center">
        <C2MDates createdAt={current.createdAt} updatedAt={current.updatedAt} />
      </div>
    {/if}
  </header>

  <main>
    {#if isListPage}
      <Ul>
        {#each mds as { path, basename, updatedAt }}
          {@const routePath = notePathToRoutePath(path)}
          <Li>
            <div class="pl-16">
              <div class="relative">
                <div class="absolute right-full flex h-6 -translate-x-6 items-center">
                  <C2MDates {updatedAt} />
                </div>
                <TextLink href={routePath} blank={false}>{basename}</TextLink>
              </div>
            </div>
          </Li>
        {/each}
      </Ul>
    {:else}
      <div
        class="font-inter prose prose-invert prose-a:font-normal hover:prose-a:text-rose-500 hover:prose-a:underline prose-a:no-underline prose-a:text-rose-600 prose-code:after:hidden prose-code:before:hidden prose-code:bg-zinc-700 prose-code:font-normal prose-code:mx-0.5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-h1:before:content-['H1.'] prose-h2:before:content-['H2.'] prose-h3:before:content-['H3.'] prose-h4:font-semibold prose-headings:before:-translate-x-2 prose-headings:before:absolute prose-headings:before:font-normal prose-headings:before:right-full prose-headings:before:text-zinc-700 prose-headings:relative prose-headings:font-normal prose-pre:bg-zinc-900 target-blank:[&:not(:has(img))]:prose-a:after:content-[url('/images/external-link.svg')] target-blank:[&:not(:has(img))]:prose-a:after:mx-1"
      >
        {@html content}
      </div>
    {/if}
  </main>
</div>
