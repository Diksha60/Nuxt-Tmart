<template>
    <div class="mt-[50px]">
        <div class="bg-black flex gap-4 py-2 px-4 text-white hover:text-red-500">
            <div class="">
                <Icon name="mdi:menu" class="" size="22 md:18 sm:13"/>
            </div>
            <p class="text-white hover:text-red-500 lg:text-[16px] sm:text-[10px] md:text-[14px]">BROWSE CATEGORIES</p>
        </div>
        <div class="flex justify-between border border-t-0 py-3 px-4 cursor-pointer" v-for="item in category1" :key="item">
            <div class="flex gap-2">
                <div>
                    <Icon class="text-gray-600" :name="item.icon1"/>
                </div>
                <p class="text-[15px] text-gray-600 hover:text-red-500">{{ item.title }}</p>
            </div>
            <div>
                <Icon :name="item.icon2"/>
            </div>
        </div>
        <div class="flex gap-2 border border-t-0 py-3 px-4 cursor-pointer" v-for="category in category2" :key="category.id">
            <div>
                <Icon class="text-gray-600" :name="category.icon"/>
            </div>
            <p class="text-[15px] text-gray-600 hover:text-red-500">{{ category.title }}</p>
        </div>
    </div>
</template>

<script setup>
    const category1 = [
        {
            id: 1,
            icon1: 'mdi:human-female',
            title: "Women's Clothing",
            icon2: 'mdi:chevron-right'  
        },
        {
            id: 2,
            icon1: 'mdi:human-male',
            title: "Male Fashion",
            icon2: 'mdi:chevron-right'    
        },
        {
            id: 3,
            icon1: 'mdi:cellphone-link',
            title: "Computer & Office",
            icon2: 'mdi:chevron-right'    
        },
    ]

    const category2 = [
        {
            id: 1,
            icon: 'mdi:wifi-strength-4',
            title: "Jewelry"
        },
        {
            id: 2,
            icon: 'mdi:human',
            title: "Men's Clothing"
        },
        {
            id: 3,
            icon: 'mdi:briefcase',
            title: "Bags & Shoes"
        },
        {
            id: 4,
            icon: 'mdi:run',
            title: "Toys & Kids & Baby"
        },
        {
            id: 5,
            icon: 'mdi:power-plug',
            title: "Automobiles"
        },
        {
            id: 6,
            icon: 'mdi:watch',
            title: "Watches"
        },
        {
            id: 7,
            icon: 'mdi:video-input-hdmi',
            title: "Customer Electrionics"
        },
        {
            id: 8,
            icon: 'mdi:cog',
            title: "All Accessories"
        },
    ]
</script>