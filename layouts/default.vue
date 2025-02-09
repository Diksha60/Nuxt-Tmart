<script setup lang="ts">
import FooterComponent from '~/components/FooterComponent.vue';
import HeaderComponent from '~/components/HeaderComponent.vue';
import ShowCarts from '~/components/ShowCarts.vue';
import { useAddCart } from '~/store/addCart';

const store = useAddCart()

</script>

<template>
    <div class="">
        <HeaderComponent />
        <NuxtPage />
        <FooterComponent />
        <div v-if="store.showCart" class="inset-0 fixed top-0 z-50 min-h-screen">
            <ShowCarts />
        </div>
    </div>

</template>