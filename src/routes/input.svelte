<script>
	export let type;
	export let placeholder;
	export let label;
	export let name;
</script>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">{label}</span>
	</div>
	<input {name} {type} {placeholder} class="input input-bordered w-full max-w-xs" />
</label>
