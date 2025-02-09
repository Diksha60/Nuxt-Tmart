<script setup lang="ts">
import BannerAbout from '~/components/aboutUs/BannerAbout.vue';
import CameraBackground from '~/components/aboutUs/CameraBackground.vue';
import ChooseUs from '~/components/aboutUs/ChooseUs.vue';
import LastBanner from '~/components/aboutUs/LastBanner.vue';
import TeamMember from '~/components/aboutUs/TeamMember.vue';
import WelcomeTmart from '~/components/aboutUs/WelcomeTmart.vue';


</script>

<template>
    <div class="mt-[500px] sm:mt-[50px] md:mt-[110px]">
        <BannerAbout />
        <WelcomeTmart />
        <ChooseUs />
        <TeamMember />
        <CameraBackground />
        <LastBanner />
    </div>
</template>