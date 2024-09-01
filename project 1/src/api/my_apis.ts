import JobModel from "@/models/JobModel";
import JobRequest from "@/request/JobRequest";
import axios from "axios";

export default class MyApis {
    private static readonly baseUrl = "/api/";
    public static async getJobs(): Promise<Array<JobModel>> {
        let res = await axios.get(`${this.baseUrl}/jobs`);
        return res.data.map((j: any) => JobModel.fromJSON(j));
    }

    public static async getJob(id: String): Promise<JobModel> {
        let res = await axios.get(`${this.baseUrl}/jobs/${id}`);
        return JobModel.fromJSON(res.data);
    }

    public static async addJob(job: JobRequest): Promise<String | null> {
      var res =   await axios.post(`${this.baseUrl}/jobs`, job);
     
      if(res.status == 201){
        return res.data.id;
      }else{
        return null;
      }
    }

    public static async deleteJob(id: String): Promise<void> {
        await axios.delete(`${this.baseUrl}/jobs/${id}`);
    }


    public static async updateJob(id: String, job: JobRequest): Promise<String | null> {
      var res =   await axios.put(`${this.baseUrl}/jobs/${id}`, job);
      console.log("status", res.status);
      console.log("data", res.data);
      console.log("id", res.data.id);
      if(res.status == 200){
        return res.data.id;
      }else{
        return null;
      }
     }
}