<template>
  <div class='interesting'>
    <Breadcrumbs :info='breadcrumbs' />
    <h2>Интересное</h2>
    <div class='interesting-content'>
      <Blog
        v-for='blog in blogs'
        :key='blog.id'
        :info='blog'
        :button='true'
      />
    </div>
  </div>
</template>

<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Blog from '@/components/Blog.vue';
import { blogs } from '@/assets/data';

const breadcrumbs = [{
  id: 'interesting',
  text: 'Интересное'
}];
</script>
