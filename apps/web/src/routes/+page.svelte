<script lang="ts">
  import type { PageData } from './$houdini';
  import Likes from './(likes)/Likes.svelte';

  export let data: PageData;
  $: ({ GetLikeItemsByCategory } = data);
</script>

<div class="mx-auto max-w-[792px] space-y-5">
  <div class="pb-[14px]">
    <div>
      {#if $GetLikeItemsByCategory.data}
        <Likes data={$GetLikeItemsByCategory.data} />
      {/if}
    </div>
  </div>
</div>
