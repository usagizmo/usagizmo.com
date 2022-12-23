<script lang="ts">
  import { TextLink, H2, H3, Ul, InlineUl } from 'ui';
  import type { PageData } from './$houdini';
  import Link from './Link.svelte';
  import Work from './Work.svelte';
  import LikesList from './LikesList.svelte';

  export let data: PageData;
  $: ({ RootQuery } = data);

  $: keyValue = $RootQuery.data?.keyValues?.reduce(
    (acc, { key, value }) => Object.assign(acc, { [key]: value }),
    {} as Record<string, string>
  );
  $: profileLabel = keyValue?.profileLabel;
  $: profileText = keyValue?.profileText;
</script>

<div class="mx-auto max-w-[792px]">
  <h1 class="text-4xl font-bold">usagizmo</h1>

  <section class="mt-12">
    <H2>Profile</H2>
    {#if profileLabel}
      <p class="mb-0.5"><strong>{profileLabel}</strong></p>
    {/if}
    {#if profileText}
      <p class="text-subtext">{profileText}</p>
    {/if}
  </section>

  <section class="mt-12">
    <H3>Loves</H3>
    <InlineUl>
      {#each $RootQuery.data?.loves ?? [] as link}
        <Link {link} />
      {/each}
    </InlineUl>
  </section>

  <section class="mt-12">
    <H3>Works</H3>
    <Ul>
      {#each $RootQuery.data?.works ?? [] as work}
        <Work {work} />
      {/each}
    </Ul>
  </section>

  <section class="mt-12">
    <H3>Links</H3>

    <p>
      <strong>Twitter</strong>: <TextLink href="https://twitter.com/usagizmo">@usagizmo</TextLink>
    </p>

    <div class="h-1" />

    <InlineUl>
      {#each $RootQuery.data?.links ?? [] as link}
        <Link {link} />
      {/each}
    </InlineUl>
  </section>

  <section class="mt-12">
    <H2>Uses</H2>
    {#each $RootQuery.data?.likeCategories ?? [] as likesList}
      {#if likesList}
        <LikesList {likesList} />
      {/if}
    {/each}
  </section>
</div>
