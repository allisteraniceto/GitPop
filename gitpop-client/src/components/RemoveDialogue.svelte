<script lang='ts'>
    import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

	import { removeUserFunko } from '../lib/api/user';

	import { userFunkoPops } from '../stores/userFunkoPops';

    let { removeDialog = $bindable(), removePopID } = $props();

    const handleRemove = async () => {
        const response = await removeItem(removePopID);
        console.log("response", response);
        removeUserFunko(removePopID);
        removeDialog = false;
    }

    const removeItem = (id: string) => {
		userFunkoPops.update((currentValue) => {
			return currentValue.filter((funko) => funko.popID !== id);
		});
	}

    userFunkoPops.subscribe((value: any) => {
		console.log("userFunkoPops store updated:", value);
	});
</script>

<Dialog
    bind:open={removeDialog}
    aria-labelledby="simple-title"
    aria-describedby="simple-content"
>
    <Title id="simple-title">Remove Pop</Title>
    <Content id="simple-content">Are you sure you want to delete this pop?</Content>
    <Actions>
        <Button onclick={() => {handleRemove()}}>
            <Label>Confirm</Label>
        </Button>
        <Button onclick={() => {removeDialog=false}}>
            <Label>Cancel</Label>
        </Button>
    </Actions>
</Dialog>
