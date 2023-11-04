<script lang="ts">
const text = "서울 중구 동호로 287"

const onCopy = () => {
  navigator.clipboard.writeText(text).then(()=> alert('주소가 복사되었습니다'))
}

</script>

<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-wrapper">
    <p class="sub-title">Map</p>
    <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">오시는 길</h2>
  </div>
  <div class="mx-auto max-w-2xl pt-16"><img src="/imgs/map.webp" alt="map" loading="lazy"></div>
  <div class="text-wrapper">
    <p class="body font-bold gallery mt-10">앰배서더 서울 풀만</p>
    <div class="flex flex-row justify-center items-center">
      <button on:click={onCopy}>
        <p class="body underline">{text} (장충동2가 186-54)</p>
      </button>
      <button on:click={onCopy}>
        <img class="w-8 ml-2 mb-1" src="/imgs/copy.svg" alt="copy button" />
      </button>
    </div>
  </div>
</div>


<style lang="postcss">
  
</style>