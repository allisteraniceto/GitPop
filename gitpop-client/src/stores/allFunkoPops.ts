import { writable } from 'svelte/store';

interface FunkoItem {
	handle: string;
	title: string;
	imageName: string;
	series: string[];
}

export const allFunkoPops = writable<FunkoItem[]>([]);
