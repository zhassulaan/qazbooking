<template>
	<div class='search'>
		<div class='search-input'>
			<Search class='icon' />

			<input
				type='text'
				placeholder='Ключевое слово'
				class='text'
			/>

		</div>
		<Button text='Поиск' />
	</div>
</template>

<script setup>
import Search from '@/components/icons/Search.vue';
import Button from '@/components/Button.vue';
</script>

<style scoped lang='scss'>
.search {
	display: flex;
	align-items: center;
	gap: .41667vw;
	width: fit-content;
	height: 72px;
	padding: 8px .4166667vw;
	border-radius: 8px;
	background-color: var(--clr-white);
	&-input {
		display: flex;
		gap: .52084vw;
		padding: 16px 1.041667vw;
		.icon {
			width: 24px;
			height: 24px;
		}
		.text {
			width: 39.01042vw;
		}
	}
	.button {
		width: 11.51042vw;
		height: 56px;
		&-text {
			font-size: 20px;
		}
	}
	&-text {
		white-space: nowrap;
		color: var(--clr-white);
	}
}
</style>
