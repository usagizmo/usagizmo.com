<script lang="ts">
  export let href = '';
  export let type = '';
  export let blank = false;
  export let disabled = false;

  $: element = href ? 'a' : 'button';
  $: typeAttr = type ? { type } : href ? {} : { type: 'button' };

  $: hrefAttr = href ? { href } : {};
  $: blankAttrs =
    href && blank
      ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : {};
  $: disabledAttr = disabled ? { disabled: true } : {};
</script>

<svelte:element
  this={element}
  {...typeAttr}
  {...hrefAttr}
  {...blankAttrs}
  {...disabledAttr}
  class="inline-grid place-content-center space-x-1 rounded-md border px-5 py-2 text-sm duration-150 hover:opacity-70 disabled:pointer-events-none disabled:opacity-40"
  on:click
>
  <slot />
</svelte:element>
