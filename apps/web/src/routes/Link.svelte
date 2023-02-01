<script lang="ts">
  import { InlineLi, TextLink } from 'ui';

  export let name: string;
  export let href: string;
  export let blank = true;
</script>

<InlineLi><TextLink {href} {blank}>{name}</TextLink></InlineLi>
