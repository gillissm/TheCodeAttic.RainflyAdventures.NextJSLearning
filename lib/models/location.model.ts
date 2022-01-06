export interface AddressModel{
    addressLineOne: string;
    addressCity: string;
    addressState: string;
    addressZipCode: string;
}

export interface LocationModel extends AddressModel{
    locationName: string;
    phone: string;
}