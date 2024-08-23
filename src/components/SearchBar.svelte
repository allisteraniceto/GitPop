<script>
	import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

	const items = [
		{
			label: 'All categories'
		},
		{
			label: 'Collections'
		},
		{
			label: 'Templates'
		},
		{
			label: 'Design'
		},
		{
			label: 'Logos'
		}
	];

	let selectCategory = 'All categories';
</script>

<div class="flex justify-center">
	<form class="flex w-[45rem]">
		<div class="relative">
			<Button class="border-primary-700 whitespace-nowrap rounded-e-none border border-e-0">
				{selectCategory}
				<ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
			</Button>
			<Dropdown classContainer="w-40">
				{#each items as { label }}
					<DropdownItem
						on:click={() => {
							selectCategory = label;
						}}
						class={selectCategory === label ? 'underline' : ''}
					>
						{label}
					</DropdownItem>
				{/each}
			</Dropdown>
		</div>
		<Search
			size="md"
			class="rounded-none py-2.5"
			placeholder="Search Funko Pops, Collections, Funko Number"
		/>
		<Button class="rounded-s-none !p-2.5">
			<SearchOutline class="h-6 w-6" />
		</Button>
	</form>
</div>
