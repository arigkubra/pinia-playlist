<template>
    <form @submit.prevent="sendForm">
        <div class="box">
            <div class="form-group">
                <textarea v-model="newDiary" placeholder="Bugün neler oldu, hadi anlat..."></textarea>
                <button>Günlüğü Kaydet</button>
            </div>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useDiaryStore } from '../stores/DiaryStore';

export default {
    props:[
        'id', 'diary' 
    ],
    setup(props){
        const diaryStore = useDiaryStore()
        const newDiary = ref(props.diary)
        

        const sendForm = () => {
            if (newDiary.value.length > 0){
                diaryStore.editDiary(props.id, newDiary.value)
            }            
        }

        return { sendForm, newDiary }
    }
}
</script>