<script>
	import { theme } from '$lib/stores/theme';

	function toggleTheme() {
		$theme = $theme === 'dark' ? 'light' : 'dark';
	}
</script>

<button
	class="theme-toggle"
	on:click={toggleTheme}
	aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if $theme === 'dark'}
		🌞
	{:else}
		🌙
	{/if}
</button>

<style>
	.theme-toggle {
		position: fixed;
		top: 1rem;
		right: 1rem;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 50%;
		transition: transform 0.2s ease;
		z-index: 100;
	}

	.theme-toggle:hover {
		transform: scale(1.1);
	}
</style>