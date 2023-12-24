<script>
	import Input from '../input.svelte';
</script>

<form action="?/login" method="post">
	<div class="w-auto min-h-screen flex flex-col items-center justify-center text-center">
		<h1 class="text-2xl p-2 m-2">This is the Login page.</h1>
		<div>
			<Input type="text" placeholder="Enter username here" label="Username" name="username" />
			<Input type="password" placeholder="Enter password here" label="Password" name="password" />

			<div class="w-auto flex justify-end">
				<button class="btn btn-primary mt-2" type="submit">Login </button>
			</div>
		</div>
	</div>
</form>
