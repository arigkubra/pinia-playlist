<template>
  
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="Pinia" title="Pinia">
      <h1>Kişisel Günlüğüm</h1>
    </div>
  </header>

  <main>
    <div class="container">
      
      <div class="data-area">
        <p v-if="filter === 'all'">Toplam {{ gunlukStore.totalCount }} kayıt var</p>
        <p v-if="filter === 'favs' ">Toplam {{ gunlukStore.favCount }} kayıt var</p>
        <div>
          <button @click="filter = 'all' ">Tüm Günlüklerim</button>
          <button @click="filter = 'favs' ">Sadece Beğendiklerim</button>
        </div>
      </div>

      
      <div class="gunluk-listesi" v-for="gunluk in gunlukStore.diary" v-if="filter === 'all' ">
        <gunluk-details :gunluk="gunluk"></gunluk-details>
      </div>
      <p>Sadece Beğendiğim Günlüklerim</p>
      <div class="gunluk-listesi" v-for="gunluk in gunlukStore.favs" v-if="filter === 'favs' ">
        <gunluk-details :gunluk="gunluk"></gunluk-details>
      </div>

    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import GunlukDetails from './components/gunluk-details.vue';
import { useDiaryStore } from './stores/DiaryStore';
export default {
  components: {
    "gunluk-details" : GunlukDetails
  },
  setup(){
    const gunlukStore = useDiaryStore()

    const filter = ref('all') //all yazıyoruz çünkü ilk başta tüm liste gözüksün
    return { gunlukStore, filter}
  }
}

</script>

