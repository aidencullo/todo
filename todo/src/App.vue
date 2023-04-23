<template>
  
<div id="page" :style="{ backgroundColor: darkMode ?
		       'black': 'white' }">
  <NavBar @toggleDarkMode="darkMode=!darkMode"/>
  
  <div class="text-center">
    <router-view/>
  </div>
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
