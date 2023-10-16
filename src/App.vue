<template>
  
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="Pinia" title="Pinia">
      <h1>Kişisel Günlüğüm</h1>
    </div>
  </header>

  <main>
    <div class="container">
      
      <yeni-gunluk></yeni-gunluk>

      <div class="data-area">
        <p v-if="filter === 'all'">Toplam {{ totalCount }} kayıt var</p>
        <p v-if="filter === 'favs' ">Toplam {{ favCount }} kayıt var</p>
        <div>
          <button @click="filter = 'all' ">Tüm Günlüklerim</button>
          <button @click="filter = 'favs' ">Sadece Beğendiklerim</button>
        </div>
      </div>

      
      <div class="gunluk-listesi" v-for="gunluk in diary" v-if="filter === 'all' ">
        <gunluk-details :gunluk="gunluk"></gunluk-details>
      </div>
      <p>Sadece Beğendiğim Günlüklerim</p>
      <div class="gunluk-listesi" v-for="gunluk in favs" v-if="filter === 'favs' ">
        <gunluk-details :gunluk="gunluk"></gunluk-details>
      </div>

      <p><button @click="gunlukStore.$reset">Reset</button></p>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import GunlukDetails from './components/gunluk-details.vue';
import { useDiaryStore } from './stores/DiaryStore';
import NewDiary from './components/yeni-gunluk.vue';
import { storeToRefs } from 'pinia';
export default {
  components: {
    "gunluk-details" : GunlukDetails,
    "yeni-gunluk" : NewDiary
  },
  setup(){
    const gunlukStore = useDiaryStore()

     const { diary, loading, favs, totalCount, favCount } = storeToRefs(gunlukStore)

    const filter = ref('all') //all yazıyoruz çünkü ilk başta tüm liste gözüksün
    gunlukStore.getDiary()

    return { gunlukStore, filter, diary, loading, favs, totalCount, favCount}
  }
}

</script>

