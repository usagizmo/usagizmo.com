<script lang="ts">
  import { fragment, graphql, type LikesList } from '$houdini';
  import { H3, InlineUl } from 'ui';
  import Likes from './Like.svelte';

  export let likesList: LikesList;

  $: info = fragment(
    likesList,
    graphql`
      fragment LikesList on like_categories {
        name
        likeItems(order_by: { name: asc }) {
          ...Like
        }
      }
    `
  );
</script>

<H3>{$info.name}</H3>
<InlineUl>
  {#each $info.likeItems as like (like)}
    <Likes {like} />
  {/each}
</InlineUl>
