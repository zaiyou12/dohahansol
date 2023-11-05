<script lang="ts">
const lat = 37.5604038
const lng = 127.002479
const place = "소재우 배채연 결혼식장"
</script>

<div class="bg-white section">
  <div class="text-wrapper">
    <p class="sub-title">Map</p>
    <h2 class="mt-2">오시는 길</h2>
    <p class="body mt-10">2023년 12월 3일 일요일 오후 12시</p>
    <p class="body">앰배서더 서울 풀만 호텔 19F 남산룸</p>
  </div>
  <div class="mx-auto max-w-2xl pt-16"><img src="/imgs/map.webp" alt="map" loading="lazy"></div>
  <div class="text-wrapper mt-12">
    <div class="flex justify-evenly md:hidden">
      <a class="flex items-center px-2 py-1.5" href="nmap://route/public?dlat={lat}&dlng={lng}&dname={encodeURIComponent(place)}">
        <img class="w-8" src="/imgs/icons/naver_map.webp" alt="copy button" />
        <p class="ml-2 button">네이버 지도</p>
      </a>
      <a class="flex items-center px-2 py-1.5" href="tmap://route?rGoName={encodeURIComponent(place)}&rGoX={lng}&rGoY={lat}">
        <img class="w-8" src="/imgs/icons/t_map.svg" alt="copy button" />
        <p class="ml-2 button">T map</p>
      </a>
    </div>
  </div>
</div>


<style lang="postcss">
p.button {
  font-size: 1rem;
  line-height: 1rem; 
  line-height: 1.5rem; 
  color: #4B5563; 
}
</style>