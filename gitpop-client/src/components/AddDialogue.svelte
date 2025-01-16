<script lang=ts>
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

    import type { FunkoPop } from '../../types/funko/funko';

    import { addFunkoPop } from '../stores/addFunkoPop.js';
    import { userFunkoPops } from '../stores/userFunkoPops.js';

	import { addUserFunko } from '../lib/api/user'

    import { v4 as uuidv4 } from 'uuid';

    interface Props{
        isDialogOpen?: boolean;
    } 

    let { isDialogOpen = $bindable(false) }: Props = $props();

    let funkoPopID: number = $state(0)
    let funkoPopName: string = $state("");
    let funkoPopPrice: number = $state(0);
    let funkoPopCategory: string = $state("");

    const resetForm = () => {
        funkoPopName = "";
        funkoPopPrice = 0;
        funkoPopCategory = "";
    };

    const todayDate = () => {
        let today = new Date();
        return today;
    };

    const handleAddUserFunko = async () => {
        let funkoPop: FunkoPop = {
            popID: uuidv4(),
            funkoName: funkoPopName,
            price: funkoPopPrice,
            category: funkoPopCategory,
            acquiredDate: todayDate(),
        }

        userFunkoPops.update((currentValue: FunkoPop[]) => {
            return [...currentValue, funkoPop];
        });

        const addedFunko = await addUserFunko(funkoPop);

        console.log("addedFunko", addedFunko);

        isDialogOpen = false;
        resetForm();
    }

    addFunkoPop.subscribe((value: any) => {
        console.log("funkoPop store updated:", value);
    });
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
        <Button
        use={[InitialFocus]} 
        onclick={() => handleAddUserFunko()}
        >   
        <Label>Add</Label>
            <span class="material-icons small-icon">add</span>  
        </Button>
        <Button onclick={() => isDialogOpen = false}>
            <Label>Cancel</Label>
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