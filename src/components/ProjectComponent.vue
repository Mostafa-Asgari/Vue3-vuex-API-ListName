<template>
    <div class="project">
        <div class="box" :class="{green: project.accept}">
            <div class="title">
                <h1 @click="showFunc">{{ project.title }}</h1>
                <div class="icons">
                    <img @click="doneFunc" src="@/assets/images/done.svg" class="done" alt="done">
                    <img @click="deleteFunc" src="@/assets/images/trash.svg" class="trash" alt="trash">
                    <router-link :to="{name: 'Edit', params:{id: project.id}}">
                        <img @click="editFunc" src="@/assets/images/edit.svg" class="edit" alt="edit">
                    </router-link>
                    
                </div>
            </div>
            <div class="details">
                <h3 v-if="show">{{ project.details }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

let show = ref(false)
let showFunc = (() => show.value = !show.value)
const props = defineProps(['project'])
// const route = useRoute()
// const url = computed(() => route.params.id)
const emit = defineEmits(['del', 'done'])
const deleteFunc = (() => {
    fetch(`http://localhost:3000/projects/${props.project.id}`,{method: 'DELETE'})
        .then(() => emit('del', props.project.id))
        .catch(err => console.log(err.message))
})

const doneFunc = (() => {
    fetch(`http://localhost:3000/projects/${props.project.id}`,{
        method: 'PATCH',
        headers: {'Conetnt-Type':'application/json'},
        body: JSON.stringify({accept: !props.project.accept})
    })
        .then(() => emit('done', props.project.id))
        .catch(err => console.log(err.message))
})

</script>

<style>
.box{
  background: #fff;
  border-radius: 0.3rem;
  border-left: 4px solid #ff0000;
  padding: 0.1rem 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
}
.green{border-left: 4px solid #00d647;}
.box .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box .title h1{cursor: pointer;}
.box .details{
  color: #ff7e14;
}
.box .icons img{
    cursor: pointer;
}
.box .icons img.done:hover{content: url('@/assets/images/done2.svg');}
.box .icons img.trash:hover{content: url('@/assets/images/trash2.svg');}
.box .icons img.edit:hover{content: url('@/assets/images/edit2.svg');}
</style>