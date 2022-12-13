<script lang="ts">
  import type { GetLikeItemsByCategory$result } from '$houdini';
  import LikesList from './LikesList.svelte';

  export let data: GetLikeItemsByCategory$result;

  let likesListKeys = ['devices', 'apps', 'setapp', 'vsCodeExtensions'] as const;
</script>

{#each likesListKeys as key}
  {@const likesList = data[key]}
  {#if likesList}
    <LikesList {likesList} />
  {/if}
{/each}
