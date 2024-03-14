<script>
	import Gallery from '$lib/gallery.svelte';
	const images = Array.from(Array(8).keys()).map(
		(x) => `vertical_${(x + 1).toString()}.webp`
	);
</script>

<div class="h-24 bg-gray-50"></div>
<div class="bg-gray-50 px-6 py-24 sm:pt-32 lg:px-8">
	<div class="text-wrapper">
		<p class="sub-title">Gallery</p>
		<h2 class="mt-2">우리의 순간</h2>
	</div>
</div>

<Gallery imgPath="imgs/vertical" {images} />
