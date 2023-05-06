<template>
  <div class="navbar">
    <router-link to="/">All Projects</router-link>
    <router-link to="/add">Add Projects</router-link>
    <router-link to="/todo">Todo List</router-link>
  </div>
</template>

<script setup>

</script>

<style>
.navbar{
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 1.3rem;
}
.navbar a{
    text-decoration: none;
    color: #555;
    margin: 1rem 0.8rem 0 0;
    display: inline-block;
    padding-bottom: 0.5rem;
}
.navbar .router-link-active{
    border-bottom: 2px solid #00d647;
    color: #00d647;
}
</style>