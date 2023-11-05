<script lang="ts">
  export let isWhiteToGray: boolean 
</script>

{#if isWhiteToGray}
<div class="h-8 bg-gradient-to-b from-white to-gray-50"></div>
{:else}
<div class="h-8 bg-gradient-to-b from-gray-50 to-white"></div>
{/if}