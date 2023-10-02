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
    if (emblaApi) emblaApi.scrollPrev()
  }

  function nextSection() {
    if (emblaApi) emblaApi.scrollNext()
  }

  export let imgPath = '';
  /**
	 * @type {String[]}
	 */
   export let images = [];
</script>

<div class="embla bg-gray-50">
  <div class="embla__viewport" use:emblaCarouselSvelte on:emblaInit={onInit}>
    <div class="embla__container">
      {#each images as src, index}
        <div class="embla__slide"><img src={`${imgPath}/${src}`} alt={`Gallery #${index}`} loading="lazy" /></div>
      {/each}
    </div>
  </div>
  <button class="absolute top-1/2 left-4" on:click={prevSection}>
    <img class="w-[26px] h-[26px] rotate-180" src="/carousel-arrow.svg" alt="carousel carousel left" />
  </button>
  <button class="absolute top-1/2 right-4" on:click={nextSection}>
    <img class="w-[26px] h-[26px]" src="/carousel-arrow.svg" alt="carousel carousel right" />
  </button>
</div>

<style lang="postcss">
  .embla {
    overflow: hidden;
    height: 80%;
    position: relative;
  }
  .embla__container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 80%; /* Each slide covers 80% of the viewport */
    grid-column-gap: 2rem;
    @media (min-width: 1024px) {
      grid-auto-columns: 30%;
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
