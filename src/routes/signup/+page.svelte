<script>
	import Input from '../input.svelte';
</script>

<form action="?/register" method="POST">
	<div class="w-auto min-h-screen flex flex-col items-center justify-center text-center">
		<h1 class="text-2xl p-2 m-2">This is the signup page.</h1>
		<div>
			<Input type="email" placeholder="Enter email here" label="Email" name="email" />
			<Input type="password" placeholder="Enter password here" label="Password" name="password" />
			<div class="w-auto flex justify-end">
				<button class="btn btn-primary mt-2" type="submit">
					Signup
				</button>
			</div>
		</div>
	</div>
</form>
