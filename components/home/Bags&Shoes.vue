<template>
<div class="mt-[100px] grid gap-7 grid-cols-9">
    <div class="col-span-2">
        <div class="border border-t-2 border-t-[red] px-5 py-[14px] text-center">
            <p class="text-black text-[16px] font-bold hover:text-red-500"> BAGS & SHOES</p>
        </div>
        <div class="border cursor-pointer px-7 py-8">
            <p class="text-gray-600 hover:text-red-500 text-[15px]">Duffel Bag</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Shoulder Bags</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Tote Bags</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Clutches & Evening</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Hobos</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Aaron Preacher</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Tyler Mansfield</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Nathan Valencia</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Patrick Sumugat</p>
        </div>
    </div>
    <div class="col-span-7">
        <div class="flex justify-between px-5 py-2 border-t-2 border-t-[red] border border-b-0">
            <div>
                <q-tabs v-model="tab" dense class="text-gray-900" active-color="red" indicator-color="white">
                    <q-tab name="upSale" label="Up sale" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="topRated" label="Top Rated" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="onSale" label="On sale" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="bestSale" label="Best sale" class="hover:text-[red]">
                    </q-tab>
                </q-tabs>

            </div>
            <div class="flex gap-2">
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
            <q-tab-panel name="upSale">
                <LatestSwiper ref="swiperRef" />
            </q-tab-panel>

            <q-tab-panel name="topRated">
                <TopRated ref="swiperRef" />
            </q-tab-panel>
            <q-tab-panel name="onSale">
                <OnSale ref="swiperRef" />
            </q-tab-panel>
            <q-tab-panel name="bestSale">
                <BestSale ref="swiperRef" />
            </q-tab-panel>
        </q-tab-panels>
    </div>
</div>
</template>

    
    
<script setup>
import BestSale from './jewwlry&Watches/BestSale.vue';
import LatestSwiper from './jewwlry&Watches/LatestSwiper.vue';
import OnSale from './jewwlry&Watches/OnSale.vue';
import TopRated from './jewwlry&Watches/TopRated.vue';


const tab = ref('upSale')

const swiperRef = ref(null)

const goPrev = () => {
    swiperRef.value ?.goPrev()
}

const goNext = () => {
    swiperRef.value ?.goNext()
}
</script>
