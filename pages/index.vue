<template>
    <div class="mt-[100px] sm:mt-[100px] md:mt-[150px] container mx-auto px-28 sm:px-28 md:px-0">
        <div class="grid gap-0 sm:gap-2 md:gap-9 grid-cols-1 sm:grid-cols-1 md:grid-cols-9">
            <div class="col-span-1 sm:col-span-1 md:col-span-2">
                <CategoryItemNav />
            </div>
            <div class="col-span-1 sm:col-span-1 md:col-span-7">
                <SwiperHome />
            </div>
        </div>
        <DiscountBrand />
        <JewelryWatches />
        <FlatSale />
        <BagsShoes />
        <OnlineForever />
        <KidsMothers />
    </div>
</template>

<script setup>
import BagsShoes from '~/components/home/Bags&Shoes.vue';
import CategoryItemNav from '~/components/home/CategoryItemNav.vue';
import DiscountBrand from '~/components/home/Discount&Brand.vue';
import FlatSale from '~/components/home/FlatSale.vue';
import JewelryWatches from '~/components/home/jewwlry&Watches/Jewelry&Watches.vue';
import KidsMothers from '~/components/home/kids&mothres/Kids&Mothers.vue';
import OnlineForever from '~/components/home/OnlineForever.vue';
import SwiperHome from '~/components/home/SwiperHome.vue';
</script>