<template>
    <div class="text-center">
      <router-link :to="{ name:'home'}">Home</router-link> |
      <router-link :to="{ name:'about'}">About</router-link>
    <router-view/>
    </div>
</template>
