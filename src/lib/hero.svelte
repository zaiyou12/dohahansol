<div class="hero">
	<img
			src="/imgs/main.webp"
			alt="main iamge of wedding"
			class="absolute inset-0 -z-10 h-full w-full object-cover"
		/>
	<div class="hero-content">
		<div class="info">
			<p>SAVE THE DATE</p>
			<p>HANSOL AND DOHA</p>
		</div>
		<div class="date">
			<h2>28</h2>
			<h2>APRIL</h2>
			<h2>2024</h2>
		</div>
		<div class="info">
			<p>DRESS GARDEN</p>
			<p>GANGNAM SEOUL</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.hero {
		@apply relative h-full w-full overflow-hidden;
	}
	.hero-content {
		@apply mx-auto flex h-full max-w-xl flex-col justify-around bg-black bg-opacity-30 px-8 text-left;
	}
	.info p {
		font-family: 'cantarell', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas';
		@apply text-lg uppercase leading-8 tracking-widest text-white;
	}
	.date h2 {
		font-family: 'zolina', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman';
		@apply mt-4 text-4xl font-bold leading-tight tracking-widest text-white sm:mt-8 sm:text-6xl;
	}
</style>