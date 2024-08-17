<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import TabBar from '../components/TabBar.svelte';
	import Drawer from '../components/Drawer.svelte';

	let topAppBar: TopAppBar;

	let isDrawerOpen: boolean;

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
			<TabBar />
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<Drawer {isDrawerOpen}>
		<slot />
	</Drawer>
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
