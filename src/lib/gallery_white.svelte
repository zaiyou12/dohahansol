<script>
  import Gallery from '$lib/gallery.svelte';

  const images = [
    "white_gallery_cover.webp", "sit_1.jpg", "sit_2.jpg", "sit_3.jpg", "sit_4.jpg", "sit_5.jpg", "sit_6.jpg",
    "chair_1.jpg", "chair_2.jpg", "chair_3.jpg", "bed_0.jpg", "bed_1.jpg", "bed_2.jpg", "bed_3.jpg",
    "bed_4.jpg", "bed_5.jpg", "bed_6.webp", "bed_7.jpg", "bed_9.jpg", "stand.jpg"
  ];
</script>

<div class="bg-gray-50 px-6 py-24 sm:pt-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-base font-semibold leading-7 tracking-widest gallery">Gallery</p>
    <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">우리의 순간</h2>
  </div>
</div>

<Gallery imgPath="/imgs/white_gallery" {images}/>

<style lang="postcss">
  p.gallery {
    color: #328C4B;
  }
</style>