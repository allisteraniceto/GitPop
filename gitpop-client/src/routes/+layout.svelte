<script lang="ts">
	import '../app.css';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import TabBar from '../components/TabBar.svelte';
	import Drawer from '../components/Drawer.svelte';
	import AddDialogue from '../components/AddDialogue.svelte';

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
	<AddDialogue bind:isDialogOpen/>
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


</style>
