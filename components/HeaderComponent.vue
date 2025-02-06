<template>
    <header class="sticky top-0 bg-white z-50 shadow-md">
        <div class="container mx-auto grid grid-cols-4 justify-between pt-[50px] pb-[25px]">
            <div class="col-span-1">
                <p class="text-4xl">TMART</p>
            </div>
            <div class="col-span-2 flex justify-between">
                <div>
                    <NuxtLink class="text-gray-600 text-[16px] hover:text-red-600" to="/">Home</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[16px] hover:text-red-600" to="/Shop">Shop</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[16px] hover:text-red-600" to="/Portfolio">Portfolio</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[16px] hover:text-red-600" to="/Product">Product</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[16px] hover:text-red-600" to="/Pages">Pages</NuxtLink>
                </div>
                <div>
                    <NuxtLink class="text-gray-600 text-[16px] hover:text-red-600" to="/Blog">Blog</NuxtLink>
                </div>
            </div>
            <div class="col-span-1 flex gap-6 justify-end">
                <div>
                    <Icon name="mdi:magnify" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
                <div>
                    <Icon name="mdi:account-outline" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
                <div>
                    <q-btn @click="open = !open" dense flat size="md" round icon="shopping_cart" class="text-gray-600 hover:text-red-600 w-6 h-6">
                        <q-badge color="red" floating >{{ count.count }}</q-badge>
                    </q-btn>
                </div>
                <div>
                    <Icon name="mdi:menu" class="text-gray-600 hover:text-red-600 w-6 h-6"/>
                </div>
            </div>
        </div>
    </header>
</template>     

<script setup>
import { Icon } from '#components';

import { useAddCart } from '~/store/addCart';

const open = ref(false)

const count = useAddCart()

</script>