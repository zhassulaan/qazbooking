<template>
	<div class='footer'>
		<router-link to='/'>
			<Logo class='logo' />
		</router-link>

		<div class='footer-menu'>
			<ul class='footer-menu__category'>
				<li><router-link to='/hostels'>
					<h6 class='footer-menu__category-text'>Хостелы</h6>
				</router-link></li>
				<li><router-link to='/recreation_centers'>
					<h6 class='footer-menu__category-text'>Базы отдыха</h6>
				</router-link></li>
				<li><router-link to='/leisure'>
					<h6 class='footer-menu__category-text'>Активный отдых</h6>
				</router-link></li>
				<li><router-link to='/tours'>
					<h6 class='footer-menu__category-text'>Туры</h6>
				</router-link></li>
				<li><router-link to='/wellness_holiday'>
					<h6 class='footer-menu__category-text'>Оздоровительный отдых</h6>
				</router-link></li>
				<li><router-link to='/childrens_camp'>
					<h6 class='footer-menu__category-text'>Детские лагеря</h6>
				</router-link></li>
				<li><router-link to='/transport'>
					<h6 class='footer-menu__category-text'>Транспорт</h6>
				</router-link></li>
			</ul>

			<ul class='footer-menu__category'>
				<li><router-link to='/faq'>
					<h6 class='footer-menu__category-text'>FAQ</h6>
				</router-link></li>
				<li><router-link to='/interesting'>
					<h6 class='footer-menu__category-text'>Интересное</h6>
				</router-link></li>
			</ul>

			<div>
				<div class='socials'>
					<h4 class='socials-text'>Мы в социальных сетях</h4>
					<div class='socials-icons'>
						<Facebook class='icon' />
						<Instagram class='icon' />
					</div>
				</div>
				<div class='website'>
					<p class='website-text'>Разработка сайта — Zerone Technology</p>
					<img
						src='@/assets/images/logo.png'
						alt='logo'
						class='website-logo'
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Logo from '@/components/icons/Logo2.vue';
import Facebook from '@/components/icons/FacebookWhite.vue';
import Instagram from '@/components/icons/InstagramWhite.vue';
</script>
