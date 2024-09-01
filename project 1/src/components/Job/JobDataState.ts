import MyApis from '@/api/my_apis';
import JobModel from '@/models/JobModel';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';


export default class JobDataState {
    state : {
        job:  JobModel | null,
        loading: Boolean
    }
   
    router = useRouter();

    toast = useToast();

    constructor(jobId: String) {
        
       this.getData(jobId)
    }

    private async getData(jobId: String) {
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

    async deleteJob (){
        this.state.loading = true;
        try {
           const confirm = window.confirm("Are you sure you want to delete this job?");
            if(!confirm){
                return;
            }
            await MyApis.deleteJob(this.state.job!.id);
            this.toast.success("Job deleted successfully");
            this.router.push('/jobs');
        } catch (error) {
            this.toast.error("Failed to delete job");
            console.log("error", error);
           
        } finally{
            this.state.loading = false;
        }
    }
}