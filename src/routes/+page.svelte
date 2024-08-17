<script lang="ts">
	import ImageList, { Item, Image, Supporting, Label } from '@smui/image-list';

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

<div class="image-list-container">
	<ImageList class="my-image-list-masonry" masonry>
		{#each Array(15) as _unused, i}
			<Item>
				<Image
					src="https://placehold.co/190x{getUnevenImageSize(
						i,
						107,
						200,
						Math.abs
					)}?text=190x{getUnevenImageSize(i, 107, 200, Math.abs)}"
					alt="Image {i + 1}"
				/>
				<Supporting>
					<Label>Image {i + 1}</Label>
				</Supporting>
			</Item>
		{/each}
	</ImageList>
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
