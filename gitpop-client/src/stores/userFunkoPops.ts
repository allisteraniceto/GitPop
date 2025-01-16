import type { FunkoPop } from '../../types/funko/funko';
import { writable } from 'svelte/store';

// export const userFunkoPops = writable<FunkoPop[]>([

// TODO: add type to userFunkoPops
export const userFunkoPops = writable([
	{
		id: 'a',
		funkoName: 'name1',
		price: 20,
		category: 'category1'
	},
	{
		id: 'b',
		funkoName: 'name2',
		price: 30,
		category: 'category2'
	},
	{
		id: 'c',
		funkoName: 'name3',
		price: 40,
		category: 'category3'
	},
	{
		id: 'd',
		funkoName: 'name4',
		price: 50,
		category: 'category4'
	}
]);
