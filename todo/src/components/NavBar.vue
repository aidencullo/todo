<template>
  
  <div :style="{
        backgroundColor: toggle ? 'black' : 'white',
      }">
    
    <nav class="flex justify-center text-white space-x-4 my-5 ">
      
      <router-link :to="{ name:'home'}">
	
	<button class="text-white bg-green-700 hover:bg-green-500
		       font-medium rounded-full px-5 py-2.5">
	  
	  Home
	  
	</button>
	
      </router-link>
      
      <router-link :to="{ name:'about'}">
	
	<button class="text-white bg-green-700 hover:bg-green-500
		       font-medium rounded-full px-5 py-2.5">
	  
	  About
	  
	</button>
	
      </router-link>
      
      <div class="rounded-full px-5 py-2.5
		  right-0 absolute">
	
	<label class="relative inline-flex items-center cursor-pointer">
	  <input type="checkbox" class="sr-only peer" v-model="toggle">

	  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

	  <span class="ml-3 text-sm font-medium text-gray-900
		       dark:text-gray-300">
	    {{ toggle ? "dark" : "light" }}
	  </span>

	</label>
	
      </div>
      
    </nav>
    
  </div>
  
</template>

<script>
  export default {
  data() {
  return {
  toggle: true,
  color: '#673AB7'
  }
  }
  }
</script>

<style>
  
</style>
