import { writable } from 'svelte/store';

// Check if we have a stored theme preference, default to dark
const storedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : 'dark';
export const theme = writable(storedTheme || 'dark');

// Update localStorage when theme changes
theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('theme', value);
	}
});