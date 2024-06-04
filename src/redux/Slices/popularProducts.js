import {createSlice} from "@reduxjs/toolkit"
const data = [
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        roznisa: "950 ₽",
        optom: "750 ₽",
        stock: "2536шт",
        image: "popular.png",
        tags: ["Новинки", "Скидка", "Популярное"],
        id: 1
    },
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        roznisa: "950 ₽",
        optom: "750 ₽",
        stock: "2536шт",
        image: "popular.png",
        tags: ["Популярное"],
        id: 2
    },
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        roznisaOld: "950 ₽",
        roznisa: "850 ₽",
        optom: "750 ₽",
        stock: "2536шт",
        image: "popular.png",
        tags: ["Скидка"],
        id: 3
    },
    {
        name: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
        roznisa: "950 ₽",
        optom: "750 ₽",
        stock: "",
        image: "popular.png",
        tags: ["Новинки"],
        id: 4
    }
]
const popularSlice = createSlice({
    name: "popular",
    initialState: {
        data
    }
})

export const popularProducts = popularSlice.reducer