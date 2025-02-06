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