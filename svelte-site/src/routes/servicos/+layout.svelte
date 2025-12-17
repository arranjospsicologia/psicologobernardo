<script lang="ts">
    let { children } = $props();
</script>

<!-- Services pages inherit main layout, no additional wrapper needed -->
{@render children()}
