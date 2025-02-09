<template>
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
        <div v-for="slide in slides" :key="slide.id" @mouseover="setHover(slide.id, true)" @mouseleave="setHover(slide.id, false)" class="relative mt-[30px] sm:mt-[30px] md:mt-0">
            <div class="text-center">
                <img :src="slide.src" :alt="slide.title" class="w-full sm:w-full md:w-[300px] h-[400px] sm-h-[400px] md:h-[300px] object-cover">
                <p class="mt-4 text-[15px] tracking-[0.5px] hover:text-[red]">{{ slide.title }}</p>
                <div class="mt-2 flex justify-center gap-3">
                    <p v-if="slide.realPrice" class="text-gray-500 line-through text-[15px] font-medium">{{ slide.realPrice }}</p>
                    <p class="text-[red] text-[15px] font-medium">{{ slide.price }}</p>
                </div>
            </div>

            <div v-if="showButton[slide.id]" class="flex justify-center items-center max-w-[180px] p-3 bg-white/90 absolute top-1/3 sm:top-1/3 md:top-32 left-1/4 sm:left-1/4 md:left-16">
                <q-btn @click="cart.addItam(slide)" class="text-gray-500 hover:text-[red]" flat dense size="md" icon="add" />
                <p class="text-[20px] text-gray-500 mx-2">|</p>
                <q-btn class="text-gray-500 hover:text-[red]" flat dense size="md" icon="shopping_cart" />
                <p class="text-[20px] text-gray-400 mx-2">|</p>
                <q-btn class="text-gray-500 hover:text-[red]" flat dense size="md" icon="favorite" />
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { useAddCart } from '~/store/addCart';


const cart = useAddCart()

const showButton = ref({});

const setHover = (id, value) => {
    showButton.value = {
        ...showButton.value,
        [id]: value
    };
};

const slides = ref([

    {
        id: 1,
        src: '/jewelrySwiper/Purse.jpeg',
        title: 'Demo Product Title',
        price: "$50.00"
    },
    {
        id: 2,
        src: '/jewelrySwiper/HandBag.jpeg',
        title: 'Clothing Design Bag',
        price: "$100.00"
    },
    {
        id: 3,
        src: '/jewelrySwiper/PowerBank.jpeg',
        title: 'Demo Product Title',
        price: "$30.00"
    },
])
</script>
