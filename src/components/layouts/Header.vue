<template>
	<div class='header'>
		<div class='header-menu'>
			<div class='header-menu__left'>
				<router-link to='/'>
					<Logo class='logo' />
				</router-link>
				<Location />
			</div>

			<div class='header-menu__right'>
				<router-link to='/interesting'>
					<h6>Интересное</h6>
				</router-link>
				<div class='header-menu__right-socials'>
					<Facebook class='icon' />
					<Instagram class='icon' />
				</div>
				<Button
					text='Войти'
					:icon='true'
					@click="$emit('open')"
				/>
			</div>
		</div>

		<ul class='header-category'>
			<li><router-link to='/hostels'>
				<h6 class='header-category__text'>Хостелы</h6>
			</router-link></li>
			<li><router-link to='/recreation_centers'>
				<h6 class='header-category__text'>Базы отдыха</h6>
			</router-link></li>
			<li><router-link to='/leisure'>
				<h6 class='header-category__text'>Активный отдых</h6>
			</router-link></li>
			<li><router-link to='/tours'>
				<h6 class='header-category__text'>Туры</h6>
			</router-link></li>
			<li><router-link to='/wellness_holiday'>
				<h6 class='header-category__text'>Оздоровительный отдых</h6>
			</router-link></li>
			<li><router-link to='/childrens_camp'>
				<h6 class='header-category__text'>Детские лагеря</h6>
			</router-link></li>
			<li><router-link to='/transport'>
				<h6 class='header-category__text'>Транспорт</h6>
			</router-link></li>
		</ul>
	</div>
</template>

<script setup>
import Logo from '@/components/icons/Logo.vue';
import Location from '@/components/Location.vue';
import Facebook from '@/components/icons/Facebook.vue';
import Instagram from '@/components/icons/Instagram.vue';
import Button from '@/components/Button.vue';
</script>
