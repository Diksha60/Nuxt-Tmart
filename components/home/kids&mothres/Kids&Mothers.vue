<template>
    <div class="my-[50px] sm:my-[50px] md:my-[100px] grid md:gap-7 grid-cols-1 sm:grid-cols-1 md:grid-cols-9">
    <div class="col-span-1 sm:col-span-1 md:col-span-2">
        <div class="border border-t-2 border-t-[red] px-5 py-[14px]">
            <p class="text-black text-[16px] font-bold hover:text-red-500"> KIDS & MOTHERS</p>
        </div>
        <div class="border cursor-pointer px-7 py-8">
            <p class="text-gray-600 hover:text-red-500 text-[15px]">Diapers & Wipes</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Bath & Skincare</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Pacifires & Teethers</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Bedding</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Guides & Resources</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Breast Pumps</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Potty Training</p>
            <p class="mt-6 text-gray-600 hover:text-red-500 text-[15px]">Strollers</p>
        </div>
    </div>
    <div class="col-span-1 sm:col-span-1 md:col-span-7 mt-[50px] sm:mt-[50px] md:mt-0">
        <div class="flex justify-between px-5 py-2 border-t-2 border-t-[red] border border-b-0">
            <div>
                <q-tabs v-model="tab" dense class="text-gray-900" active-color="red" indicator-color="white">
                    <q-tab name="featured" label="Featured" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="onSale" label="On Sale" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="bestSale" label="Best sale" class="hover:text-[red]">
                    </q-tab>
                    <q-tab name="upSale" label="Up sale" class="hover:text-[red]">
                    </q-tab>
                </q-tabs>

            </div>
            <div class="">
                <a href="/" class="text-[14px] sm:text-[14px] md:text-[18px] font-semibold sm:font-semibold md:font-bold">All</a>
            </div>
        </div>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="md:mt-7">
            <q-tab-panel name="featured">
                <FeaturedTap />
            </q-tab-panel>

            <q-tab-panel name="onSale">
               <OnSale />
            </q-tab-panel>
            <q-tab-panel name="bestSale">
                <BestSale />
            </q-tab-panel>
            <q-tab-panel name="upSale">
                <UpSale />
            </q-tab-panel>
        </q-tab-panels>
    </div>
</div>
</template>

<script setup>
import BestSale from './BestSale.vue';
import FeaturedTap from './FeaturedTap.vue';
import OnSale from './OnSale.vue';
import UpSale from './UpSale.vue';

const tab = ref('featured')
</script>