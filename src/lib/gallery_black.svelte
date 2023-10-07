<script>
  import Gallery from '$lib/gallery.svelte';

  const images = [
    "door_1.webp", "door_2.webp", "door_6.webp", "door_5.webp", "door_7.webp",
    "house_3.webp", "house_2.webp", "house_6.webp", "house_8.webp", "house_7.webp",
    "wine_1.webp", "wine_2.webp", "wine_3.webp"
  ];
</script>

<div class="h-24 bg-gray-50"></div>
<Gallery imgPath="imgs/black_gallery" {images}/>
<div class="h-24 bg-gray-50"></div>
