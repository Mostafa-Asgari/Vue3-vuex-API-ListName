<template>
  <div class="home">
    <Filter @filterFunc="updateFunc" :current="current" />
    <div v-for="project in filteredProjects" :key="project.id">
        <projectComponent :project="project" @del="delFunc" @done="doneFunc" />
    </div>
  </div> 
</template>

<script setup>
import ProjectComponent from '@/components/ProjectComponent.vue';
import Filter from '@/components/Filter';
import { onMounted, ref, computed } from 'vue';

let projects = ref([])
let current = ref('all')
onMounted(() => {
  fetch(`http://localhost:3000/projects`)
    .then(res => res.json())
    .then(data => projects.value = data)
    .catch(err => console.log(err.message))
})
let delFunc = (id => {
  projects.value = projects.value.filter(item => item.id != id)
})
let doneFunc = (id => {
  let mm = projects.value.find(item => item.id === id)
  mm.accept = !mm.accept
})
let updateFunc = (by => {
  current.value = by
})
let filteredProjects = computed(() => {
  if(current.value === 'completed'){
    return projects.value.filter(item => item.accept)
  } else if(current.value === 'uncompleted'){
    return projects.value.filter(item => !item.accept)
  } else {
    return projects.value
  }
})
</script>

<style>

</style>