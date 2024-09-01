import { JobTypes } from "../enums/JobTypes";
import CompanyRequest from "./CompanyRequest";
export default class JobRequest {
    title: string;
    type: JobTypes;
    location: string;
    description: string;
    salary: string;
    company: CompanyRequest;

    constructor(
        title: string = "",
        type: JobTypes = JobTypes.FullTime,
        location: string = "",
        description: string = "",
        salary: string = "",
        company: CompanyRequest = new CompanyRequest()
    ) {
        this.title = title;
        this.type = type;
        this.location = location;
        this.description = description;
        this.salary = salary;
        this.company = company;
    }

    // toJson():object{
    //     return {
    //         title: this.title,
    //         type: this.type,
    //         location: this.location,
    //         description: this.description,
    //         salary: this.salary,
    //         company: this.company.toJson()
    //     }
    // }
}


