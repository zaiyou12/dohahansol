<script lang="ts">
	export let isInvited = true;

	const subTitle = isInvited ? 'Invitation' : "We're getting married";
	const title = isInvited ? '소중한 분들을 초대합니다' : '결혼합니다';
</script>

<div class="section bg-white">
	<div class="text-wrapper">
		<p class="sub-title">{subTitle}</p>
		<h2 class="mt-2">{title}</h2>
		<p class="body mt-10">우리가 함께 영원을 약속할 소중한 그날을 오랫동안 기다려왔습니다.</p>
		<p class="body">그 오랜 기다림이 새로운 행복으로 시작될 날이 다가옵니다.</p>
		<p class="body mt-6">바쁘시더라도 부디 참석하시어 저희 둘이 하나 되는 날을</p>
		<p class="body">함께 축복해 주시고 격려해 주셨으면 좋겠습니다.</p>
	</div>
</div>

<style lang="postcss">
	.img-wrapper {
		@apply mx-auto max-w-sm px-8 sm:max-w-lg sm:px-0;
	}
</style>
