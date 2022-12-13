<script lang="ts">
  import { fragment, graphql, type LikesList } from '$houdini';
  import { H3, InlineUl } from 'ui';
  import LikesItem from './LikesItem.svelte';

  export let likesList: LikesList;

  $: info = fragment(
    likesList,
    graphql`
      fragment LikesList on like_categories {
        name
        likeItems(order_by: { name: asc }) {
          ...LikeItem
        }
      }
    `
  );
</script>

<H3>{$info.name}</H3>
<InlineUl>
  {#each $info.likeItems as likeItem (likeItem)}
    <LikesItem {likeItem} />
  {/each}
</InlineUl>
