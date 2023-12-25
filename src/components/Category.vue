<template>
	<div class='category'>
		<div class='category-button btn' :style='{ backgroundColor: info.color }'>
			<component :is='info.icon' />
		</div>
		<h6 class='category-text'>{{ info.text }}</h6>
	</div>
</template>

<script setup>
const props = defineProps({
	info: Object,
});
</script>

<style scoped lang='scss'>
.category {
	&-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 9.27083vw;
		height: 9.27083vw;
		border-radius: 20px;
	}
	&-text {
		color: var(--clr-grey);
		margin-top: 20px;
		text-align: center;
	}
}
</style>
