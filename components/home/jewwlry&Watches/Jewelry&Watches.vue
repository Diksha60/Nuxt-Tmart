<template>
<div class="mt-[50px] sm:mt-[50px] md:mt-[100px] grid gap-0 md:gap-7 grid-cols-1 sm:grid-cols-1 md:grid-cols-9">
    <div class="col-span-1 sm:col-span-1 md:col-span-2">
        <div class="border border-t-2 border-t-[red] px-5 py-[14px]">
            <p class=" text-black text-[16px] font-bold hover:text-red-500">JEWELRY & WATCHES</p>
        </div>
        <div class="border cursor-pointer px-7 py-8">
            <p class="text-gray-600 hover:text-red-500 text-[15px]">Awesome Rings</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Hot Earrings</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Jewelry Sets</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Beads Jewelry</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Men's Watches</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Women's Watches</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Popular Bracelets</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Pendant Nacklaces</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Children's Watches</p>
        </div>
    </div>
    <div class="col-span-1 sm:col-span-1 md:col-span-7 mt-[50px] sm:mt-[50px] md:mt-0">
        <div class="flex justify-between sm:flex-wrap px-5 py-2 border-t-2 border-t-[red] border border-b-0">
            <div>
                <q-tabs v-model="tab" dense class="text-gray-900" active-color="red" indicator-color="white">
                    <q-tab name="latest" label="Latest" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="bestSale" label="Best sale" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="topRated" label="Top Rated" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="onSale" label="On sale" class="hover:text-[red]">
                    </q-tab>
                </q-tabs>

            </div>
            <div class="hidden md:flex gap-2">
                <div @click="goPrev()" class="cursor-pointer">
                    <q-icon name="arrow_back_ios" size="50" class="hover:text-[red] text-bold" />
                </div>
                <div @click="goNext()" class="cursor-pointer">
                    <q-icon name="arrow_forward_ios" size="50" class="hover:text-[red] text-bold" />
                </div>
            </div>
        </div>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="latest" class="p-0">
                <LatestSwiper ref="swiperRef"/>
            </q-tab-panel>

            <q-tab-panel name="bestSale">
                <BestSale ref="swiperRef"/>
            </q-tab-panel>

            <q-tab-panel name="topRated">
                <TopRated ref="swiperRef"/>
            </q-tab-panel>
            <q-tab-panel name="onSale">
                <OnSale ref="swiperRef"/>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</div>
</template>

<script setup>
import BestSale from './BestSale.vue';
import LatestSwiper from './LatestSwiper.vue';
import OnSale from './OnSale.vue';
import TopRated from './TopRated.vue';



const tab = ref('latest')

const swiperRef = ref(null)

const goPrev = () => {
  swiperRef.value?.goPrev()
}

const goNext = () => {
  swiperRef.value?.goNext()
}

</script>
