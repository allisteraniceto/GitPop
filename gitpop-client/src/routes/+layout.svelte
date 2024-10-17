<script lang="ts">
	import '../app.css';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import TabBar from '../components/TabBar.svelte';
	import Drawer from '../components/Drawer.svelte';
	import Dialog, { Title as Titlee, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

	let topAppBar: TopAppBar;
	let isDialogOpen: boolean = false;
	let isDrawerOpen: boolean = true;

	const handleMenuClick = (e: MouseEvent) => {
		isDrawerOpen = !isDrawerOpen;
		console.log('Yeeeeeeeeeeeeet:', isDrawerOpen);
	}
</script>

<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: #504F4E">
	<Row>
		<Section style="width: 1rem;">
			<IconButton on:click={handleMenuClick} class="material-icons">menu</IconButton>
			<Title>GitPop</Title>
		</Section>
		<Section>
			<TabBar></TabBar>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<Drawer {isDrawerOpen} bind:isDialogOpen>
		<slot/>
	</Drawer>
	<Dialog
		bind:open={isDialogOpen}
		aria-labelledby="simple-title"
		aria-describedby="simple-content"
		class="custom-dialog"
	>
		<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
		<Titlee id="simple-title">Add to my collection</Titlee>
		<Content id="simple-content">
			<p>Who's the lucky funko pop today?</p>
			<input type="text" placeholder="Enter the name of the funko pop" />
			<p>Hard earned money I paid for 😊</p>
			<input type="number" placeholder="Enter the price of the funko pop" />
			<p>Category</p>
			<input type="text" placeholder="Enter the category of the funko pop" />
		</Content>
		
		<Actions>
			<Button on:click={() => (clicked = 'No')}>
				<Label>Cancel</Label>
			</Button>
			<Button
				use={[InitialFocus]} 
				on:click={() => (clicked = 'Yes')}
			>
				<Label>Add</Label>
			</Button>
		</Actions>
	</Dialog>
</AutoAdjust>

<style>
	/* Hide everything above this component. */
	:global(#smui-app),
	:global(body),
	:global(html) {
		display: block !important;
		height: auto !important;
		width: auto !important;
		position: static !important;
		margin: 0;
	}
	:global(.mdc-dialog__surface){
		width: 30rem;
		height: 25rem;
		max-height: 100%;
	}
	:global(.mdc-dialog__actions){
		padding: 0.750rem;
	}

	input {
		color: black;
		margin-bottom: 1.25rem;
	}
</style>
