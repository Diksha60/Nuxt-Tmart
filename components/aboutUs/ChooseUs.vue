<template>
    <div class="mt-[100px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div>
            <q-video
                :ratio="16/9"
                src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            />
        </div>
        <div class="bg-gray-100 px-20 sm:px-20 md:px-28 py-12 sm:py-12 md:py-20">
            <p class="capitalize text-[32px] text-gray-600 tracking-[1px]">why choose us?</p>
            
            <div class="mt-8 grid grid-cols-1 sm:cgrid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 md:gap-8">
                <!-- heart -->
                <div class="md:grid sm:flex md:grid-cols-4 gap-4">
                    <div class="md:col-span-1">
                        <Icon name="mdi:heart-outline" class="w-12 h-12 text-gray-600"/>
                    </div>
                    <div class="md:col-span-3">
                        <p class="text-[20px] text-gray-600">Free Gift Box</p>
                        <p class="mt-2 text-[16px] text-gray-600">Lorem ipsum dolor sit amet consect adipisic elit sed do.</p>
                    </div>
                </div>
                <!-- Money -->
                <div class="md:grid sm:flex md:grid-cols-4 gap-4">
                    <div class="md:col-span-1">
                        <Icon name="mdi:cached" class="w-12 h-12 text-gray-600"/>
                    </div>
                    <div class="md:col-span-3">
                        <p class="text-[20px] text-gray-600">Money Back</p>
                        <p class="mt-2 text-[16px] text-gray-600">Lorem ipsum dolor sit amet consect adipisic elit sed do.</p>
                    </div>
                </div>
                <!-- truck -->
                <div class="md:grid sm:flex md:grid-cols-4 gap-4">
                    <div class="md:col-span-1">
                        <Icon name="mdi:truck-cargo-container" class="w-12 h-12 text-gray-600"/>
                    </div>
                    <div class="md:col-span-3">
                        <p class="text-[20px] text-gray-600">Free Delevery</p>
                        <p class="mt-2 text-[16px] text-gray-600">Lorem ipsum dolor sit amet consect adipisic elit sed do.</p>
                    </div>
                </div>
                <!-- time -->
                <div class="md:grid sm:flex md:grid-cols-4 gap-4">
                    <div class="md:col-span-1">
                        <Icon name="mdi:clock-time-three-outline" class="w-12 h-12 text-gray-600"/>
                    </div>
                    <div class="md:col-span-3">
                        <p class="text-[20px] text-gray-600">Support 24/7</p>
                        <p class="mt-2 text-[16px] text-gray-600">Lorem ipsum dolor sit amet consect adipisic elit sed do.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>