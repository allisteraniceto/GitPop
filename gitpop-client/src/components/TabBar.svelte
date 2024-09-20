<script lang="ts">
	import Tab, { Icon, Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import { goto } from '$app/navigation';

	let tabs = [
		{
			icon: 'home',
			label: 'Home',
			route: '/'
		},
		{
			icon: 'favorites',
			label: 'Favorites',
			route: '/favorites'
		},
		{
			icon: 'info',
			label: 'About Us',
			route: '/about'
		}
	];

	let active: any = tabs[0];

	const handleTabClick = (tab: any) => {
		active = tab;
		goto(tab.route);
	}
</script>

<div>
	<TabBar {tabs} let:tab bind:active>
		<Tab {tab} on:click={() => handleTabClick(tab)}>
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
