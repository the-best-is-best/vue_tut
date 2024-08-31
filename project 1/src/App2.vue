<script>
export default { 
  data() { 
    return { 
      name: 'John Doe',
      status: "inactive",
      tasks: ["task 1", "task 2", "task 3"],
      link: "https://google.com"

      
    }
  },
  methods: {
    toggleStatus() {
      this.status = this.status === "active" ? "inactive" : "active";
    }
  }
}
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User is active</p>
  <p v-else-if="status === 'pending'"> User is pending</p>
  <p v-else > User is inactive</p>

<hr>
<h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks">{{ task }}</li>
  </ul>


  <a :href="link">Google</a>
  <hr>

  <button v-on:click="toggleStatus">Change status</button>
</template>

<style scoped></style>
