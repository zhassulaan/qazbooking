<template>
	<div class='location btn'>
		<div class='location-button' @click='toggleDropdown'>
			<Location class='location-button__icon'/>
			<h6 class='location-button__text'>{{ activeCity }}</h6>
		</div>

		<div v-if='dropdown' class='location-dropdown'>
			<p
				v-for='(city, index) in cities'
				:key='index'
				class='location-dropdown__text'
				@click='changeCity(city)'
			>{{ city }}</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Location from '@/components/icons/Location.vue';
import { cities } from '@/assets/data';

const dropdown = ref(false);
const activeCity = ref(cities[0]);

function toggleDropdown() {
	dropdown.value = !dropdown.value
}
function changeCity(city) {
	activeCity.value = city;
	toggleDropdown();
}
</script>

<style scoped lang='scss'>
.location {
	position: relative;
	&-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: .41667vw;
		height: 24px;
		&__icon {
			width: 24px;
			height: 24px;
		}
		&__text {
			white-space: nowrap;
		}
	}
	&-dropdown {
		position: absolute;
		z-index: 3;
		display: grid;
		grid-gap: 16px;
		padding: 16px .83333vw;
		border-radius: 8px;
		background-color: var(--clr-white);
		box-shadow: 0px 1px 10.6px 0px rgba(0, 0, 0, .25);
		&__text {
			width: 9.69792vw;
			font-size: 16px;
			&:hover {
				color: var(--clr-blue);
			}
		}
	}
}
</style>
