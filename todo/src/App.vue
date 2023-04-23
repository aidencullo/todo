<template>
<div id="page" :style="{ backgroundColor: darkMode ?
		       'black': 'white' }">
  <NavBar @test="darkMode=!darkMode"/>
  <router-view/>
</div>
</template>

<script setup>
  import { ref } from 'vue';
  import NavBar from '@/components/NavBar.vue';

  const darkMode = ref(true);
</script>

<style>
  #page {
  min-height: 100vh;
  }
</style>
