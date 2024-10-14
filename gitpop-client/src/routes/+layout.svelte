<script lang="ts">
	import '../app.css';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import TabBar from '../components/TabBar.svelte';
	import Drawer from '../components/Drawer.svelte';
	import Dialog, { Title as Titlee, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

	let topAppBar: TopAppBar;
	let isDialogOpen: boolean = false;
	let isDrawerOpen: boolean = true;

	function handleMenuClick(e: MouseEvent) {
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
	>
		<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
		<Titlee id="simple-title">Dialog Title</Titlee>
		<Content id="simple-content">Super awesome dialog body text?</Content>
		<Actions>
			<Button on:click={() => (clicked = 'No')}>
			<Label>No</Label>
			</Button>
			<Button on:click={() => (clicked = 'Yes')}>
			<Label>Yes</Label>
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
</style>
