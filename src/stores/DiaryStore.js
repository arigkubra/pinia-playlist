import { defineStore } from "pinia";

//uygulamanın diğer kısımları tarafından kullanılabilsin diye bir değişken oluşturuyoruz ve export ederek dışarıdan erişime açıyoruz

export const useDiaryStore = defineStore("diaryStore", {
    state : () => ({ // artık burada state'lerimizi tek tek tanımlayabiliriz
        diary: [
            {id: 1, diary: "bugün hava bulutlu...", date: "16.10.2023", isFav: false},
            {id: 2, diary: "bugün pinia uygulamasına başladık", date: "15.10.2023", isFav: true},
        ]
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
        totalCount: (state) => {
            return state.diary.length
        }
    }
})