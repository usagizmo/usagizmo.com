<script lang="ts">
  import { TextLink, Ul, Li, BreadHeader } from 'ui';
  import type { PageData } from './$houdini';
  import { notePathToRoutePath, dateToISO, dateToString } from '$lib/utils';
  import { NOTES_DIR } from '$lib/const';

  export let data: PageData;
  $: ({ NotesInfo, content } = data);

  $: notes = $NotesInfo.data?.mds ?? [];
  $: title = $NotesInfo.data?.current?.basename;
  $: createdAt = $NotesInfo.data?.current?.createdAt;
  $: updatedAt = $NotesInfo.data?.current?.updatedAt;
</script>

<svelte:head>
  {#if title}
    <title>{title} | 📔 Notes - usagizmo.com</title>
  {:else}
    <title>📔 Notes - usagizmo.com</title>
  {/if}
</svelte:head>

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
    <main class="markdown">
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

<style global>
  .markdown {
    @apply leading-loose;
  }

  .markdown h1,
  .markdown h2,
  .markdown h3 {
    @apply relative;
  }

  .markdown h1 {
    @apply mt-16 mb-6 text-3xl;
  }
  .markdown h2 {
    @apply relative mt-16 mb-4 text-2xl;
  }
  .markdown h3 {
    @apply mt-12 mb-2 text-xl;
  }
  .markdown h4 {
    @apply mt-8 mb-2 font-bold;
  }
  .markdown h1::before,
  .markdown h2::before,
  .markdown h3::before {
    @apply absolute right-full -translate-x-2 font-normal text-zinc-700;
  }
  .markdown h1::before {
    @apply content-['H1.'];
  }
  .markdown h2::before {
    @apply content-['H2.'];
  }
  .markdown h3::before {
    @apply content-['H3.'];
  }

  .markdown a {
    @apply text-rose-600;
  }
  .markdown a:hover {
    @apply text-rose-500 underline;
  }

  .markdown a[target='_blank']::after {
    @apply mx-0.5 content-[url('/images/external-link.svg')];
  }

  .markdown p {
    @apply mb-6;
  }
  .markdown blockquote {
    @apply mb-6 rounded border-l-4 bg-zinc-700 px-1 py-4 pl-6 pr-4;
  }
  .markdown blockquote > p {
    @apply mb-0;
  }

  .markdown pre {
    @apply mb-6 rounded bg-zinc-700 p-4;
  }

  .markdown code {
    @apply rounded bg-zinc-700 px-1;
  }

  .markdown li {
    @apply pl-8;
  }

  .markdown ol,
  .markdown ul {
    counter-reset: list;
  }

  .markdown ol > li::before {
    @apply absolute w-12 -translate-x-14 text-right;
    counter-increment: list;
    content: counters(list, '.') '.';
  }
  .markdown ul > li > ol > li::before {
    content: counter(list) '.';
  }
  .markdown ul > li::before {
    @apply absolute -translate-x-4 content-['・'];
  }

  .markdown li:has(input[checked]) {
    @apply line-through opacity-50;
  }
</style>
