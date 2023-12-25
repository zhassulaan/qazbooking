<template>
	<div class='blog'>
		<div class='blog-image'>
			<img :src='info.image' :alt='info.name' />
		</div>
		
		<div class='blog-content'>
			<p class='blog-content__date'>{{ info.date }}</p>
			<h5 class='blog-content__title'>{{ info.title }}</h5>
		</div>

		<div v-if='button' class='blog-button btb'>
			<Arrow />
		</div>
	</div>
</template>

<script setup>
import Arrow from '@/components/icons/Arrow.vue';

const props = defineProps({
	info: Object,
	button: Boolean,
});
</script>

<style scoped lang='scss'>
.blog {
	position: relative;
	min-width: 20.10417vw;
	&-image {
		width: 100%;
		height: 197px;
		border-radius: 16px 16px 0px 0px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	}
	&-content {
		display: grid;
		grid-gap: 12px;
		border-right: 1px solid var(--clr-grey5);
		border-bottom: 1px solid var(--clr-grey5);
		border-left: 1px solid var(--clr-grey5);
		border-radius: 0px 0px 16px 16px;
		padding: 20px .78125vw 19px;
		&__date,
		&__title {
			font-weight: 500;
		}
		&__date {
			color: var(--clr-grey4);
		}
	}
	&-button {
		position: absolute;
		top: 40.93618%;
		right: 5.4423%;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: var(--clr-white);
	}
}
</style>
