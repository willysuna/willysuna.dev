<script>
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="app" class:dark={$theme === 'dark'}>
	<ThemeToggle />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #ffffff;
		transition: background-color 0.3s ease;
	}

	.app.dark {
		background-color: #111827;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
	}
</style>