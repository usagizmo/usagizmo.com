<script lang="ts">
  export let href = '';
  export let blank = true;
</script>

<a
  target={blank ? '_blank' : '_self'}
  rel="noopener noreferrer"
  {href}
  class="text-text-link hover:text-text group relative inline-flex overflow-hidden duration-200"
>
  <span class="group-hover h-full">
    <slot />
    <span
      class="bg-text absolute inset-x-0 bottom-0 h-px translate-x-[-102%] duration-200 group-hover:translate-x-0"
    />
  </span>
</a>
