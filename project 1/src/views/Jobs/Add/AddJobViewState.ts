import MyApis from "@/api/my_apis";
import JobRequest from "@/request/JobRequest";
import router from '@/router';
import { hideLoader, showLoader } from '@/views/loader/loaderStore';
import { reactive } from "vue";
import { useToast } from 'vue-toastification';

export default class AddJobViewState {
    state: {
       form: JobRequest,
       loading: Boolean
    }
    toast  = useToast();

    
    constructor() {
        this.state = reactive({
            form: new JobRequest(),
            loading: false
        })
    }

    async addJob() {
        this.state.loading = true;
        showLoader();
        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            var res = await MyApis.addJob(this.state.form);
            if(res !== null){
                this.toast.success("Job added successfully");
                router.push(`/job/${res}`);
            }
            this.state.loading = false;
        } catch (error) {
            this.toast.error("Failed to add job");
            console.log("error", error);
            this.state.loading = false;
        } finally {
            hideLoader();
        }
    }
   
}