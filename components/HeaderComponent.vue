<template>
    <header class="bg-white/95 fixed top-0 z-50 shadow-md w-full">
        <div class="container mx-auto px-28 sm:px-28 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between items-center py-7 sm:py-7 md:py-[38px] relative">
            <div class="col-span-1 sm:col-span-1 md:col-span-1">
                <NuxtLink to="/" class="text-lg sm:text-xl md:text-3xl">
                    TMART
                </NuxtLink>
            </div>
            <div class="col-span-1 sm:col-span-1 md:col-span-2 flex max-md:hidden justify-between">
                <div>
                    <NuxtLink @mouseover="isHomeOpen = true" @mouseleave="isHomeOpen = false" class="text-gray-600 text-[12px] sm:text-[14px] md:text-[16px] hover:text-red-600" to="/">Home</NuxtLink>
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
            <div class="col-span-1 sm:col-span-1 md:col-span-1 flex items-center  sm:gap-2 md:gap-6 justify-end">
                <div class="mt-1 sm:mt-1 md:mt-0">
                    <Icon name="mdi:magnify" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
                <div class="mt-1 sm:mt-1 md:mt-0">
                    <Icon name="mdi:account-outline" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
                <div >
                    <q-btn @click="count.showCartVisible()" dense flat size="sm" round icon="shopping_cart" class="text-gray-600 hover:text-red-600 w-2 sm:w-2 md:w-6 h-2 sm:h-2 md:h-6">
                        <q-badge color="red" floating >{{ count.count }}</q-badge>
                    </q-btn>
                </div>
                <div class="mt-1 sm:mt-1 md:mt-0">
                    <button @click="toggleMenu">
                        <Icon name="mdi:menu" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                    </button>
                </div>
            </div>
            <div v-if="isMenuOpen" class="md:hidden absolute top-full right-8 bg-white shadow-lg w-48 transition-opacity duration-300 text-center">
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/">Home</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Shop">Shop</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Portfolio">Portfolio</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Product">Product</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border border-b-0" to="/Pages">Pages</NuxtLink>
                <NuxtLink class="block text-gray-600 hover:text-red-600 py-2 px-3 border" to="/Blog">Blog</NuxtLink>
            </div>
        </div>
        <div v-if="isHomeOpen" class="absolute top-full bg-white left-[25.5rem] w-48">
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 1</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 2</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 3</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 4</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 5</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 6</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 7</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 8</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 9</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 10</NuxtLink>
            <NuxtLink class="block text-gray-600 uppercase text-[12px] hover:text-red-600 py-[14px] px-3 border border-b-0" to="/">home 11</NuxtLink>
        </div>
    </header>
</template>     

<script setup>
import { Icon, NuxtLink } from '#components';

import { useAddCart } from '~/store/addCart';

const count = useAddCart()

const isHomeOpen = ref(false)

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

</script>