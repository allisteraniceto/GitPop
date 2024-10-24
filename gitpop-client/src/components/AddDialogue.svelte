<script lang=ts>
	import Dialog, { Title as Titlee, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

    export let isDialogOpen: boolean = false;

    // let isDialogOpen: boolean = false;

    $: console.log("isDialogOpen:", isDialogOpen);
    
</script>

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
        <Button on:click={() => (isDialogOpen = false)}>
            <Label>Cancel</Label>
        </Button>
        <Button
            use={[InitialFocus]} 
            on:click={() => (isDialogOpen = false)}
        >
            <Label>Add</Label>
        </Button>
    </Actions>
</Dialog>

<style>
    input {
		color: black;
		margin-bottom: 1.25rem;
	}
</style>