<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'

  /**
	 * @type {{ scrollPrev: () => void; scrollNext: () => void; }}
	 */
  let emblaApi

  /**
	 * @param {{ detail: any; }} event
	 */
  function onInit(event) {
    emblaApi = event.detail
  }

  function prevSection() {
    if(emblaApi) emblaApi.scrollPrev()
  }

  function nextSection() {
    if(emblaApi) emblaApi.scrollNext()
  }
</script>

<div class="bg-gray-50 px-6 pt-24 sm:pt-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <p class="text-base font-semibold leading-7 tracking-widest gallery">Gallery</p>
    <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">우리의 순간</h2>
  </div>
</div>
<div class="embla bg-gray-50">
  <div class="embla__viewport" use:emblaCarouselSvelte on:emblaInit={onInit}>
    <div class="embla__container">
      <div class="embla__slide"><img src="/imgs/white_gallery/white_gallery_cover.webp" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/sit_1.jpg" alt="So and Bae are both sit on the ground" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/sit_2.jpg" alt="So and Bae are both sit on the ground" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/sit_3.jpg" alt="So and Bae are both sit on the ground" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/sit_4.jpg" alt="So and Bae are both sit on the ground" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/sit_5.jpg" alt="So and Bae are both sit on the ground" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/sit_6.jpg" alt="So and Bae are both sit on the ground" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/chair_1.jpg" alt="So and Bae are both sit on the chair" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/chair_2.jpg" alt="So and Bae are both sit on the chair" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/chair_3.jpg" alt="So and Bae are both sit on the chair" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_0.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_1.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_2.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_3.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_4.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_5.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_6.webp" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_7.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/bed_9.jpg" alt="So and Bae are both sit on the bed" loading="lazy"/></div>
      <div class="embla__slide"><img src="/imgs/white_gallery/stand.jpg" alt="So and Bae are both stand on the ground" loading="lazy"/></div>
    </div>
  </div>
  <!-- <button class="embla__prev" on:click={prevSection}>Prev</button>
  <button class="embla__next" on:click={nextSection}>Next</button> -->
</div>

<style lang="postcss">
  p.gallery {
    color: #328C4B;
  }
  .embla {
    overflow: hidden;
    height: 80%;
    padding-top: 2rem;

    @media (min-width: 1024px) {
      height: 100%;
    }
  }
  .embla__container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 80%; /* Each slide covers 80% of the viewport */
    grid-column-gap: 2rem;
    @media (min-width: 1024px) {
      grid-auto-columns: 40%;
    }
  }
  .embla__slide {
    min-width: 0;
  }
  img {
    height: 100%;
    object-fit: contain;
  }
</style>
