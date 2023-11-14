<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let isLoading = true;

	onMount(async () => {
		setTimeout(() => {
			isLoading = false;
		}, 300); // 1 seconds for example
	});
</script>

<div class="hero">
	<img
		src="/imgs/main.webp"
		alt="main iamge of wedding"
		loading="lazy"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	{#if !isLoading}
		<img
			src="/imgs/main_cover.webp"
			alt="cover of main"
			loading="lazy"
			class="absolute inset-0 -z-10 h-full w-full object-cover"
			transition:fade={{ duration: 1000 }}
		/>
	{/if}
</div>

<style lang="postcss">
	.hero {
		@apply relative h-full w-full overflow-hidden;
	}
</style>
