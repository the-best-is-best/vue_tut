<script setup>
import { default as JobListingState } from '@/components/Jobs/JobListingState';
import JobModel from '@/models/JobModel';
const jobPops = defineProps({
    job: JobModel
})
const stateJob = new JobListingState(jobPops.job)
</script>

<template>
        <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{  stateJob.state.job.type }}</div>
                <h3 class="text-xl font-bold">{{ stateJob.state.job.title }}</h3>
              </div>

              <div class="mb-5">
                <div> {{ stateJob.truncatedDescription }}  </div>
                <button class="text-green-500 hover:text-green-600" @click="stateJob.toggleDescription">
                  {{ stateJob.state.showFullDescription ? 'Less' : 'More' }}
                </button>
              </div>

              <h3 class="text-green-500 mb-2">{{stateJob.state.job.salary }}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="pi pi-map-marker text-orange-700"></i>
                  {{ stateJob.state.job.location }}
                </div>
                <RouterLink
                  :to="'/job/' + stateJob.state.job.id"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </RouterLink>
              </div>
            </div>
          </div>
</template>