<script lang="ts">
	export let isInvited = true;

	const subTitle = isInvited ? 'Invitation' : "We're getting married";
	const title = isInvited ? '소중한 분들을 초대합니다' : '결혼합니다';
</script>

<div class="section bg-white">
	<div class="img-wrapper">
		<img src="/imgs/ribbon.webp" alt="재우 ♥ 채연" loading="lazy" />
	</div>
	<div class="text-wrapper">
		<p class="sub-title">{subTitle}</p>
		<h2 class="mt-2">{title}</h2>
		<p class="body mt-10">두 사람이 서로에 대한 사랑과 믿음으로</p>
		<p class="body">앞으로의 인생길을 함께 가려고 합니다</p>
		<p class="body mt-6">먼 길도 가까운 길처럼</p>
		<p class="body">아름답지 않은 길도 아름다운 길처럼</p>
		<p class="body">두 손 잡고 웃으며 한 걸음씩 걸어가겠습니다.</p>
		<p class="body mt-6">그 시작을 축복해주세요</p>
	</div>
	<div class="img-wrapper pt-6">
		<img src="/imgs/signature.webp" alt="SO and BAE's signature" loading="lazy" />
	</div>
	<div class="mx-auto max-w-xs px-16 pt-6 sm:px-0">
		<img src="/imgs/date.webp" alt="SO and BAE's wedding date" loading="lazy" />
	</div>
</div>

<style lang="postcss">
	.img-wrapper {
		@apply mx-auto max-w-sm px-8 sm:max-w-lg sm:px-0;
	}
</style>
