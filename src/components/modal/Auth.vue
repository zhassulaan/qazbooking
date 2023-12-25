<template>
	<div class='auth'>
		<div class='auth-background btn' @click="$emit('close')"></div>
		
		<div class='auth-content'>
			<Close class='auth-content__close btn' @click="$emit('close')" />

			<h4 v-if='type' class='auth-content__title'>Регистрация</h4>
			<h4 v-if='!type' class='auth-content__title'>Войти</h4>
			<div class='auth-content__form'>
				<Form text='Email' />
				<Form text='Пароль' />
			</div>
			<div class='auth-content__btns'>
				<Button :text="type ? 'Регистрация' : 'Войти'" />
				<Button
					:text="type ? 'Войти' : 'Регистрация'"
					:color='true'
					@click='toggleType' />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Close from '@/components/icons/Close.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';

const type = ref(true);

function toggleType() {
	type.value = !type.value;
}
</script>

<style scoped lang='scss'>
.auth {
	&-background,
	&-content {
		position: fixed;
	}
	&-background {
		z-index: 4;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .3);
	}
	&-content {
		z-index: 5;
		top: 50%;
		left: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transform: translate(-50%, -50%);
		width: 20.2084vw;
		height: 405px;
		padding: 24px 1.25vw;
		border-radius: 16px;
		background-color: var(--clr-white);
		&__close {
			position: absolute;
			top: 2.962968%;
			right: 3.0928%;
			width: 24px;
			height: 24px;
			padding: 5px;
		}
		&__title {
			font-weight: 500;
			text-align: center;
		}
		&__form,
		&__btns {
			display: grid;
			grid-gap: 16px;
		}
		&__btns .button {
			width: 100%;
			&-text {
				font-size: 14px;
			}
		}
	}
}
</style>
