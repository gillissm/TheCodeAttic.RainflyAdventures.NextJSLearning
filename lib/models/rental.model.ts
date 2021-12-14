export enum RentalPeriod{
    Minutes = 'Minutes',
    Hour= 'Hours',
    Day = 'Day',
    Week = 'Week'
}

export interface RentalRates{
    cost: number;
    rentalLength: number;
    rentalPeriod: RentalPeriod;
}

export interface RentalModel{
    rentalType?: string;
    isAvailable: boolean;    
    ageRestriction: boolean;
    ageDetails: string;
    rentalName: string;
    rentalDescription: string;
    rentalImagePath?: string;
    rentalPeriods: RentalRates[];
}