<script lang="ts">
	import ImageList, {
		Item,
		ImageAspectContainer,
		Image,
		Supporting,
		Label
	} from '@smui/image-list';
</script>

<ImageList class="my-image-list-standard">
	{#each Array(15) as _unused, i}
		<Item>
			<ImageAspectContainer>
				<Image src="https://placehold.co/190x190?text=square" alt="Image {i + 1}" />
			</ImageAspectContainer>
			<Supporting>
				<Label>Image {i + 1}</Label>
			</Supporting>
		</Item>
	{/each}
</ImageList>

<style lang="scss">
	@use '@material/image-list/mixins' as image-list;

	:global(.my-image-list-standard) {
		@include image-list.standard-columns(5);
		max-width: 35rem;
	}

	@media (max-width: 599px) {
		:global(.my-image-list-standard) {
			@include image-list.standard-columns(3);
		}
	}
</style>
