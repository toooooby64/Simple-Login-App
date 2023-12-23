<script>
	export let type;
	export let placeholder;
	export let label;
</script>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">{label}</span>
	</div>
	<input {type} {placeholder} class="input input-bordered w-full max-w-xs" />
</label>
