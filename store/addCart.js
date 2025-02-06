export const useAddCart = defineStore('addCart', () => {
    const count = ref(0)

    const slideItem = ref([])

    const addItam = (slide) => {
        count.value++
        slideItem.value.push(slide)
        localStorage.setItem('slide', JSON.stringify(slideItem.value))
   }

    return { count, slideItem, addItam }
}) 

