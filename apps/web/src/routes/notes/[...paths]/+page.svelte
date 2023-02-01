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

<div class="mx-auto max-w-[792px]">
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
    @apply leading-relaxed;
  }

  .markdown h1 {
    @apply mt-16 text-3xl;
  }
  .markdown h2 {
    @apply mt-16 text-2xl;
  }
  .markdown h3 {
    @apply mt-12 text-xl font-bold;
  }
  .markdown h4 {
    @apply mt-8 text-lg font-bold;
  }

  .markdown a {
    @apply text-rose-600;
  }
  .markdown a:hover {
    @apply underline;
  }

  .markdown p {
    @apply my-6;
  }
  .markdown blockquote {
    @apply my-6 rounded border-l-4 bg-gray-700 px-1 py-4 pl-6 pr-4;
  }
  .markdown blockquote > p {
    @apply my-0;
  }

  .markdown pre {
    @apply my-6 rounded bg-gray-700 p-4;
  }

  .markdown code {
    @apply rounded bg-gray-700 px-1;
  }

  .markdown li {
    @apply pl-6;
  }
  .markdown li::before {
    @apply absolute -translate-x-4 content-['・'];
  }
  .markdown li:has(input[checked]) {
    @apply line-through opacity-50;
  }
</style>
