<template>
  <div class="box">
      <div>
          <div>{{ sirasi }}</div>
          <p v-if="!editModeToggle">{{ gunluk.diary }}</p>
          <edit-gunluk v-else :id="gunluk.id" :editModeEnabled="editModeToggle" :toggleEditMode="toggleEditMode" :diary="gunluk.diary"> </edit-gunluk>
          
          <small class="date">{{ gunluk.date }}</small>
      </div>
      <div>
          <i class="material-icons" :class="{active : gunluk.isFav}" @click="diaryStore.toggleFav(gunluk.id)">favorite</i>
          <i class="material-icons" @click="editModeToggle = !editModeToggle ">edit</i>
          <i class="material-icons" @click="diaryStore.deleteDiary(gunluk.id)">delete</i>
      </div>
  </div>
</template>

<script>
import { useDiaryStore } from '../stores/DiaryStore';
import { ref } from 'vue';
import editGunluk from './edit-gunluk.vue';

export default {
  components: {
    "edit-gunluk": editGunluk,

  },
  props: ['gunluk', 'sirasi'],
  setup(){
      const diaryStore = useDiaryStore()
      const editMode = ref(false) 
      const editModeToggle = ref(false);

      const toggleEditMode = () => {
            
        editModeToggle.value = !editModeToggle.value
            
        }

      return { diaryStore, editMode, editModeToggle, toggleEditMode }
  }
}
</script>