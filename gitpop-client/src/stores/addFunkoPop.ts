import { writable } from 'svelte/store';
import type { FunkoPop } from '../../types/funko/funko';

//store funko pop add/remove data

export const addFunkoPop = writable<FunkoPop>({
	id: 'a',
	name: '',
	price: 0,
	category: ''
});
