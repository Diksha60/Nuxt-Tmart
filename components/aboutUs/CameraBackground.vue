<template>
    <div class="mt-[100px] container mx-auto relative">
        <img src="/assets/About/Camera/Camera.jpeg" alt="An Image" class="w-full h-[500px] object-cover">
        <div class="bg-black/50 absolute top-0 w-full">
            <swiper-container ref="swiperRef" :module="[]" >
                <swiper-slide v-for="(data, index) in details" :key="index">
                    <div class="py-24 sm:py-24 md:py-32">
                        <div class="flex justify-center">
                            <q-avatar size="100px">
                                <q-img :src="data.img"/>
                            </q-avatar>
                        </div>
                        <p class="mt-10 text-white text-[20px] text-center w-[400px] sm:w-[400px] md:w-[800px] mx-auto">{{ data.des }}</p>
                        <p class="text-center mt-4">
                            <a href="/" class="text-gray-100 hover:text-[red] text-[20px]">{{ data.name }}</a>
                            <span class="text-white text-[20px] mx-2">-</span>
                            <span class="text-gray-100 text-[20px]">{{ data.post }}</span>
                        </p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup>

const swiperRef = ref(null)

const swiper = useSwiper(swiperRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

const details = [
    {
        img: '/bgCamera/Profile1.jpeg',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore pariatur. Maxime sint inventore ullam debitis quae neque hic enim, dicta deserunt odio.',
        name: 'Mapo Nali',
        post: 'Designer'
    },
    {
        img: '/bgCamera/Profile2.jpeg',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore pariatur. Maxime sint inventore ullam debitis quae neque hic enim, dicta deserunt odio.',
        name: 'Plenita Tara',
        post: 'MD'
    },
    {
        img: '/bgCamera/Profile3.jpeg',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore pariatur. Maxime sint inventore ullam debitis quae neque hic enim, dicta deserunt odio.',
        name: 'Alo Chaya',
        post: 'CEO'
    },
]
</script>