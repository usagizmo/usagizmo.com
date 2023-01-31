<script lang="ts">
  import 'tailwind-preset-base/global.css';
  import '$lib/nhost'; // initialize nhost

  import GoogleAnalytics from './GoogleAnalytics.svelte';
</script>

<GoogleAnalytics />

<div class="flex h-full flex-col">
  <main class="flex-1 px-4 pb-24 pt-10 md:pb-28 md:pt-20">
    <slot />
  </main>
</div>
