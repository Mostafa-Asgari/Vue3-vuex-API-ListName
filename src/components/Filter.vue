<template>
  <div class="filter">
    <button @click="update('all')" :class="{active: current==='all'}">View All</button>
    <button @click="update('completed')" :class="{active: current==='completed'}">Completed</button>
    <button @click="update('uncompleted')" :class="{active: current==='uncompleted'}">Uncompleted</button>
  </div>
</template>

<script setup>
let props = defineProps(['current'])
let emit  = defineEmits(['filterFunc'])

const update = (by => {
    emit('filterFunc', by)
})


</script>

<style>
.filter{
    margin-bottom: 1rem;
}
.filter button{
    border: none;
    outline: none;
    color: #bbb;
    font-weight: bold;
    margin-right: 1rem;
    letter-spacing: 1px;
    cursor: pointer;
}
.filter button.active{
    color: #555;
}
</style>