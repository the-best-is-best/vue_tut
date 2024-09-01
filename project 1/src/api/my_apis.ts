import JobModel from "@/models/JobModel";
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
}