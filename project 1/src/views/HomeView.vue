<script setup>
import Hero from '@/components/Home/Hero.vue';
import HomeCards from '@/components/Home/HomeCards.vue';
import JobListings from '@/components/Jobs/JobListings.vue';
</script>

<template>
   <Hero
        title="Michelle a Vue Dev"
        subTitle="Find the Vue job that fits your skills and needs"
   />
   <HomeCards />
   <JobListings limit="3" showButton="true"/>
</template>