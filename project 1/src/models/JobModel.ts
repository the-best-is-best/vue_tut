import CompanyModel from "./CompanyModel";

export default  class JobModel {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  company: CompanyModel;

  constructor(
    id: string,
    title: string,
    type: string,
    location: string,
    description: string,
    salary: string,
    company: CompanyModel
  ) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.location = location;
    this.description = description;
    this.salary = salary;
    this.company = company;
  }

  // Static method to create a JobModel instance from a JSON object
  static fromJSON(json: any): JobModel {
    return new JobModel(
      json.id,
      json.title,
      json.type,
      json.location,
      json.description,
      json.salary,
      CompanyModel.fromJSON(json.company)
    );
  }

  // Method to convert a JobModel instance to a JSON object
  toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      type: this.type,
      location: this.location,
      description: this.description,
      salary: this.salary,
      company: this.company.toJSON(),
    };
  }
}
