<script lang="ts">
  import { InlineLi, TextLink } from 'ui';

  export let name: string;
  export let href: string;
</script>

<InlineLi><TextLink {href}>{name}</TextLink></InlineLi>
