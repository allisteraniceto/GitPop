<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import TabBar from '../components/TabBar.svelte';

	let topAppBar: TopAppBar;
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
	<Row>
		<Section>
			<IconButton class="material-icons">menu</IconButton>
			<Title>GitPop</Title>
		</Section>
		<Section>
			<div>
				<TabBar />
			</div>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<slot />
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
