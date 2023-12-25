<template>
	<div class='interesting'>
		<Breadcrumbs :info='breadcrumbs' />

		<div class='interesting-header'>
			<h2>{{ blog.title }}</h2>
			<div class='interesting-header__action'>
				<CVS
					v-for='(item, index) in cvs'
					:key='index'
					:info='item'
				/>
			</div>
		</div>

		<img
			:src='blog.image'
			:alt='blog.title'
			class='interesting-image'
		/>
		<p class='interesting-text' v-html='blog.text'></p>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import CVS from '@/components/CVS.vue';
import Blog from '@/components/Blog.vue';
import Calendar from '@/components/icons/Calendar.vue';
import View from '@/components/icons/View.vue';
import Share from '@/components/icons/Share.vue';
import { blogs } from '@/assets/data';

const route = useRoute();
const blog = blogs.find(item => (item.id === Number(route.params.id)));
const breadcrumbs = [
	{
		id: 'interesting',
		text: 'Интересное'
	}, {
		id: `interesting/${blog.id}`,
		text: blog.title
	}
];
const cvs = [
	{
		text: '12.12.23',
		icon: Calendar
	}, {
		text: '123',
		icon: View
	}, {
		text: 'Поделиться',
		icon: Share
	}
];
</script>
