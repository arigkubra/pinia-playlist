import { defineStore } from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state: () => ({
        diary: [],
        loading: false
    }),
    getters: {
        favs(){
            return this.diary.filter(gunluk => gunluk.isFav)
        },
        favCount(){
            return this.diary.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous
            }, 0)
        },
        totalCount: (state) =>{
            return state.diary.length
        }
    },
    actions: {
        async getDiary(){
            this.loading = true
            const res = await fetch("http://localhost:3000/diary")
            const data = await res.json()
            this.diary = data
            this.loading = false
        },
        async newDiary(diary){
            this.diary.push(diary)

            const res = await fetch("http://localhost:3000/diary", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(diary)
            }).catch((err)=>{console.log(err)})
        },
        async toggleFav(id){
            const diary = this.diary.find(gunluk => gunluk.id === id)
            diary.isFav = !diary.isFav

            const res = await fetch("http://localhost:3000/diary/" + id, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({isFav: diary.isFav})
            }).catch((err)=>{console.log(err)})
        },
        async deleteDiary(id){
            this.diary = this.diary.filter(gunluk => {
                return gunluk.id !== id
            })

            const res = await fetch("http://localhost:3000/diary/" + id, {
                method: 'DELETE'
            }).catch((err)=>{console.log(err)})
        }
    }
})