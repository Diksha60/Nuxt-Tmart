<template>
<Swiper 
    ref="swiperRef" 
    :slides-per-view="3" 
    :breakpoints="{ 
        640: {slidesPerView: 1},
        768: { slidesPerView: 1 }, 
        1024: { slidesPerView: 3 }
    }"
    :modules="[Navigation]" 
    :navigation="false" 
    :loop="true" 
    class="mt-10" 
    @swiper="onSwiperInit"
>
    <SwiperSlide v-for="slide in slides" :key="slide.id" @mouseover="setHover(slide.id, true)" @mouseleave="setHover(slide.id, false)">
        <div class="text-center">
            <img :src="slide.src" :alt="slide.title" class="w-full sm:w-full md:w-[300px] h-[400px] sm:h-[400px] md:h-[300px] object-cover">
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
    </SwiperSlide>
</Swiper>
</template>

    
    
<script setup>
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue'
import {
    Navigation
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useAddCart } from '~/store/addCart'

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
    {
        id: 4,
        src: '/jewelrySwiper/Pot2.jpeg',
        title: 'Dummy Product Name',
        price: "$56.20"
    },
    {
        id: 5,
        src: '/jewelrySwiper/Bottle.jpeg',
        title: 'Product Demo Title',
        realPrice: "$150.00",
        price: "$130.00"
    },
    {
        id: 6,
        src: '/jewelrySwiper/Pot.jpeg',
        title: 'Dummy Product Name',
        realPrice: "$110.00",
        price: "$90.00"
    },
    {
        id: 7,
        src: '/jewelrySwiper/Kettle.jpeg',
        title: 'Dummy Product Title',
        realPrice: "$150.00",
        price: "$120.00"
    },
    {
        id: 8,
        src: '/jewelrySwiper/Bottle.jpeg',
        title: 'Large Water Bottle',
        price: "$30.00"
    },
])

const swiperRef = ref(null)

let swiperInstance = null

const onSwiperInit = (swiper) => {
    swiperInstance = swiper
}

const goPrev = () => {
    if (swiperInstance) {
        swiperInstance.slidePrev()
    }
}

const goNext = () => {
    if (swiperInstance) {
        swiperInstance.slideNext()
    }
}

defineExpose({
    goPrev,
    goNext
})
</script>
