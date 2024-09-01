export default class CompanyModel {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  
    constructor(
      name: string,
      description: string,
      contactEmail: string,
      contactPhone: string
    ) {
      this.name = name;
      this.description = description;
      this.contactEmail = contactEmail;
      this.contactPhone = contactPhone;
    }
  
    // Static method to create a CompanyModel instance from a JSON object
    static fromJSON(json: any): CompanyModel {
      return new CompanyModel(
        json.name,
        json.description,
        json.contactEmail,
        json.contactPhone
      );
    }
  
    // Method to convert a CompanyModel instance to a JSON object
    toJSON(): object {
      return {
        name: this.name,
        description: this.description,
        contactEmail: this.contactEmail,
        contactPhone: this.contactPhone,
      };
    }
  }
  