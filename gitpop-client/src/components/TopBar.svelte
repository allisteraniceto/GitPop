<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
    import TabBar from '../components/TabBar.svelte';
	import IconButton from '@smui/icon-button';


    let { topAppBar = $bindable(), isDrawerOpen = $bindable(), } = $props();

    // let isDrawerOpen: boolean = $state(true);

    const handleMenuClick = (e: MouseEvent) => {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: #504F4E; height: 4rem;">
    <Row>
        <Section style="width: 1rem;">
            <IconButton onclick={handleMenuClick} class="material-icons">menu</IconButton>
            <Title>GitPop</Title>
        </Section>
        <Section>
            <TabBar/>
        </Section>
    </Row>
</TopAppBar>
