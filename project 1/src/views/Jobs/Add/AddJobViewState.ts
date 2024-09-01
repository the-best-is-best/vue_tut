import MyApis from "@/api/my_apis";
import JobRequest from "@/request/JobRequest";
import router from '@/router';
import { reactive } from "vue";
export default class AddJobViewState {
    state: {
       form: JobRequest,
       loading: Boolean
    }

    constructor() {
        this.state = reactive({
            form: new JobRequest(),
            loading: false
        })
    }

    async addJob() {
        this.state.loading = true;
        try {
            var res = await MyApis.addJob(this.state.form);
            if(res !== null){
                router.push(`/job/${res}`);
            }
            this.state.loading = false;
        } catch (error) {
            console.log("error", error);
            this.state.loading = false;
        }
    }
}