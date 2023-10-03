<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'

  /**
   * @type {{ scrollPrev: () => void; scrollNext: () => void; selectedScrollSnap: () => number; }}
   */
  let emblaApi;

  /**
   * @param {{ detail: any; }} event
   */
  function onInit(event) {
    emblaApi = event.detail
  }

  function prevSection() {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }
  
  function nextSection() {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }

  export let imgPath = '';
  /**
	 * @type {String[]}
	 */
   export let images = [];
</script>

<div class="embla bg-gray-50">
  <div class="embla__viewport" use:emblaCarouselSvelte on:emblaInit={onInit} >
    <div class="embla__container">
      {#each images as src, index}
        <div class="embla__slide">
          <img src={`${imgPath}/${src}`} alt={`Gallery #${index}`} loading="lazy" />
        </div>
      {/each}
    </div>
  </div>
  <button class="absolute top-1/2 left-4 disabled:opacity-30 disabled:cursor-not-allowed" on:click={prevSection}>
    <img class="w-[26px] h-[26px] rotate-180" src="/carousel-arrow.svg" alt="carousel carousel left" loading="lazy"/>
  </button>
  <button class="absolute top-1/2 right-4 disabled:opacity-30 disabled:cursor-not-allowed" on:click={nextSection}>
    <img class="w-[26px] h-[26px]" src="/carousel-arrow.svg" alt="carousel carousel right" loading="lazy"/>
  </button>
</div>

<style lang="postcss">
  .embla {
    overflow: hidden;
    height: 80%;
    position: relative;
  }
  .embla__viewport {
    overflow: hidden;
    height: 100%;
  }
  .embla__container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 90%;
    grid-column-gap: 1rem;
    height: 100%;
    @media (min-width: 1024px) {
      grid-auto-columns: 30%;
      grid-column-gap: 2rem;
    }
  }
  .embla__slide {
    min-width: 0;
    min-height: 0;
  }
  img {
    height: 100%;
    object-fit: contain;
  }
</style>
