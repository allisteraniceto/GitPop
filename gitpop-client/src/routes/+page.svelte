<script lang="ts">
	import ImageList, { Item, ImageAspectContainer, Supporting, Label} from '@smui/image-list';
	import IconButton from '@smui/icon-button';

	import SearchBar from '../components/SearchBar.svelte';
	import ThreeScene from '../components/ThreeScene.svelte';

	let arr = $state(Array.from({ length: 15 }, (_, i) => ({ id: i, value: 0 })));

	function getUnevenImageSize(
		counter: number,
		base: number,
		variance: number,
		preAdd = (num: number) => num
	) {
		const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
		return base + Math.floor(preAdd(mid));
	}

	const removeItem = (id: number) => {
		arr = arr.filter(item => item.id !== id);
	}
</script>

<SearchBar />
<div class="image-list-container">
	<ImageList class="my-image-list-masonry" masonry>
		{#each arr as item, i}
			<div class="pop-card">
				<Item>
					<div class="close-button">
						<IconButton action="close" class="material-icons" onclick={() => removeItem(i)}>close</IconButton>					
					</div>
					<!-- <ImageAspectContainer> -->
						<ThreeScene/>
					<!-- </ImageAspectContainer> -->
					<Supporting>
						<Label>Image {item.id + 1}</Label>
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
		display: flex;
	}

	.image-list-container {
		padding-top: 2rem;
		overflow: auto;
	}

	.close-button {
		display: flex;
		flex-direction: row-reverse;
		top: 0.5rem;
		right: 0.5rem;
	}

	:global(.my-image-list-masonry) {
		@include image-list.masonry-columns(4);
		@include image-list.shape-radius(10px);
	}

	:global(.my-image-list__item) {
		min-width: 10rem;
	}

	@media (max-width: 600px) {
		:global(.my-image-list-masonry) {
			@include image-list.masonry-columns(3);
		}
	}
</style>
