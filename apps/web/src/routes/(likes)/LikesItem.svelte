<script lang="ts">
  import { fragment, graphql, type LikeItem } from '$houdini';
  import TextLink from 'ui/components/TextLink.svelte';

  export let likeItem: LikeItem;

  $: data = fragment(
    likeItem,
    graphql`
      fragment LikeItem on like_items {
        id
        name
        link
      }
    `
  );
</script>

<li>
  <TextLink href={$data.link}>{$data.name}</TextLink>
</li>
