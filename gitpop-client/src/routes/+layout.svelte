<script lang="ts">
	import '../app.css';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import TopBar from '../components/TopBar.svelte'
	import Drawer from '../components/Drawer.svelte';
	import AddDialogue from '../components/AddDialogue.svelte';

	interface Props {
		children?: any;
	}
	
	let { children }: Props = $props();
	let topAppBar: TopAppBar | any = $state();

	let isDialogOpen: boolean = $state(false);
	let isDrawerOpen: boolean = $state(true);

	const handleMenuClick = (e: MouseEvent) => {
		isDrawerOpen = !isDrawerOpen;
	}

	$effect(() => {
		console.log("isDrawerOpen", isDrawerOpen);
	})
</script>

<TopBar bind:topAppBar bind:isDrawerOpen/>
<AutoAdjust {topAppBar}>
	<Drawer {isDrawerOpen} bind:isDialogOpen>
		{@render children?.()}
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
