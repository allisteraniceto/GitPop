<script>
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	let tabs = [
		{
			icon: 'home',
			label: 'Home'
		},
		{
			icon: 'favorites',
			label: 'Favorites'
		},
		{
			icon: 'info',
			label: 'About Us'
		}
	];
	let active = tabs[0];
</script>

<div>
	<TabBar {tabs} let:tab bind:active>
		<Tab {tab}>
			<Icon class="material-icons">{tab.icon}</Icon>
			<Label>{tab.label}</Label>
		</Tab>
	</TabBar>
</div>

<style>
	/* Override the active tab color */
	:global(.mdc-tab--active .mdc-tab__text-label) {
		color: white; /* Change to your desired active color */
	}

	:global(.mdc-tab--active .mdc-tab__icon) {
		color: white; /* Change to your desired active icon color */
	}
</style>
