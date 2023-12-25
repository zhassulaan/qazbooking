<template>
	<div class='breadcrumbs'>
		<div class='breadcrumbs-element'>
			<p class='point'>●</p>
			<p class='text btn' @click="router.push('/')">Главная</p>
		</div>
		<div
			v-for='(item, index) in info'
			:key='index'
			class='breadcrumbs-element'
		>
			<p class='point'>●</p>
			<p class='text btn' @click="router.push(`/${item.id}`)">{{ item.text }}</p>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
	info: Array
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
			color: var(--clr-grey6);
		}
		.point {
			padding: 0 .3125vw;
		}
		.text {
			font-size: 14px;
		}
		&:last-child {
			.point,
			.text {
				color: var(--clr-blue);
			}
		}
	}
}
</style>
