<script>
	import Gallery from '$lib/gallery.svelte';
	const images = Array.from(Array(18).keys()).map(
		(x) => `black_${(x + 1).toString().padStart(2, '0')}.webp`
	);
</script>

<div class="h-24 bg-gray-50"></div>
<Gallery imgPath="imgs/black_gallery" {images} />
<div class="h-24 bg-gray-50"></div>
