<script lang="ts">
  import { fragment, graphql, type Work } from '$houdini';
  import { Li, TextLink } from 'ui';

  export let work: Work;

  $: info = fragment(
    work,
    graphql`
      fragment Work on links {
        name
        link
        text
      }
    `
  );
</script>

<Li>
  <strong><TextLink href={$info.link}>{$info.name}</TextLink></strong>:
  <span class="max-md:ml-4 max-md:block">{$info.text}</span>
</Li>
