<script>
	import { MetaTags } from 'svelte-meta-tags';
	import '../app.css';
</script>

<MetaTags
	title="재우 ❤️ 채연, Our happy wedding"
	titleTemplate="재우 ❤️ 채연 | Our happy wedding"
	description="23년 12월 3일 일요일 오후 12시. 두 사람이 서로에 대한 사랑과 믿음으로 앞으로의 인생길을 함께 가려고 합니다. 먼 길도 가까운 길처럼 아름답지 않은 길도 아름다운 길처럼 두 손 잡고 웃으며 한 걸음씩 걸어가겠습니다. 그 시작을 축복해주세요."
	openGraph={{
		url: 'https://soandbae.info',
		title: '재우 ❤️ 채연, Our happy wedding',
		description:
			'23년 12월 3일 일요일 오후 12시. 두 사람이 서로에 대한 사랑과 믿음으로 앞으로의 인생길을 함께 가려고 합니다. 먼 길도 가까운 길처럼 아름답지 않은 길도 아름다운 길처럼 두 손 잡고 웃으며 한 걸음씩 걸어가겠습니다. 그 시작을 축복해주세요.',
		images: [
			{
				url: 'https://soandbae.info/cover.webp',
				width: 400,
				height: 264,
				alt: 'Og Cover Image'
			}
		],
		siteName: '재우 ❤️ 채연'
	}}
/>
<slot />
