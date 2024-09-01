<script setup>
import JobListing from '@/components/Jobs/JobListing.vue';
import { default as JobListingsState } from '@/components/Jobs/JobListingsState';
import { defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const JobState = new JobListingsState();



defineProps ({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
   

})

onMounted(() => {
  console.log(JobState.state.loading)
})

</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        
       
        <div v-if="JobState.state.loading" class="text-center text-gray-500 py-6">
          <PulseLoader />

        </div>
       
        <div v-else  class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobListing v-for="job in JobState.state.jobs.slice(0, limit || JobState.state.jobs.length)" :key="job.id" :job="job"/>
        </div>
      </div>
    </section>
     <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>