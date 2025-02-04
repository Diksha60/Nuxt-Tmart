<template>
    <footer class="bg-gray-100">
        <div class="container mx-auto">
            <div class="grid grid-cols-4 py-[70px]">
                <!-- 1st div -->
                <div>
                    <p class="text-[40px]">TMART</p>
                    <div class="mt-2 flex">
                        <div>
                            <Icon name="mdi:map-marker" class="text-gray-500 w-5 h-5"/>
                        </div>
                        <p class="ml-10 text-gray-500 text-[15px]">Your address or <br> location goes here</p>
                    </div>
                    <div class="mt-4 flex">
                        <div>
                            <Icon name="mdi:email" class="text-gray-500 w-5 h-5"/>
                        </div>
                        <p class="ml-10 text-gray-500 text-[15px]">info@example.com</p>
                    </div>
                    <div class="mt-4 flex">
                        <div>
                            <Icon name="mdi:phone-in-talk" class="text-gray-500 w-5 h-5"/>
                        </div>
                        <p class="ml-10 text-gray-500 text-[15px]">+012 345 678 102</p>
                    </div>
                    <!-- div with social media icon -->
                    <div class="flex gap-8 mt-4">
                        <div class="border px-1 border-gray-500 rounded-full">
                            <Icon name="mdi:alpha-f" class="text-gray-500"/>
                        </div>
                        <div class="border px-1 border-gray-500 rounded-full">
                            <Icon name="mdi:google-plus" class="text-gray-500"/>
                        </div>
                        <div class="border px-1 border-gray-500 rounded-full">
                            <Icon name="mdi:twitter" class="text-gray-500"/>
                        </div>
                        <div class="border px-1 border-gray-500 rounded-full">
                            <Icon name="mdi:instagram" class="text-gray-500"/>
                        </div>
                    </div>
                </div>
                <!-- 2nd div -->
                <div>
                    <p class="text-[22px] text-gray-700">Categories</p>
                    <p class="mt-6 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Men</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Women</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Accessories</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Shoes</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Dress</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Denim</a></p>
                </div>
                <!-- 3rd div -->
                <div>
                    <p class="text-[22px] text-gray-700">Information</p>
                    <p class="mt-6 text-[15px] hover:text-red-500 text-gray-500"><a href="/"></a>About Us</p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/"></a>Contact Us</p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/"></a>Terms & Conditions</p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/"></a>Returns & Exchanges</p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/"></a>Shipping & Delivery</p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/"></a>Privacy Policy</p>
                </div>
                <!-- 4th div -->
                <div>
                    <p class="text-[22px] text-gray-700">Newsletter</p>
                    <p class="mt-6 text-[15px] text-gray-900 max-w-[270px]">Subscribe to our newsletter and get 10% off on your first purchase .</p>
                    <div class="mt-5 flex">
                        <input type="text" placeholder="Email address" class="bg-white border border-r-0 px-4 py-1 focus:ring-0 focus:outline-none">
                        <div class="border px-4 py-2 bg-white">
                            <Icon name="mdi:arrow-right" size="20" class="text-gray-500"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 border-t-[1px] border-gray-300 py-5">
                <div>
                    <p class="text-gray-500 text-[15px]">© Copyright <a href="/" class="text-gray-800 hover:text-red-500">2022 Shopify</a> All Rights Reserved.</p>
                </div>
                <div class="flex gap-10 justify-end">
                    <div>
                        <NuxtLink class="text-gray-600 hover:text-red-600 text-[14px]" to="/">Home</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink class="text-gray-600 hover:text-red-600 text-[14px]" to="/product">Product</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink class="text-gray-600 hover:text-red-600 text-[14px]" to="/contactUs">Contact Us</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { NuxtLink } from '#components';

</script>