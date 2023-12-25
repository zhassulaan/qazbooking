<template>
	<div class='review'>
		<h6 class='review-title'>{{ info.name }}</h6>

		<div class='review-rating'>
			<p>{{ info.rating }}</p>
			<Smile1 v-if='info.rating > 8' class='icon' />
			<Smile2 v-if='info.rating > 6 & info.rating <= 8' class='icon' />
			<Smile3 v-if='info.rating > 4 & info.rating <= 6' class='icon' />
			<Smile4 v-if='info.rating > 2 & info.rating <= 4' class='icon' />
			<Smile5 v-if='info.rating <= 2' class='icon' />
		</div>

		<p class='review-text'>{{ info.text }}</p>

		<div class='review-footer'>
			<div class='review-footer__author'>
				<Author />
				<p class='text'>{{ info.author }}</p>
			</div>
			
			<div class='review-footer__time'>
				<p class='text'>{{ info.time }}</p>
				<p class='text'>●</p>
				<p class='text'>{{ info.date }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import Smile1 from '@/components/icons/Smile1.vue';
import Smile2 from '@/components/icons/Smile2.vue';
import Smile3 from '@/components/icons/Smile3.vue';
import Smile4 from '@/components/icons/Smile4.vue';
import Smile5 from '@/components/icons/Smile5.vue';
import Author from '@/components/icons/Author.vue';

const props = defineProps({
	info: Object,
});
</script>

<style scoped lang='scss'>
.review {
	display: grid;
	grid-gap: 23px;
	padding: 15px .78125vw;
	border: 1px solid var(--clr-grey4);
	border-radius: 8px;
	&-title {
		font-weight: 500;
	}
	&-rating,
	&-footer,
	&-footer__author,
	&-footer__time {
		display: flex;
		align-items: center;
	}
	&-rating {
		display: flex;
		width: max-content;
		gap: .3125vw;
		padding: 4px .20833vw;
		border-radius: 8px;
		background-color: var(--clr-background4);
		.icon {
			width: 16px;
			height: 16px;
		}
	}
	&-text {
		font-size: 18px;
	}
	&-footer {
		justify-content: space-between;
		&__author,
		&__time {
			gap: .41667vw;
		}
		&__author .text {
			color: var(--clr-grey4);
		}
		&__time .text {
			font-weight: 300;
			color: var(--clr-grey5);
		}
	}
}
</style>
