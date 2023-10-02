<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
</script>

<div class="embla bg-gray-50">
  <div class="embla__viewport" use:emblaCarouselSvelte>
    <div class="embla__container">
      <div class="embla__slide"><img src="/imgs/black_gallery/door_1.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/door_2.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/door_3.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/door_4.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/door_5.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/door_6.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/door_7.webp" alt="So and Bae are both stand behind the red door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_1.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_2.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_3.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_4.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_5.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_6.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_7.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/house_8.webp" alt="So and Bae are both stand infront of the white door"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/wine_1.webp" alt="So and Bae are both holding a wind glass"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/wine_2.webp" alt="So and Bae are both holding a wind glass"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/wine_3.webp" alt="So and Bae are both holding a wind glass"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/wine_4.webp" alt="So and Bae are both holding a wind glass"/></div>
      <div class="embla__slide"><img src="/imgs/black_gallery/out_1.webp" alt="So and Bae are both stand outside of the house"/></div>
    </div>
  </div>
</div>

<style lang="postcss">
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