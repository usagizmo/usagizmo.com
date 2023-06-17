<script lang="ts">
  import 'tailwind-preset-base/global.css';

  import GoogleAnalytics from './GoogleAnalytics.svelte';
  import TextLink from 'ui/components/TextLink.svelte';
</script>

<GoogleAnalytics />

<div class="flex h-full flex-col">
  <div class="flex-1 px-4 pb-24 pt-6 md:pb-28 md:pt-10">
    <slot />
  </div>
  <footer class="mt-4 p-4 text-center text-sm">
    <TextLink href="/" blank={false}>@usagizmo</TextLink>
  </footer>
</div>
