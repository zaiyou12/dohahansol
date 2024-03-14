<script lang="ts">
	const lat = 37.520759;
	const lng = 127.055829;
	const place = '구한솔 윤도하 결혼식장';
</script>

<div class="section bg-white">
	<div class="text-wrapper">
		<p class="sub-title">Map</p>
		<h2 class="mt-2">오시는 길</h2>
		<p class="body mt-10">2024년 4월 28일 일요일 </p>
		<p class="body">낮 12시 30분 드레스가든</p>
	</div>
	<div class="mx-auto max-w-2xl pt-16"><img src="/imgs/map.png" alt="map" loading="lazy" /></div>
	<div class="text-wrapper mt-12">
		<div class="flex justify-evenly md:hidden">
			<a
				class="flex items-center px-2 py-1.5"
				href="nmap://route/public?dlat={lat}&dlng={lng}&dname={encodeURIComponent(place)}"
			>
				<img class="w-8" src="/imgs/icons/naver_map.webp" alt="copy button" />
				<p class="button ml-2">네이버 지도</p>
			</a>
			<a
				class="flex items-center px-2 py-1.5"
				href="tmap://route?rGoName={encodeURIComponent(place)}&rGoX={lng}&rGoY={lat}"
			>
				<img class="w-8" src="/imgs/icons/t_map.svg" alt="copy button" />
				<p class="button ml-2">T map</p>
			</a>
		</div>
	</div>
</div>

<style lang="postcss">
	p.button {
		font-size: 1rem;
		line-height: 1rem;
		line-height: 1.5rem;
		color: #4b5563;
	}
</style>
