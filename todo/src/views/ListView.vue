<template>

<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white
	   md:text-5xl lg:text-6xl">
  <span class="text-transparent
	       bg-clip-text
	       bg-gradient-to-r
	       to-emerald-600
	       from-sky-400">
    Todo
  </span>
</h1>


<input v-model.trim="newItem" placeholder="add new item"
	       class="border-2 border-black">
    <button @click="addItem" class="m-2 bg-blue-500 hover:bg-blue-700
    text-white font-bold py-2 px-4 rounded">Add</button>
    <ol>
      <li v-for="(item, index) in items" :key="item.id">
	{{ index + 1 }} . {{ item }}
      </li>
    </ol>

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
