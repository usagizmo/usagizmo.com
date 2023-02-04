<script lang="ts">
  export let updatedAt: Date;
  export let createdAt: Date | null = null;

  const dateToISO = (date?: Date): string => {
    return date?.toISOString() ?? '';
  };

  const dateToString = (date?: Date): string => {
    if (!date) return '';
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return y === new Date().getFullYear() ? `${m}/${d}` : `${m}/${d}/${y}`;
  };
</script>

<p class="text-subtext flex gap-2 text-sm">
  {#if createdAt}
    <span class="sr-only">Created at</span>
    <time datetime={dateToISO(createdAt)} title="created: {dateToISO(createdAt)}"
      >{dateToString(createdAt)}</time
    >
    →
  {/if}
  <span class="sr-only">Updated at</span>
  <time datetime={dateToISO(updatedAt)} title="updated: {dateToISO(updatedAt)}"
    >{dateToString(updatedAt)}</time
  >
</p>
