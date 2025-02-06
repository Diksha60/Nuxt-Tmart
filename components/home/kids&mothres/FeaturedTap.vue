<template>
    <div class="grid grid-cols-3">
        <div v-for="slide in slides" :key="slide.id" @mouseover="setHover(slide.id, true)" @mouseleave="setHover(slide.id, false)" class="relative">
            <div class="text-center">
                <img :src="slide.src" :alt="slide.title" class="w-[300px] h-[300px] object-cover">
                <p class="mt-4 text-[15px] tracking-[0.5px] hover:text-[red]">{{ slide.title }}</p>
                <div class="mt-2 flex justify-center gap-3">
                    <p v-if="slide.realPrice" class="text-gray-500 line-through text-[15px] font-medium">{{ slide.realPrice }}</p>
                    <p class="text-[red] text-[15px] font-medium">{{ slide.price }}</p>
                </div>
            </div>

            <div v-if="showButton[slide.id]" class="flex justify-center items-center max-w-[180px] p-3 bg-white/75 absolute top-32 left-16">
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
        src: '/jewelrySwiper/Bag.jpeg',
        title: 'Carry Bag of Leather',
        realPrice: "$100.00",
        price: "$80.00"
    },
    {
        id: 2,
        src: '/jewelrySwiper/Doll.jpeg',
        title: 'Bamboo Dolls for Kids',
        realPrice: "$120.00",
        price: "$100.00"
    },
    {
        id: 3,
        src: '/jewelrySwiper/Glass.jpeg',
        title: 'Product Demo Title',
        realPrice: "$100.00",
        price: "$80.00"
    },
])


</script>


