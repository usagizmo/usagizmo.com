<script lang="ts">
  import { TextLink, H2, Ul, Li } from 'ui';
  import type { PageData } from './$houdini';
  import { pathToAbsPath } from '$lib/utils';

  export let data: PageData;
  $: ({ NotesQuery } = data);
</script>

<!-- {JSON.stringify($NotesQuery.data)} -->

<svelte:head>
  <title>Notes - usagizmo.com</title>
</svelte:head>

<div class="mx-auto max-w-[792px]">
  <h1 class="text-4xl font-bold">
    <a href="/">usagizmo</a>
  </h1>

  <section class="mt-12">
    <H2>Notes</H2>
    <Ul>
      {#each $NotesQuery.data?.mds ?? [] as md}
        {@const absPath = pathToAbsPath(md.path)}
        <Li>
          <span class="before:content-['*_']">
            <TextLink href={absPath} blank={false}>{absPath.slice(7)}</TextLink></span
          >
        </Li>
      {/each}
    </Ul>
  </section>
</div>
