<template>
<div class="grid grid-cols-3">
    <div class="col-span-2 bg-black/20 h-full"></div>
    <div class="col-span-1 bg-white h-full pt-5 pb-10">
      <div class="py-4 flex justify-center" v-for="(item, index) in cartData" :key="index">
          <div>
            <p class="text-[14px] font-bold mt-2">ID: <span class="text-[14px] font-medium text-gray-700">{{ index + 1 }}</span></p>
            <p class="text-[14px] font-bold mt-2">Product Name: <span class="text-[14px] font-medium text-gray-700">{{ item.title }}</span></p>
            <p class="text-[14px] font-bold mt-2" v-if="item.realPrice">Real Price: <span class="text-[14px] font-medium text-gray-700">{{ item.realPrice }}</span></p>
            <p class="text-[14px] font-bold mt-2">Sale Price: <span class="text-[14px] font-medium text-gray-700">{{ item.price }}</span></p>
            <button class="mt-3 px-3 py-2 rounded text-white font-bold bg-blue-500">
              <NuxtLink to="/checkOut">Check Out</NuxtLink>
            </button>
          </div>
      </div>
    </div>
</div>
</template>

<script setup>
import { useAddCart } from '~/store/addCart';

const store = useAddCart()

const cartData = ref([])

onMounted(() => {
    const storeDataFromStore = localStorage.getItem('slide')
    if(storeDataFromStore){
      cartData.value = JSON.parse(storeDataFromStore )
    }
})
</script>
