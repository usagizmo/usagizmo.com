<script lang="ts">
  export let href = '';
  export let blank = true;
</script>

<a
  target={blank ? '_blank' : '_self'}
  rel="noopener noreferrer"
  {href}
  class="text-text-link hover:text-text group relative inline-flex overflow-hidden duration-150"
>
  <span class="group-hover h-full">
    <slot />
    <span
      class="bg-text absolute inset-x-0 bottom-1 h-px translate-x-[-102%] duration-150 group-hover:translate-x-0"
    />
  </span>
</a>
