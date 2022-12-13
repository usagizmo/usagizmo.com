<script lang="ts">
  import { TextLink, H2, H3, Ul, Li, InlineUl, InlineLi } from 'ui';
  import type { PageData } from './$houdini';
  import Likes from './Likes.svelte';

  export let data: PageData;
  $: ({ GetLikeItemsByCategory } = data);
</script>

<div class="mx-auto max-w-[792px] space-y-5">
  <div class="pb-[14px]">
    <h1 class="text-4xl font-bold">usagizmo</h1>

    <section class="mt-12">
      <H2>Profile</H2>
      <p><strong>Web Engineer</strong></p>
      <p class="text-subtext">
        After working as a full stack engineer, I settled on a front-end engineer.
      </p>
    </section>

    <section class="mt-12">
      <H3>Loves</H3>
      <InlineUl>
        <InlineLi><TextLink href="https://svelte.dev/">Svelte</TextLink></InlineLi>
        <InlineLi><TextLink href="https://obsidian.md/">Obsidian</TextLink></InlineLi>
      </InlineUl>
    </section>

    <section class="mt-12">
      <H3>Works</H3>
      <Ul>
        <Li>
          <strong><TextLink href="https://usagizmo.com/">usagizmo.com</TextLink></strong>:
          <span class="max-md:ml-4 max-md:block">This site</span>
        </Li>
        <Li>
          <strong
            ><TextLink href="https://github.com/usagizmo/webapp-template">webapp-template</TextLink
            ></strong
          >:
          <span class="max-md:ml-4 max-md:block">Monorepo template for Web Development</span>
        </Li>
      </Ul>
    </section>

    <section class="mt-12">
      <H3>Links</H3>

      <p>
        <strong>Twitter</strong>: <TextLink href="https://twitter.com/usagizmo">@usagizmo</TextLink>
      </p>

      <div class="h-1" />

      <InlineUl>
        <InlineLi>
          <TextLink href="https://github.com/usagizmo">GitHub</TextLink>
        </InlineLi>
        <InlineLi>
          <TextLink href="https://zenn.dev/">Zenn</TextLink>
        </InlineLi>
        <InlineLi>
          <TextLink href="https://qiita.com/usagizmo">Qiita</TextLink>
        </InlineLi>
      </InlineUl>
    </section>

    <section class="mt-12">
      <H2>Uses</H2>
      {#if $GetLikeItemsByCategory.data}
        <Likes data={$GetLikeItemsByCategory.data} />
      {/if}
    </section>
  </div>
</div>
