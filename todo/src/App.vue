<template>
  <NavBar/>
    <router-view/>
</template>

<style>
body {
  background-color: black;
}
</style>

<script setup>
  import NavBar from '@/components/NavBar.vue';
  </script>
