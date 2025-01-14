import type { FunkoPop } from '../../types/funko/funko';
import { writable } from 'svelte/store';

export const userFunkoPops = writable<FunkoPop[]>([
	{
		id: 'a',
		name: 'name1',
		price: 20,
		category: 'category1'
	},
	{
		id: 'b',
		name: 'name2',
		price: 30,
		category: 'category2'
	},
	{
		id: 'c',
		name: 'name3',
		price: 40,
		category: 'category3'
	},
	{
		id: 'd',
		name: 'name4',
		price: 50,
		category: 'category4'
	}
]);
