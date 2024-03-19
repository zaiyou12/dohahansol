<script lang="ts">
	import Modal from '$lib/modal.svelte';

	const subTitle = 'Contact';
	const title = '마음 전하실 곳';
	const account_1 = '457124-52-115562';
	const account_2 = '302-1412-0708-11';
	const account_3 = '402401-04-293021';
	const account_4 = '703001-01-222310';

	let open = false;

	function openDialog(event: MouseEvent) {
		open = true;
	}
	function closeDialog(event: MouseEvent) {
		open = false;
	}

	const onCopy = (text: string) => {
		navigator.clipboard.writeText(text).then(() => alert('계좌번호가 복사되었습니다'));
	};
</script>

<div class="section bg-white">
	<div class="text-wrapper">
		<p class="sub-title">{subTitle}</p>
		<h2 class="mt-2">{title}</h2>
		<!-- <p class="body mt-10">{@html desc}</p> -->
		<p class="body mt-10 font-bold">구기남·정종임의 장남 구한솔</p>
		<p class="body mt-2 font-bold">(故)윤영호·정희경 의 장녀 윤도하</p>
	</div>
	<div class="mt-8 flex justify-center">
		<button class="max-w-md" on:click={openDialog}>{' '}전달하기{' '}</button>
	</div>
	<Modal {open} {title} {subTitle} {closeDialog}>
		<div class="mt-4 flex flex-row items-center justify-center gap-x-2">
			<p class="whitespace-nowrap"><strong>신랑측:</strong></p>
			<p class="whitespace-nowrap">농협 정종임</p>
			<button on:click={() => onCopy(account_1)}>
				{account_1}
			</button>
			<button class="p-0" on:click={() => onCopy(account_1)}>
				<img class="w-4" src="/imgs/copy.svg" alt="copy button" />
			</button>
		</div>
		<div class="mt-4 flex flex-row items-center justify-center gap-x-2">
			<p class="whitespace-nowrap text-white"><strong>신랑측:</strong></p>
			<p class="whitespace-nowrap">농협 구한솔</p>
			<button on:click={() => onCopy(account_2)}>
				{account_2}
			</button>
			<button class="p-0" on:click={() => onCopy(account_2)}>
				<img class="w-4" src="/imgs/copy.svg" alt="copy button" />
			</button>
		</div>
		<div class="mt-4 flex flex-row items-center justify-center gap-x-2">
			<p class="whitespace-nowrap"><strong>신부측:</strong></p>
			<p class="whitespace-nowrap">국민 정희경</p>
			<button on:click={() => onCopy(account_3)}>
				{account_3}
			</button>
			<button class="p-0" on:click={() => onCopy(account_3)}>
				<img class="w-4" src="/imgs/copy.svg" alt="copy button" />
			</button>
		</div>
		<div class="mt-4 flex flex-row items-center justify-center gap-x-2">
			<p class="whitespace-nowrap text-white"><strong>신부측:</strong></p>
			<p class="whitespace-nowrap">국민 윤도하</p>
			<button on:click={() => onCopy(account_4)}>
				{account_4}
			</button>
			<button class="p-0" on:click={() => onCopy(account_4)}>
				<img class="w-4" src="/imgs/copy.svg" alt="copy button" />
			</button>
		</div>
	</Modal>
</div>

<style lang="postcss">
	button {
		@apply flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white;
	}
</style>
