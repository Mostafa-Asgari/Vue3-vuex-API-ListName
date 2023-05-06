<template>
  <div class="todo-list">
    <h2 :class="{complete: todo.complete}">{{ todo.title }}</h2>
    <div class="btns">
        <button @click="delFunc" class="btns btn1">Delete</button>
        <button @click="completeFunc" class="btns btn2">{{ todo.complete ? 'Undo' : 'Done' }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps  } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps(['todo'])
const delFunc = () => store.commit('DEL_TODO', props.todo)
const completeFunc = () => store.dispatch('toggle_todo', props.todo)
</script>

<style>
  .todo-list{
    display: flex;
    justify-content: space-between;
    align-items: center !important;
  }
  .todo-list h1{margin-bottom: 0;}
  .complete{
    text-decoration: line-through;
  }
  .btns{
      border: none;
      height: 2.5rem;
      border-radius: 0;
      cursor: pointer;
      box-shadow: inset 0 0 40px transparent;
      margin-left: 0.5rem;
      cursor: pointer;
      border-radius: 0.3rem;
      color: #fff;
      box-shadow: inset 0 0 30px transparent;
    }
    .btns:active{
      box-shadow: inset 0 0 0 #fff;
    }
  .btn1{background: crimson;}
  .btn2{background: navy;}
</style>