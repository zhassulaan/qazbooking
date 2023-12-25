<template>
	<div class='breadcrumbs'>
		<div class='breadcrumbs-element'>
			<p class='point'>●</p>
			<p class='text'>Главная</p>
		</div>
		<div
			v-for='(item, index) in text'
			:key='index'
			class='breadcrumbs-element'
		>
			<p class='point'>●</p>
			<p class='text'>{{ item }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	text: Array
});
</script>

<style scoped lang='scss'>
.breadcrumbs {
	display: flex;
	gap: .20833vw;
	&-element {
		display: flex;
		gap: .20833vw;
		.point,
		.text {
			color: var(--clr-blue);
		}
		.point {
			padding: 0 .3125vw;
		}
		.text {
			font-size: 14px;
		}
		&:first-child {
			.point,
			.text {
				color: var(--clr-grey6);
			}
		}
	}
}
</style>
