<template>
	<div class='blog btn'>
		<div class='blog-image'>
			<img :src='info.image' :alt='info.name' />
		</div>
		
		<div class='blog-content'>
			<p class='blog-content__date'>{{ info.date }}</p>
			<h5 class='blog-content__title'>{{ info.title }}</h5>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	info: Object,
});
</script>

<style scoped lang='scss'>
.blog {
	width: 386px;
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
}
</style>
