<script lang="ts">
  import { fragment, graphql, type LikesList } from '$houdini';
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

<h3>{$info.name}</h3>
<ul>
  {#each $info.likeItems as likeItem (likeItem)}
    <LikesItem {likeItem} />
  {/each}
</ul>
