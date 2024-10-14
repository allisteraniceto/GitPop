<script lang="ts">
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import Button, { Label } from '@smui/button';
	import List, { Item, Text } from '@smui/list';

	export let isDrawerOpen: boolean;
	export let isDialogOpen: boolean = false;

	$: console.log('isDialogOpen:', isDialogOpen);

	let active = 'Gray Kittens';

	function setActive(value: string) {
		active = value;
	}
</script>

<div class="drawer-container">
	<Drawer variant="dismissible" bind:open={isDrawerOpen}>
		<Header>
			<Title>Super Drawer</Title>
			<Subtitle>It's the best drawer.</Subtitle>
		</Header>
		<Content>
			<List>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('Gray Kittens')}
					activated={active === 'Gray Kittens'}
				>
					<Text>My collection</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('A Space Rocket')}
					activated={active === 'A Space Rocket'}
				>
					<Text>Favorites</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('100 Pounds of Gravel')}
					activated={active === '100 Pounds of Gravel'}
				>
					<Text>Wishlist</Text>
				</Item>
				<Item
					href="javascript:void(0)"
					on:click={() => setActive('All of the Shrimp')}
					activated={active === 'All of the Shrimp'}
				>
					<Text>Exclusive Pops </Text>
				</Item>
			</List>
			<div class="add-to-collection">
				<Button on:click={() => {isDialogOpen = !isDialogOpen}}>
					<Label>Add to my collection</Label>
				</Button>
			</div>
		</Content>
	</Drawer>
	<AppContent class="app-content">
		<main class="main-content">
			<slot />
		</main>
	</AppContent>
</div>

<style>
	/* These classes are only needed because the
      drawer is in a container on the page. */
	* :global(.drawer-container) {
		position: relative;
		display: flex;
		height: 350px;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 0;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}
	.main-content {
		overflow: auto;
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
	}

	.add-to-collection {
		padding: 16px;
		display: flex;
		justify-content: center;
	}
</style>
