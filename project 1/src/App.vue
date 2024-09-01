<script setup>

import Navbar from '@/components/Navbar.vue';
import Loader from '@/views/loader/LoaderView.vue';
import { loaderStore } from '@/views/loader/loaderStore';
import { RouterView } from 'vue-router';

</script>


<template>
  <Loader :visible="loaderStore.isVisible" />
  <Navbar />
  <RouterView />
</template>