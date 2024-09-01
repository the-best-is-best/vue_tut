import JobModel from "@/models/JobModel";
import JobRequest from "@/request/JobRequest";
import axios from "axios";

export default class MyApis {
    private static readonly baseUrl = "/api/";
    public static async getJobs(): Promise<Array<JobModel>> {
        let res = await axios.get(`${this.baseUrl}/jobs`);
        return res.data.map((j: any) => JobModel.fromJSON(j));
    }

    public static async getJob(id: Number): Promise<JobModel> {
        let res = await axios.get(`${this.baseUrl}/jobs/${id}`);
        return JobModel.fromJSON(res.data);
    }

    public static async addJob(job: JobRequest): Promise<String | null> {
      var res =   await axios.post(`${this.baseUrl}/jobs`, job);
      console.log("status", res.status);
      console.log("data", res.data);
      console.log("id", res.data.id);
      if(res.status == 201){
        return res.data.id;
      }else{
        return null;
      }
    }
}