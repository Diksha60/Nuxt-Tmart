export const useAddCart = defineStore('addCart', () => {
    const count = ref(0)

    const slideItem = ref([])

    const showCart = ref(false)

    const addItam = (slide) => {
        count.value++
        slideItem.value.push(slide)
        localStorage.setItem('slide', JSON.stringify(slideItem.value))
    }

    const getCartItem = () => {
        const storeDataFromStore = localStorage.getItem('slide')
        if(storeDataFromStore){
        slideItem.value = JSON.parse(storeDataFromStore )
    }
    }

   const showCartVisible = () => {
        showCart.value = !showCart.value
   }

   const showCartTure = () => showCart.value = true
   const showCartFalse = () => showCart.value = false

    return { count, slideItem, addItam, getCartItem, showCart, showCartVisible, showCartTure, showCartFalse }
}) 

