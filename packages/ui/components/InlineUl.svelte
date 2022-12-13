<script lang="ts">
  export let el = 'ul';
</script>

<svelte:element this={el} class="flex flex-wrap [&>li:last-child:after]:hidden">
  <slot />
</svelte:element>
