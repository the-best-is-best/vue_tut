import MyApis from '@/api/my_apis';
import JobModel from '@/models/JobModel';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default class JobDataState {
    state : {
        job:  JobModel | null,
        loading: Boolean
    }
     router = useRouter();


    constructor(jobId: Number) {
        
       this.getData(jobId)
    }

    private async getData(jobId: Number) {
        this.state = reactive({
            job: null,
            loading: true
        });
        
        try {
            // Create a promise that resolves after 1 second
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Fetch jobs from the API
            const job = await MyApis.getJob(jobId);
            this.state.job = job;
        } catch (error) {
            console.log("error", error);
            this.router.replace('/not-found')
            
        } finally {
            this.state.loading = false; // Set loading to false after jobs have been fetched
        }
    }
}