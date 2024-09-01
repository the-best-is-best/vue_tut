import MyApis from "@/api/my_apis";
import JobRequest from "@/request/JobRequest";
import router from '@/router';
import { hideLoader, showLoader } from '@/views/loader/loaderStore';
import { reactive } from "vue";
import { useToast } from 'vue-toastification';

export default class EditJobViewState {
    state: {
       form: JobRequest,
       loading: Boolean
    }
     
    jobId: String
    toast  = useToast();
    constructor(jobId: String) {
        this.jobId = jobId;
        this.state = reactive({
            form: new JobRequest(),
            loading: false
        })

        this.getJob();
    }

    private async getJob() {
        showLoader();
        this.state = reactive({
            form: new JobRequest(),
            loading: true
        })
        try {
            const job = await MyApis.getJob(this.jobId);
            this.state.form = JobRequest.fromJSON(job);
        } catch (error) {
            console.log("error", error);
        } finally {
            this.state.loading = false;
            hideLoader();
        }
    }

    async updateJob() {
        showLoader();
      
        this.state.loading = true;
        try {
            var res = await MyApis.updateJob(this.jobId, this.state.form);
            if(res != null){
                this.toast.success("Job updated");
                router.push(`/job/${res}`);
            }else{
                this.toast.error("Job not updated");
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            this.state.loading = false;
            hideLoader();
        }
    }

   
   
}