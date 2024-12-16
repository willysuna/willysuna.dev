<script>
	import { theme } from '$lib/stores/theme';
</script>

<div class="container">
	<div class="card" class:dark={$theme === 'dark'}>
		<div class="image-container">
			<img
				src="https://github.com/willysuna/willysuna.dev/blob/main/get-your-free-tvs.gif?raw=true	"
				alt="Profile"
			/>
		</div>
		<div class="content">
			<div class="header">
				<div class="name-container">
					<h1><b class="glow">William</b></h1>
					<span class="pronouns poppins-semibold">(he/they)</span>
				</div>
			</div>
			<p class="bio">
				Developer in development.
				<br>
				Learning <b class="text-red-400">Rust</b> and <b class="text-purple-400">C++</b>
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		padding: 1rem;
	}

	.card {
		display: flex;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		max-width: 800px;
		width: 100%;
		overflow: hidden;
		padding: 2rem;
		gap: 2rem;
		transition: all 0.3s ease;
	}

	.card.dark {
		background: #1f2937;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
	}

	.image-container {
		flex-shrink: 0;
		width: 200px;
		height: 200px;
		border-radius: 8px;
		overflow: hidden;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		margin-bottom: 1rem;
	}

	.name-container {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 1rem;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0;
		color: #1f2937;
		text-align: left;
		position: relative;
	}

	.card.dark h1 {
		color: #f3f4f6;
	}

	.pronouns {
		color: #6b7280;
		font-size: 0.9rem;
		margin-top: 0.25rem;
	}

	.card.dark .pronouns {
		color: #9ca3af;
	}

	.bio {
		color: #374151;
		line-height: 1.6;
		margin: 0;
	}

	.card.dark .bio {
		color: #d1d5db;
	}

	@media (max-width: 640px) {
		.card {
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 1.5rem;
		}

		.image-container {
			width: 150px;
			height: 150px;
		}

		.name-container {
			flex-direction: column;
			align-items: center;
			gap: 0.25rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>