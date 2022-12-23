<script lang="ts">
  import { fragment, graphql, type Like } from '$houdini';
  import { TextLink, InlineLi } from 'ui';

  export let like: Like;

  $: data = fragment(
    like,
    graphql`
      fragment Like on like_items {
        name
        link
      }
    `
  );
</script>

<InlineLi>
  <TextLink href={$data.link}>{$data.name}</TextLink>
</InlineLi>
