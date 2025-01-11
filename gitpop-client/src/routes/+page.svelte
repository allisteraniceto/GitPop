<script lang="ts">
	import ImageList, { Item, ImageAspectContainer, Supporting, Label} from '@smui/image-list';
	import IconButton from '@smui/icon-button';

	import SearchBar from '../components/SearchBar.svelte';
	import ThreeScene from '../components/ThreeScene.svelte';

	function getUnevenImageSize(
		counter: number,
		base: number,
		variance: number,
		preAdd = (num: number) => num
	) {
		const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
		return base + Math.floor(preAdd(mid));
	}
</script>

<SearchBar />
<div class="image-list-container">
	<ImageList class="my-image-list-masonry" masonry>
		{#each Array(15) as _unused, i}
			<div class="pop-card">
				<Item>
					<IconButton action="close" class="material-icons">close</IconButton>
					<!-- <Image
						src="https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/876493/Naruto_Uzumaki_Vinyl_Art_Toys_d20b26e9-48f3-4e20-8269-1f273dc23d0b.JPG"
					/> -->
					<!-- <ImageAspectContainer> -->
						<ThreeScene/>
					<!-- </ImageAspectContainer> -->
					<Supporting>
						<Label>Image {i + 1}</Label>
					</Supporting>
				</Item>
			</div>
		{/each}
	</ImageList>
	<!-- <ThreeScene/> -->
</div>

<style lang="scss">
	@use '@material/image-list/mixins' as image-list;

	.pop-card {
		width: 15rem;
	}

	.image-list-container {
		padding-top: 2rem;
		overflow: auto;
	}

	:global(.my-image-list-masonry) {
		@include image-list.masonry-columns(4);
		@include image-list.shape-radius(10px);
	}

	:global(.my-image-list__item) {
		min-width: 15rem;

	}

	@media (max-width: 599px) {
		:global(.my-image-list-masonry) {
			@include image-list.masonry-columns(3);
		}
	}
</style>
