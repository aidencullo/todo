<template #text>
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
  </p>
  <input v-model.trim="newItem" placeholder="add new item">
  <button @click="addItem" class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
  <ol>
    <li v-for="item in items" :key="item.id">
      {{ item }}
    </li>
  </ol>
</template>

<script setup>
import { ref } from "vue"

const items = ref([]);
const newItem = ref("");
const errors = ref([]);

function addItem() {
    if (newItem.value.length === 0) {
	return;
    }
    items.value.push(newItem.value);
    newItem.value="";
}

</script>
