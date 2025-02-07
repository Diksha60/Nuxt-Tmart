<template>
<div v-if="store.showCartTure" class="grid grid-cols-3 relative min-h-screen">
    <div class="col-span-2 bg-black/80 h-full w-full"></div>
    <div v-if="store.slideItem.length > 0" class="col-span-1 bg-white h-full pt-5 pb-10">
      <div class="py-4 flex justify-center" v-for="(item, index) in store.slideItem" :key="index">
          <div>
            <p class="text-[22px] font-bold underline">Your Cart</p>
            <p class="text-[14px] font-bold mt-2">ID: <span class="text-[14px] font-medium text-gray-700">{{ index + 1 }}</span></p>
            <p class="text-[14px] font-bold mt-2">Product Name: <span class="text-[14px] font-medium text-gray-700">{{ item.title }}</span></p>
            <p class="text-[14px] font-bold mt-2" v-if="item.realPrice">Real Price: <span class="text-[14px] font-medium text-gray-700">{{ item.realPrice }}</span></p>
            <p class="text-[14px] font-bold mt-2">Sale Price: <span class="text-[14px] font-medium text-gray-700">{{ item.price }}</span></p>
            <button @click="store.showCartFalse" class="mt-3 px-3 py-2 rounded text-white font-bold bg-blue-500">
              <NuxtLink to="/checkOut">Check Out</NuxtLink>
            </button>
          </div>
      </div>
    </div>
    <div v-else class="flex flex-center bg-white">
      <p class="text-center text-[20px] font-bold">Your cart is currently empty.</p>
    </div>
    <div class="absolute top-0 right-0" @click="store.showCartFalse">
      <q-btn flat dense class="hover:text-[red]" icon="close"/>
    </div>
</div>
</template>

<script setup>
import { useAddCart } from '~/store/addCart';

const store = useAddCart()

onMounted(() => {
    store.getCartItem()
})
</script>
