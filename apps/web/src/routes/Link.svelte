<script lang="ts">
  import { fragment, graphql, type Link } from '$houdini';
  import { InlineLi, TextLink } from 'ui';

  export let link: Link;

  $: info = fragment(
    link,
    graphql`
      fragment Link on links {
        name
        link
      }
    `
  );
</script>

<InlineLi><TextLink href={$info.link}>{$info.name}</TextLink></InlineLi>
