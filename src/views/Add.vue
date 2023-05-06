<template>
  <div class="add">
    <form @submit.prevent="submitFunc">
        <h1>Add Projects</h1>
        <label for="title">title:</label>
        <input type="text" v-model="title" id="title" placeholder="Your Title..." required>
        <label for="details">details:</label>
        <textarea v-model="details" rows="10" id="details" placeholder="Your Details..." required></textarea>
        <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

let router = useRouter()
let props = defineProps(['project'])
let emit = defineEmits(['mm110'])
let title = ref('')
let details = ref('')
const submitFunc = (() => {
   let newProject = {
    title: title.value,
    details: details.value,
    accept: false
   }
   fetch(`http://localhost:3000/projects/`,{
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(newProject)
   })
      .then(() => router.push('/'))

   title.value = ''
   details.value = ''  
})

</script>

<style>
.add form{
    background: #fff;
    padding: 1rem;
    width: 100%;
}
.add form h1{
    color: #00d647;
    text-align: center;
    margin-bottom: 1rem;
}
.add form label{
    display: block;
    color: #bbb;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}
.add form input{
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 0.7rem;
    font-size: 1rem;
    color: #555;
    width: 100%;
    margin: 0 auto 2rem;
    outline: 0;
    width: 95%;

}
.add form textarea{
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    padding: 0.7rem;
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
    width: 100%;
    outline: 0;
    width: 95%;
    margin: 0 auto 0.5rem;
}
.add form input:focus{
    border-bottom: 1px solid #00d647;
}
.add form textarea:focus{
    border: 1px solid #00d647;
}
.add form button{
    color: #fff;
    background-color: #00d647;
    border-radius: 0.3rem;
    padding: 0.8rem;
    width: 8rem;
    box-shadow: inset 0 0 0 30px transparent;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
}
.add form button:hover{
    background: #0c662a;
    box-shadow: inset 0 0 0 #39ff7b;
}
</style>