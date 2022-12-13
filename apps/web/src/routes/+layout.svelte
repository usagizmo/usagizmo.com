<script lang="ts">
  import 'tailwind-preset-base/global.css';
</script>

<div class="flex h-full flex-col">
  <div class="flex flex-1 flex-col">
    <main class="flex-1 px-4 pt-[68px] pb-16 md:pt-10">
      <slot />
    </main>
  </div>
</div>
