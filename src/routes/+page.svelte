<script lang="ts">
	import type { PageData } from './types';
	export let data: PageData;
</script>

<div class="w-auto min-h-screen flex flex-col items-center justify-center">
	<h1 class="text-2xl p-2 m-2">This is the homepage.</h1>
	{#if data.session}
		<h2 class="text-xl p-2 m-2">You are logged in as {data.session.user.email}.</h2>
		<div class="flex justify-end">
			<form action="/logout" method="POST">
				<button class="btn btn-warning">Logout</button>
			</form>
		</div>
	{:else}
		<div>
			<a href="./login" class="btn btn-primary"> Login </a>
			<a href="./signup" class="btn btn-primary h-2"> Sign Up </a>
		</div>
	{/if}
</div>
