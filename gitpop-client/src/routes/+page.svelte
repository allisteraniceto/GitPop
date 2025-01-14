<script lang="ts">
	import { onMount } from 'svelte';
	import ImageList, { Item, ImageAspectContainer, Supporting, Label} from '@smui/image-list';
	import IconButton from '@smui/icon-button';

	import SearchBar from '../components/SearchBar.svelte';
	import ThreeScene from '../components/ThreeScene.svelte';

	import { userFunkoPops } from '../stores/userFunkoPops.js';
	import type { FunkoPop } from '../../types/funko/funko';

	import { getFunkos } from '../lib/api/funkos';

	// let arr = $state(Array.from({ length: 15 }, (_, i) => ({ id: i, value: 0 })));

	let localUserFunkoPops = $state($userFunkoPops);
	let funkos: any = $state();

	function getUnevenImageSize(
		counter: number,
		base: number,
		variance: number,
		preAdd = (num: number) => num
	) {
		const mid = (counter % 2 ? Math.cos : Math.sin)(counter) * variance;
		return base + Math.floor(preAdd(mid));
	}

	const removeItem = (id: string) => {
		userFunkoPops.update((currentValue: FunkoPop[]) => {
			return currentValue.filter((funko) => funko.id !== id);
		});
	}

	userFunkoPops.subscribe((value: any) => {
		console.log("useFunkoPops store updated:", value);
	});

	const getFunkosAPI = async () => {
		funkos = await getFunkos();
	}

	onMount(() => {
		getFunkosAPI();
	});
</script>

<SearchBar />
<div class="image-list-container">
	<h1>
		{#if funkos}
			{funkos}
		{:else}
			NOTHINGGG
		{/if}
	</h1>
	<ImageList class="my-image-list-masonry" masonry>
		{#each $userFunkoPops as item}
			<div class="pop-card">
				<Item>
					<div class="close-button" onclick={() => removeItem(item.id)}>
						<span class="material-icons close">close</span>					
					</div>
					<!-- <ImageAspectContainer> -->
						<ThreeScene/>
					<!-- </ImageAspectContainer> -->
					<Supporting>
						<Label>{item.name}</Label>
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

	.close-button{
		cursor: pointer;
	}

	.close-button:hover {
		color: grey;
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
