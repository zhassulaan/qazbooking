<template>
	<div class='form'>
		<p class='form-text'>{{ text }}</p>
		<input class='form-input' type='text' />
	</div>
</template>

<script setup>
const props = defineProps({
	text: String
});
</script>

<style scoped lang='scss'>
.form {
	height: 56px;
	padding: 8px 1.04167vw;
	border-radius: 4px;
	background-color: var(--clr-background);
	&-text {
		line-height: 16px;
		font-size: 12px;
		color: var(--clr-grey3);
	}
	&-input {
		width: 100%;
		height: 24px;
		color: var(--clr-grey3);
	}
}
</style>

