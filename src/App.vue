<template>
  <Header @open='toggleModal' />
  <router-view />
  <Auth v-if='modal' @close='toggleModal' />
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
import Auth from '@/components/modal/Auth.vue';

const modal = ref(false);

function toggleModal() {
  modal.value = !modal.value;
}
</script>
