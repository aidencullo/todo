<template>

<input v-model.trim="newItem" placeholder="add new item"
       class="border-2 border-black">
<button @click="addItem" class="m-2 bg-blue-500 hover:bg-blue-700
				text-white font-bold py-2 px-4 rounded">Add</button>

<div class="text-left bg-green-700 mr-auto ml-auto p-4 w-1/2" id="list">    
  <ol>
    <li v-for="(item, index) in items" :key="item.id">
      {{ index + 1 }} . {{ item }}
    </li>
  </ol>
</div>

</template>

<script setup>
  import { ref } from "vue"
  
  const items = ref([]);
  const newItem = ref("");
  
  function addItem() {
  if (newItem.value.length === 0) {
  return
  }
  items.value.push(newItem.value);
  newItem.value="";
  }
</script>
