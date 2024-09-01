import { computed, defineProps, ref } from 'vue';
import JobModel from '../../models/JobModel';

class JobListingState {
    
 jobPops = defineProps({
    job: JobModel
})

 showFullDescription = ref(false)


 toggleDescription = () => {
    this.showFullDescription.value = !this.showFullDescription.value
}

 truncatedDescription = computed(() => {
    let description = this.jobPops.job.description
    if(!this.showFullDescription.value) {
        description = description.substring(0, 90) + '...'
    }

    return description
})
}

export default JobListingState