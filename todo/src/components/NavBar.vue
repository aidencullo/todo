<template>
  
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
    
  </nav>
  
</template>
