<template>
    <header class="bg-white/95 fixed top-0 z-50 shadow-md w-full">
        <div class="container mx-auto px-28 sm:px-28 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between pt-7 sm:pt-7 md:pt-[50px] pb-2 sm:pb-2 md:pb-[25px] relative">
            <div class="col-span-1 sm:col-span-1 md:col-span-1">
                <p class="text-lg sm:text-xl md:text-3xl">TMART</p>
            </div>
            <div class="col-span-1 sm:col-span-1 md:col-span-2 hidden md:flex justify-between">
                <div>
                    <NuxtLink class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/">Home</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/Shop">Shop</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/Portfolio">Portfolio</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/Product">Product</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/Pages">Pages</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/Blog">Blog</NuxtLink>
                </div>
            </div>
            <div class="col-span-1 sm:col-span-1 md:col-span-1 flex sm:gap-2 md:gap-6 justify-end">
                <div class="mt-1 sm:mt-1 md:mt-0">
                    <Icon name="mdi:magnify" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
                <div class="mt-1 sm:mt-1 md:mt-0">
                    <Icon name="mdi:account-outline" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
                <div >
                    <q-btn @click="count.showCartVisible()" dense flat size="md" round icon="shopping_cart" class="text-gray-600 hover:text-red-600 w-2 sm:w-2 md:w-6 h-2 sm:h-2 md:h-6">
                        <q-badge color="red" floating >{{ count.count }}</q-badge>
                    </q-btn>
                </div>
                <div class="mt-1 sm:mt-1 md:mt-0">
                    <button @click="toggleMenu">
                        <Icon name="mdi:menu" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                    </button>
                </div>
            </div>
            <div v-if="isMenuOpen" class="absolute top-full right-8 bg-white shadow-lg w-48 transition-opacity duration-300 text-center">
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/">Home</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Shop">Shop</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Portfolio">Portfolio</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Product">Product</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Pages">Pages</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border" to="/Blog">Blog</NuxtLink>
            </div>
        </div>
        <!-- <div class="absolute top-0">
            <HomeNavs />
        </div> -->
    </header>
</template>     

<script setup>
import { Icon } from '#components';

import { useAddCart } from '~/store/addCart';
import HomeNavs from './home/HomeNavs.vue';

const count = useAddCart()

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

</script>