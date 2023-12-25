<template>
	<div class='card btn'>
		<div class='card-image'>
			<img :src='info.image' :alt='info.name' />
		</div>

		<div class='card-content'>
			<h6 class='card-content__title'>{{ info.name }}</h6>
			<div class='card-content__location'>
				<Location />
				<p class='text'>{{ info.location }}</p>
			</div>
			<div class='card-content__price'>
				<p class='text'>от</p>
				<h6 class='title'>{{ info.price }}</h6>
				<Currency />
			</div>
			<div class='card-content__rating'>
				<p class='text'>{{ info.rating }}</p>
				<Smile1 v-if='info.rating > 8' />
				<Smile2 v-if='info.rating > 6 & info.rating <= 8' />
				<Smile3 v-if='info.rating > 4 & info.rating <= 6' />
				<Smile4 v-if='info.rating > 2 & info.rating <= 4' />
				<Smile5 v-if='info.rating <= 2' />
			</div>
		</div>
	</div>
</template>

<script setup>
import Location from '@/components/icons/LocationGrey.vue';
import Currency from '@/components/icons/Currency.vue';
import Smile1 from '@/components/icons/Smile1.vue';
import Smile2 from '@/components/icons/Smile2.vue';
import Smile3 from '@/components/icons/Smile3.vue';
import Smile4 from '@/components/icons/Smile4.vue';
import Smile5 from '@/components/icons/Smile5.vue';

const props = defineProps({
	info: Object,
});
</script>

<style scoped lang='scss'>
.card {
	width: 282px;
	height: 286px;
	border: 1px solid var(--clr-grey5);
	border-radius: 16px;
	&-image {
		width: 100%;
		height: 158px;
		border-radius: 16px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
		}
	}
	&-content {
		position: relative;
		height: 110px;
		margin-top: 16px;
		margin-left: .36458vw;
		&__title {
			white-space: nowrap;
  		overflow: hidden;
  		text-overflow: ellipsis;
			margin-bottom: 8px;
		}
		&__location,
		&__price,
		&__rating {
			display: flex;
			align-items: center;
		}
		&__location {
			gap: .36458vw;
			.text {
				color: var(--clr-grey4);
			}
		}
		&__price,
		&__rating {
			position: absolute;
		}
		&__price {
			bottom: 8.1819%;
			left: 0;
			gap: .26042vw;
			.title {
				font-weight: 700;
			}
		}
		&__rating {
			bottom: 5.4547%;
			right: 2.56441%;
			gap: .3125vw;
			padding: 4px .20833vw;
			.text {
				color: var(--clr-grey2);
			}
		}
	}
}
</style>

