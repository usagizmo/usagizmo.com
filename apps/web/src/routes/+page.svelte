<script lang="ts">
  import { TextLink } from 'ui';
  import type { PageData } from './$houdini';
  import Likes from './(likes)/Likes.svelte';

  export let data: PageData;
  $: ({ GetLikeItemsByCategory } = data);
</script>

<div class="mx-auto max-w-[792px] space-y-5">
  <div class="pb-[14px]">
    <h1>usagizmo</h1>

    <section>
      <h2>Profile</h2>
      <ul>
        <li>Web Engineer</li>
        <li><TextLink href="https://svelte.dev/">Svelte</TextLink></li>
        <li><TextLink href="https://www.typescriptlang.org/">TypeScript</TextLink></li>
      </ul>
    </section>

    <section>
      <h2>Works</h2>
      <ul>
        <li>
          <strong><TextLink href="https://usagizmo.com/">usagizmo.com</TextLink></strong>:
          このサイト
        </li>
        <li>
          <strong
            ><TextLink href="https://github.com/usagizmo/webapp-template">webapp-template</TextLink
            ></strong
          >: Web開発時のモノレポテンプレート
        </li>
      </ul>
    </section>

    <section>
      <h2>Links</h2>
      <ul>
        <li>
          <strong>Twitter</strong>: <TextLink href="https://twitter.com/usagizmo"
            >@usagizmo</TextLink
          >
        </li>
        <li>
          <strong><TextLink href="https://github.com/usagizmo">GitHub</TextLink></strong>
        </li>
        <li>
          <strong><TextLink href="https://zenn.dev/">Zenn</TextLink></strong>
        </li>
        <li>
          <strong><TextLink href="https://qiita.com/usagizmo">Qiita</TextLink></strong>
        </li>
      </ul>
    </section>

    {#if $GetLikeItemsByCategory.data}
      <Likes data={$GetLikeItemsByCategory.data} />
    {/if}
  </div>
</div>
