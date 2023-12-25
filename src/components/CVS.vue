<template>
	<div class='cvs'>
		<component :is='info.icon' />
		<p class='cvs-text'>{{ info.text }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
  info: Object,
});
</script>

<style scoped lang='scss'>
.cvs {
	display: flex;
	gap: .625vw;
	&-text {
		font-size: 18px;
	}
}
</style>
