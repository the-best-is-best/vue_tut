import MyApis from "@/api/my_apis";
import JobModel from "@/models/JobModel";
import { reactive } from "vue";

    class jobListingsState {
         state = reactive({
            jobs: new Array<JobModel>(),
            loading: true
        })

        constructor () {
            this.fetchJobs()
        }
    

   private async fetchJobs() {
    try {
        // Create a promise that resolves after 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Fetch jobs from the API
        const jobs = await MyApis.getJobs();
        this.state.jobs = jobs;
    } catch (error) {
        console.log(error);
    } finally {
        this.state.loading = false; // Set loading to false after jobs have been fetched
    }
}

}

export default jobListingsState
