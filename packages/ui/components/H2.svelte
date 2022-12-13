<script lang="ts">
  export let el = 'h2';
</script>

<svelte:element this={el} class="mb-3 text-2xl font-bold underline">
  <slot />
</svelte:element>
