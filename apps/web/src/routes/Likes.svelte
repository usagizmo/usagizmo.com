<script lang="ts">
  import type { GetLikeListByCategory$result } from '$houdini';
  import LikesList from './LikesList.svelte';

  export let data: GetLikeListByCategory$result;
</script>

{#each data.like_categories as likesList}
  {#if likesList}
    <LikesList {likesList} />
  {/if}
{/each}
