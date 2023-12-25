<template>
	<div class='box' :style='{ backgroundColor: info.background }'>
		<h4 class='box-title' :style='{ color: info.color }'>{{ info.title }}</h4>
		<p class='box-text'>{{ info.text }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
	info: Object,
});
</script>

<style scoped lang='scss'>
.box {
	display: grid;
	grid-gap: 15px;
	padding: 24px 1.66667vw 17px 1.5625vw;
	border-radius: 16px;
	&-title,
	&-text {
		text-align: center;
	}
}
</style>
