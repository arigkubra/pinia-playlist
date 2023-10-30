<template>
    <form @submit.prevent="sendForm">
        <div class="box">
            <div class="form-group">
                <textarea v-model="newDiary" placeholder="Bugün neler oldu, hadi anlat..."></textarea>
                <button @click="sendForm">Düzenlemeyi Kaydet</button>
                <button @click="toggleEditMode()">Düzenlemeyi İptal Et</button>
            </div>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useDiaryStore } from '../stores/DiaryStore';

export default {
    props:[
        'id', 'diary', 'editModeEnabled' , 'toggleEditMode',
    ],
    
    setup(props){
        const diaryStore = useDiaryStore()
        const newDiary = ref(props.diary)

        const sendForm = () => {
            if (newDiary.value.length > 0){
                diaryStore.editDiary(props.id, newDiary.value)
                props.toggleEditMode()
                
            }            
        }

        

        return { sendForm, newDiary }
    }
}
</script>