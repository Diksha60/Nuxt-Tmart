<template>
  <Swiper
    :modules="[Navigation]"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    :loop="true"
    class="relative mt-[50px]"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div class="relative">
        <img :src="slide.src" alt="a banner image" class="h-[68vh] w-full object-cover">

        <div class="absolute top-48" :class="slide.is_reverse ? 'right-16 text-end' : 'left-12 text-start'">
          <p class="text-[50px] font-semibold">{{ slide.title1 }}</p>
          <p class="text-red-500 text-[45px] font-semibold">{{ slide.title2 }}</p>
          <p class="text-[20px]">{{ slide.subtitle }}</p>
        </div>
      </div>
    </SwiperSlide>

    <button class="swiper-button-prev absolute top-1/2 left-5 transform -translate-y-1/2 text-white font-bold transition"></button>
    <button class="swiper-button-next absolute top-1/2 right-5 transform -translate-y-1/2 text-white font-bold transition"></button>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// ✅ Slide Data
const slides = ref([
  {
    title1: 'Men Product',
    src: '/swiper/Swiper1.jpeg',
    title2: 'Collection',
    subtitle: 'SHOW ME',
    is_reverse: true,
  },
  {
    title1: 'New Product',
    src: '/swiper/Swiper2.jpeg',
    title2: 'Collection',
    subtitle: 'SHOW ME',
    is_reverse: false,
  },
])

</script>

