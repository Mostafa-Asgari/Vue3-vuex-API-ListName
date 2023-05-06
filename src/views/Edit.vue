<template>
  <div class="edit">
    <form @submit.prevent="subFunc">
        <h1>Edit Projects</h1>
        <label for="title">title:</label>
        <input type="text" v-model="title" id="title" placeholder="Your Title..." required>
        <label for="details">details:</label>
        <textarea v-model="details" rows="10" id="details" placeholder="Your Details..." required></textarea>
        <button>Edit</button>
    </form>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
let router = useRouter()

let title = ref('')
let details = ref('')
let props = defineProps(['id'])

onMounted(() => {
    fetch(`http://localhost:3000/projects/${props.id}`)
      .then(res => res.json())
      .then(data => {
        title.value = data.title
        details.value = data.details
      })
})

let subFunc = (() => {
    fetch(`http://localhost:3000/projects/${props.id}`, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            title: title.value,
            details: details.value
        })
    }).then(() => router.push('/'))
      .catch(err => console.log(err.message))
})

</script>

<style>
.edit form{
    background: #fff;
    padding: 1rem;
    width: 100%;
}
.edit form h1{
    color: #ff7e14;
    text-align: center;
    margin-bottom: 1rem;
}
.edit form label{
    display: block;
    color: #bbb;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}
.edit form input{
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
.edit form textarea{
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
.edit form input:focus{
    border-bottom: 1px solid #ff7e14;
}
.edit form textarea:focus{
    border: 1px solid #ff7e14;
}
.edit form button{
    color: #fff;
    background-color: #ff7e14;
    border-radius: 0.3rem;
    padding: 0.8rem;
    width: 8rem;
    box-shadow: inset 0 0 0 30px transparent;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
}
.edit form button:hover{
    background: #b43402;
    box-shadow: inset 0 0 0 #ffac69;
}
</style>