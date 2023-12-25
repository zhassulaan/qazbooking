<template>
	<div :class="{ 'button btn': true, 'blue': color }">
		<CircledArrow v-if='icon' class='button-icon' />
		<p class='button-text'>{{ text }}</p>
	</div>
</template>

<script setup>
import CircledArrow from '@/components/icons/CircledArrow.vue';

const props = defineProps({
	text: String,
  icon: Boolean,
  color: Boolean
});
</script>

<style scoped lang='scss'>
.button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .41667vw;
	width: fit-content;
	height: 48px;
	padding: 14px 1.66667vw;
	border-radius: 4px;
	background-color: var(--clr-blue);
	&.blue {
		background-color: transparent;
		.button-text {
			color: var(--clr-blue);
		}
	}
	&-icon {
		width: 16px;
		height: 16px;
	}
	&-text {
		white-space: nowrap;
		color: var(--clr-white);
	}
}
</style>
