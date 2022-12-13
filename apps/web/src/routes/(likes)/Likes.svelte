<script lang="ts">
  import type { GetLikeItemsByCategory$result } from '$houdini';
  import LikesList from './LikesList.svelte';

  export let data: GetLikeItemsByCategory$result;

  let likesListKeys = ['devices', 'apps', 'setapp', 'vsCodeExtensions'] as const;
</script>

<section>
  <h2>Likes</h2>
  {#each likesListKeys as key}
    {@const likesList = data[key]}
    {#if likesList}
      <LikesList {likesList} />
    {/if}
  {/each}
</section>
