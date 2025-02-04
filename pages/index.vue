<template>
    <div class="container mx-auto">
        <div class="grid gap-7 grid-cols-9">
            <div class="col-span-2">
                <CategoryItemNav />
            </div>
            <div class="col-span-7">
                <SwiperHome />
            </div>
        </div>
        <DiscountBrand />
        <JewelryWatches />
    </div>
</template>

<script setup>
import CategoryItemNav from '~/components/home/CategoryItemNav.vue';
import DiscountBrand from '~/components/home/Discount&Brand.vue';
import SwiperHome from '~/components/home/SwiperHome.vue';
import JewelryWatches from '~/components/Jewelry&Watches.vue';
</script>