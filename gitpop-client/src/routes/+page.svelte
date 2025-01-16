<script lang="ts">
	import { onMount } from 'svelte';
	import ImageList, { Item, ImageAspectContainer, Supporting, Label} from '@smui/image-list';
	import IconButton from '@smui/icon-button';

	import SearchBar from '../components/SearchBar.svelte';
	import ThreeScene from '../components/ThreeScene.svelte';

	//stores
	import { userFunkoPops } from '../stores/userFunkoPops';
	import { allFunkoPops } from '../stores/allFunkoPops';

	//TODO: remove dummy data and configure correct types for user inventory

	// import type { FunkoPop } from '../../types/funko/funko';

	import { getAllFunkos } from '../lib/api/funkos';
	import { getUserInventory } from '../lib/api/user';

	// let arr = $state(Array.from({ length: 15 }, (_, i) => ({ id: i, value: 0 })));

	let localUserFunkoPops = $state($userFunkoPops);
	let userInventory: any = $state();

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
		userFunkoPops.update((currentValue) => {
			return currentValue.filter((funko) => funko.id !== id);
		});
	}

	userFunkoPops.subscribe((value: any) => {
		console.log("userFunkoPops store updated:", value);
	});

	allFunkoPops.subscribe( (value: any) => {
		console.log("allFunkoPops store updated:", value);
	});

	const getFunkosAPI = async () => {
		try {
			// can be optimized to only run awaits at the same time if they are independent
			let allFunkos = await getAllFunkos();
			let userResponse = await getUserInventory();

			userInventory = userResponse.inventory;

			userFunkoPops.update((currentValue) => {
				return [...currentValue, ...userInventory];
			});

			allFunkoPops.update( (currentValue) => {
				return [...currentValue, ...allFunkos];
			});
		} catch (error) {
			console.error("Error fetching funkos", error);
		}
	}

	onMount(() => {
		getFunkosAPI();
	});
</script>

<SearchBar />
<div class="image-list-container">
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
						<Label>{item.funkoName}</Label>
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
