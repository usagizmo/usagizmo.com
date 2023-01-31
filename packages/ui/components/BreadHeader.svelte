<script lang="ts">
  export let breadcrumbs = [] as { href: string; text: string }[];
  export let title: string;
</script>

{#if breadcrumbs.length > 0}
  <ul class="mb-4 flex">
    {#each breadcrumbs as { href, text }}
      <li
        class="pl-4 before:relative before:-left-2 before:content-['/'] first:pl-0 first:before:hidden"
      >
        <a {href} class="text-rose-600 hover:underline">{text}</a>
      </li>
    {/each}
  </ul>
{/if}

{#if title}
  <h1 class="text-3xl font-semibold">
    {title}
  </h1>
{/if}
