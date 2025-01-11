<script lang=ts>
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';


    interface Props{
        isDialogOpen?: boolean;
    } 

    let { isDialogOpen = $bindable(false) }: Props = $props();

    let funkoPopName: string = $state("");
    let funkoPopPrice: number = $state(0);
    let funkoPopCategory: string = $state("");
</script>

<Dialog
    bind:open={isDialogOpen}
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
    class="custom-dialog"
>
<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
<Title id="simple-title">Add to my collection</Title>
    <Content id="simple-content">
        <p>Who's the lucky funko pop today?</p>
        <input type="text" placeholder="Enter the name of the funko pop" bind:value={funkoPopName}/>
        <p>Hard earned money I paid for 😊</p>
        <input type="number" placeholder="Enter the price of the funko pop" bind:value={funkoPopPrice}/>
        <p>Category</p>
        <input type="text" placeholder="Enter the category of the funko pop" bind:value={funkoPopCategory}/>
    </Content>

    <Actions>
        <Button onclick={() => (isDialogOpen = false)}>
            <Label>Cancel</Label>
        </Button>
        <Button
            use={[InitialFocus]} 
            onclick={() => (isDialogOpen = false)}
        >
            <Label>Add</Label>
            <span class="material-icons small-icon">add</span>
        </Button>
    </Actions>
</Dialog>

<style>
    input {
		color: black;
		margin-bottom: 1.25rem;
	}
    .small-icon{
        font-size: 13px
    }
</style>