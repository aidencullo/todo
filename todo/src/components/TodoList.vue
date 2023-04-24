<template>

<input v-model.trim="newItem" placeholder="add new item"
       class="border-2 border-black">
<button @click="addItem" class="m-2 bg-blue-500 hover:bg-blue-700
				text-white font-bold py-2 px-4 rounded">Add</button>
<button @click="clearItems" class="m-2 bg-blue-500 hover:bg-blue-700
				   text-white font-bold py-2 px-4 rounded">Clear</button>

<div class="text-left bg-green-700 mr-auto ml-auto p-4 w-1/2 break-all" v-show="items.length">    
  <ul>
    <li v-for="{ id, item, expand } in items" :key="id">
      <div @click="toggleExpand(id)" :class="[{truncate:expand}, 'cursor-pointer']">
	{{ id }} . {{ item }}
      </div>
    </li>
  </ul>
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
  items.value.push({
  id : items.value.length + 1,
  item : newItem.value,
  expand : true
  });
  newItem.value="";
  }

  function clearItems() {
  items.value = [];
  }

  function toggleExpand(id) {
  items.value[Number(id) - 1].expand = !items.value[Number(id) - 1].expand;
  }
</script>
