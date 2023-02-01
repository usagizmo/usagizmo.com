<script lang="ts">
  export let el = 'h3';
</script>

<svelte:element this={el} class="mt-8 mb-2 font-bold">
  <slot />
</svelte:element>
