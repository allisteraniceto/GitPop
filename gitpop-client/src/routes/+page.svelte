<script lang="ts">
	import ImageList, { Item, Image, Supporting, Label} from '@smui/image-list';

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
			<Item>
				<!-- <Image
					src="https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/876493/Naruto_Uzumaki_Vinyl_Art_Toys_d20b26e9-48f3-4e20-8269-1f273dc23d0b.JPG"
				/> -->
				<ThreeScene/>
				<Supporting>
					<Label>Image {i + 1}</Label>
				</Supporting>
			</Item>
		{/each}
	</ImageList>
	<!-- <ThreeScene/> -->
</div>

<style lang="scss">
	@use '@material/image-list/mixins' as image-list;

	.image-list-container {
		padding-top: 2rem;
	}

	:global(.my-image-list-masonry) {
		@include image-list.masonry-columns(5);
		@include image-list.shape-radius(10px);
		max-width: 680px;
	}

	@media (max-width: 599px) {
		:global(.my-image-list-masonry) {
			@include image-list.masonry-columns(3);
		}
	}
</style>
