<script lang="ts">
  import { TextLink, Ul, Li, BreadHeader, Meta } from 'ui';
  import type { PageData } from './$houdini';
  import { notePathToRoutePath, dateToISO, dateToString } from '$lib/utils';
  import { NOTES_DIR } from '$lib/const';

  export let data: PageData;
  $: ({ NotesInfo, content, params } = data);

  $: notes = $NotesInfo.data?.mds ?? [];
  $: title = $NotesInfo.data?.current?.basename;
  $: createdAt = $NotesInfo.data?.current?.createdAt;
  $: updatedAt = $NotesInfo.data?.current?.updatedAt;

  $: meta = {
    title: title ? `${title} | 📔 - usagizmo.com` : '📔 Notes - usagizmo.com',
    canonical: `https://usagizmo.com/${params.paths ? `${NOTES_DIR}/${params.paths}` : NOTES_DIR}`,
  };
</script>

<Meta {...meta} />

<div class="mx-auto max-w-prose">
  <header class="mb-12">
    <BreadHeader
      breadcrumbs={[
        { href: '/', text: '🏠' },
        { href: `/${NOTES_DIR}`, text: '📔' },
      ]}
      title={title ?? 'Notes'}
    />
    {#if createdAt && updatedAt}
      <p class="text-subtext mt-2 text-sm">
        <span class="sr-only">Created at</span>
        <time datetime={dateToISO(createdAt)} title={dateToISO(createdAt)}
          >{dateToString(createdAt)}</time
        >
        →
        <span class="sr-only">Updated at</span>
        <time datetime={dateToISO(updatedAt)} title={dateToISO(updatedAt)}
          >{dateToString(updatedAt)}</time
        >
      </p>
    {/if}
  </header>

  {#if title && content}
    <main
      class="font-inter prose prose-invert prose-a:font-normal hover:prose-a:text-rose-500 hover:prose-a:underline prose-a:no-underline prose-a:text-rose-600 prose-code:after:hidden prose-code:before:hidden prose-code:bg-zinc-700 prose-code:font-normal prose-code:mx-0.5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-h1:before:content-['H1.'] prose-h2:before:content-['H2.'] prose-h3:before:content-['H3.'] prose-h4:font-semibold prose-headings:before:-translate-x-2 prose-headings:before:absolute prose-headings:before:font-normal prose-headings:before:right-full prose-headings:before:text-zinc-700 prose-headings:relative prose-headings:font-normal prose-pre:bg-zinc-900 target-blank:prose-a:after:content-[url('/images/external-link.svg')] target-blank:prose-a:after:mx-1"
    >
      {@html content}
    </main>
  {/if}

  {#if notes.length}
    <Ul>
      {#each notes as note}
        {@const routePath = notePathToRoutePath(note.path)}
        <Li>
          <span class="before:content-['*_']">
            <TextLink href={routePath} blank={false}>{note.basename}</TextLink>
          </span>
        </Li>
      {/each}
    </Ul>
  {/if}
</div>
