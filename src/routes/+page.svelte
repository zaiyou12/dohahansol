<script>
	import Hero from '$lib/hero.svelte';
	import Invitation from '$lib/invitation.svelte';
	import GalleryWhite from '$lib/gallery_white.svelte';
	import GalleryBlack from '$lib/gallery_black.svelte';
	import Map from '$lib/map.svelte';
	import Rsvp from '$lib/rsvp.svelte';
	import Account from '$lib/account.svelte';
	import Footer from '$lib/footer.svelte';
	import GradientDivider from '$lib/gradient_divider.svelte';
</script>

<div class="h-full w-full">
	<Hero />
	<Invitation />
	<GradientDivider isWhiteToGray={true} />
	<GalleryWhite />
	<GalleryBlack />
	<GradientDivider isWhiteToGray={false} />
	<Map />
	<GradientDivider isWhiteToGray={true} />
	<Rsvp />
	<Footer />
</div>
