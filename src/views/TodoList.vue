<template>
    <div class="todoList">
        <h1 id="title" class="">بسم الله الرحمن الرحیم</h1>
        <hr>
        <!-- ----------------------------------- -->

        <div class="todo">
            <h1>Todo List</h1>
            <div class="demo">
                <input type="text" @keyup.enter="addTodo" v-model="newTodo" placeholder="enter words..." class="todo-input">
                <button @click="addTodo" class="todo-btn">Add</button>
            </div>

            <TodosButns v-for="(todo, index) in todos" :key="index" :todo="todo"/>
        </div>
    </div>
</template>

<script setup>
import TodosButns from '@/components/TodosButns.vue'
import {ref, computed} from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const todos = computed(() => store.state.todos)
const newTodo = ref('')
const addTodo = () => {
    if(newTodo.value){
        store.commit('ADD_TODO', newTodo.value)
        newTodo.value = ''
    }
}

</script>

<style scoped>
    /* @import '@/assets/style.css'; */
    /* h1#title{text-align: center;color: rgb(4, 163, 44);} */

    .todoList{
        box-shadow: 0 2px 4px rgba(0,0,0,0.7);
        padding: 2rem;
        background: rgb(204, 204, 204);
    }
    #title{
        text-align: center;
        color: rgb(4, 163, 44);;
    }
    .todo h1{text-align: center;}
    .todo .demo{
        text-align: center;
        display: flex;
        align-content: center;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .todo-input{
        width: 50%;
        height: 3rem;
        padding: 0 0.5rem;
        font-size: 1.4rem;
        border: none;
        outline: none;
    }
    .todo-input:focus{
        border: 1px solid rgb(24, 59, 255);
    }
    .todo-btn{
        width: 15%;
        height: 3.1rem;
        border-radius: 0;
        border: none;
        background: rgb(24, 59, 255);
        color: #fff;
        cursor: pointer;
        font-size: 1.4rem;
        box-shadow: inset 0 0 40px transparent;
    }
    .todo-btn:hover{
        background: rgb(14, 14, 112);
        
    }
    .todo-btn:active{
        box-shadow: inset 0 0 0 #0ff7ff;
    }

</style>