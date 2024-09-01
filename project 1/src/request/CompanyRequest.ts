export default class CompanyRequest {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;

    constructor(
        name: string = "",
        description: string = "",
        contactEmail: string = "",
        contactPhone: string = ""
    ) {
        this.name = name;
        this.description = description;
        this.contactEmail = contactEmail;
        this.contactPhone = contactPhone;
    }
   
    static fromJSON(json: any): CompanyRequest {
        return new CompanyRequest(
            json.name,
            json.description,
            json.contactEmail,
            json.contactPhone
        );
    }
}