<template>
    <footer class="bg-gray-100">
        <div class="container mx-auto px-28 sm:px-28 md:px-0">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 py-[70px]">
                <!-- 1st div -->
                <div class="mt-6 sm:mt-6 md:mt-0">
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
                    <div class="ml-3 flex gap-5 mt-6">
                        <div class="border border-gray-400 hover:border-[red] hover:bg-[red] rounded-full px-[6px] pt-[5px] text-gray-400 hover:text-white">
                            <Icon name="gg:facebook" size="15"/>
                        </div>
                        <div class="border border-gray-400 hover:border-[red] hover:bg-[red] rounded-full px-[6px] pt-[5px] text-gray-400 hover:text-white">
                            <Icon name="la:google-plus" size="15"/>
                        </div>
                        <div class="border border-gray-400 hover:border-[red] hover:bg-[red] rounded-full px-[6px] pt-[5px] text-gray-400 hover:text-white">
                            <Icon name="mdi:twitter" size="15"/>
                        </div>
                        <div class="border border-gray-400 hover:border-[red] hover:bg-[red] rounded-full px-[6px] pt-[5px] text-gray-400 hover:text-white">
                            <Icon name="icomoon-free:instagram" size="15"/>
                        </div>
                    </div>
                </div>
                <!-- 2nd div -->
                <div class="mt-6 sm:mt-6 md:mt-0">
                    <p class="text-[22px] text-gray-700">Categories</p>
                    <p class="mt-6 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Men</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Women</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Accessories</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Shoes</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Dress</a></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><a href="/">Denim</a></p>
                </div>
                <!-- 3rd div -->
                <div class="mt-6 sm:mt-6 md:mt-0">
                    <p class="text-[22px] text-gray-700">Information</p>
                    <p class="mt-6 text-[15px] hover:text-red-500 text-gray-500"><NuxtLink to="/aboutUs">About Us</NuxtLink></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><NuxtLink to="/contactUs">Contact Us</NuxtLink></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><NuxtLink to="/">Terms & Conditions</NuxtLink></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><NuxtLink to="/">Returns & Exchanges</NuxtLink></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><NuxtLink to="/">Shipping & Delivery</NuxtLink></p>
                    <p class="mt-2 text-[15px] hover:text-red-500 text-gray-500"><NuxtLink to="/">Privacy Policy</NuxtLink></p>
                </div>
                <!-- 4th div -->
                <div class="mt-6 sm:mt-6 md:mt-0">
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
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:justify-items-center md:justify-items-stretch  border-t-[1px] border-gray-300 py-5">
                <div>
                    <p class="text-gray-500 text-[15px]">© Copyright <a href="/" class="text-gray-800 hover:text-red-500">2022 Shopify</a> All Rights Reserved.</p>
                </div>
                <div class="flex gap-10 justify-start sm:justify-start md:justify-end">
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