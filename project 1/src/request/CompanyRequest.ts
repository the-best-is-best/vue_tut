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

    // toJson(): object {
    //     return {
    //         name: this.name,
    //         description: this.description,
    //         contactEmail: this.contactEmail,
    //         contactPhone: this.contactPhone
    //     }
    // }
}