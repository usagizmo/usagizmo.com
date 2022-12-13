<script lang="ts">
  import { fragment, graphql, type LikeItem } from '$houdini';
  import { TextLink, InlineLi } from 'ui';

  export let likeItem: LikeItem;

  $: data = fragment(
    likeItem,
    graphql`
      fragment LikeItem on like_items {
        name
        link
      }
    `
  );
</script>

<InlineLi>
  <TextLink href={$data.link}>{$data.name}</TextLink>
</InlineLi>
