<script>
	import Gallery from '$lib/gallery.svelte';
	const images = Array.from(Array(3).keys()).map(
		(x) => `horizon_${(x + 1).toString()}.webp`
	);
</script>

<div class="h-24 bg-gray-50"></div>
<Gallery imgPath="imgs/horizontal" {images} />
<div class="h-24 bg-gray-50"></div>
