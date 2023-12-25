<template>
  <div class='interesting'>
    <Breadcrumbs :text="['Интересное']" />
    <h2>Интересное</h2>
    <div class='interesting-content'>
      <Blog
        v-for='(blog, index) in blogs'
        :key='index'
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
</script>
