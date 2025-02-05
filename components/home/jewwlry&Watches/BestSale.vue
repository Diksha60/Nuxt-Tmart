<template>
    <Swiper 
        ref="swiperRef"
        :slides-per-view="3"
        :modules="[Navigation]" 
        :navigation="false" 
        :loop="true" 
        class="mt-10"
        @swiper="onSwiperInit"
    >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
            <div class="mx-4 text-center">
                <div>
                    <img :src="slide.src" :alt="slide.title" class="w-[300px] h-[300px] object-cover">
                </div>
                <p class="mt-4 text-[15px] tracking-[0.5px] hover:text-[red]">{{ slide.title }}</p>
                <div class="mt-2 flex justify-center gap-3">
                    <p v-if="slide.realPrice" class="text-gray-500 line-through text-[15px] font-medium">{{ slide.realPrice }}</p>
                    <p class="text-[red] text-[15px] font-medium">{{ slide.price }}</p>
                </div>
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
    
    const slides = ref([
    
        {
            id: 1,
            src: "/jewelrySwiper/Bag.jpeg",
            title: 'Carry Bag of Leather',
            realPrice: "$100.00",
            price: "$80.00"
        },
        {
            id: 2,
            src: '/jewelrySwiper/Purse.jpeg',
            title: 'Demo Product Title',
            price: "$50.00"
        },
        {
            id: 3,
            src: '/jewelrySwiper/HandBag.jpeg',
            title: 'Clothing Design Bag',
            price: "$100.00"
        },
        {
            id: 4,
            src: '/jewelrySwiper/Holder.jpeg',
            title: 'Demo Product Title',
            price: "$50.00"
        },
        {
            id: 5,
            src: '/jewelrySwiper/PhoneHolder.jpeg',
            title: 'Demo Product Title',
            price: "$150.00"
        },
        {
            id: 6,
            src: '/jewelrySwiper/Bottle.jpeg',
            title: 'Product Demo Title',
            realPrice: "$150.00",
            price: "$130.00"
        },
        {
            id: 7,
            src: '/jewelrySwiper/Kettle.jpeg',
            title: 'Product Demo Title',
            price: "$150.00"
        },
        {
            id: 8,
            src: '/jewelrySwiper/Cup.jpeg',
            title: 'Product Dummy Name',
            realPrice: '$100',
            price: "$90.00"
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
    
    defineExpose({ goPrev, goNext })
    
    </script>
    