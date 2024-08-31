<script setup>
import { onMounted, ref } from 'vue';

const name = ref('John Doe')
const status = ref('active')
const tasks = ref(['task 1', 'task 2', 'task 3'])
const link = ref('https://google.com')

const newTask = ref('')

const toggleStatus = () => {
  status.value = status.value === 'active' ? 'inactive' : 'active'
}

const addTask = () => {
  if(newTask.value.trim() === '') return
  tasks.value.push(newTask.value)
  newTask.value = ''
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}


onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log('Error fetching tasks');
  }
})

</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else > User is inactive</p>

<hr>
<form @submit.prevent="addTask">
  <label for="newTask"> Add task</label>
   <input type="text" name="newTask" id="newTask" v-model="newTask">


  <button type="submit">Add</button>
</form> 

<hr>

<h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks">
     <span>{{ task }}</span>
     <button @click="deleteTask(index)">X</button>
    </li>
  </ul>


  <a :href="link">Google</a>
  <hr>

  <button v-on:click="toggleStatus">Change status</button>
</template>
<style scoped></style>
