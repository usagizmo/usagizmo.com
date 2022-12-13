<script lang="ts">
  import { fragment, graphql, type LikeItem } from '$houdini';

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
  <a href={$data.link} target="_blank" rel="noopener noreferrer">{$data.name}</a>
</li>
