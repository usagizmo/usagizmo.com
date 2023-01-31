<script lang="ts">
  import { TextLink, H2, Ul, Li, BreadHeader } from 'ui';
  import type { PageData } from './$houdini';
  import { notePathToRoutePath } from '$lib/utils';

  export let data: PageData;
  $: ({ NotesInfo } = data);

  $: notes = $NotesInfo.data?.mds ?? [];
  $: title = $NotesInfo.data?.current?.basename;
  $: content = $NotesInfo.data?.current?.content;
</script>

<svelte:head>
  {#if title}
    <title>{title} | 📔 Notes - usagizmo.com</title>
  {:else}
    <title>📔 Notes - usagizmo.com</title>
  {/if}
</svelte:head>

<div class="mx-auto max-w-[792px]">
  <nav>
    <BreadHeader
      breadcrumbs={[
        { href: '/', text: '🏠' },
        { href: '/notes', text: '📔' },
      ]}
      title={title ?? 'Notes'}
    />
  </nav>

  {#if title && content}
    <main>
      <h1>{title}</h1>
      <section>
        <div class="markdown">
          {@html content}
        </div>
      </section>
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
