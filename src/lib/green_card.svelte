<div class="overflow-hidden w-full h-full bg">
  <div class="wrapper">
    <div class="date">
      <p class="text-white font-extrabold text-8xl sm:text-9xl">23</p>
      <p class="mt-8 text-white font-extrabold text-8xl sm:text-9xl tracking-widest">12</p>
      <p class="mt-8 text-white font-extrabold text-8xl sm:text-9xl">03</p>
    </div>
    <div class="items">
      <img src="imgs/save_the_date.webp" alt="save the date">
      <p class="mt-12 text-white font-bold tracking-wider text-3xl sm:text-4xl">23년 12월 3일</p>
      <p class="mt-4 text-white font-bold tracking-wider text-3xl sm:text-4xl">일요일 오후 12시</p>
      <p class="mt-4 text-white font-bold tracking-wider text-xl sm:text-2xl">앰배서더 서울 풀만 호텔 19F 남산룸</p>
    </div>
  </div>
</div>

<style lang="postcss">
  .bg {
    background-color: #36864C;
  }
  .wrapper {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    padding-left: 2rem; 
    max-width: 42rem;
    height: 100%;
    margin: auto;
    text-align: left; 
  }
  img {
    width: 80%;
    @media (min-width: 640px) {
      width: 90%;
    }
  }
</style>