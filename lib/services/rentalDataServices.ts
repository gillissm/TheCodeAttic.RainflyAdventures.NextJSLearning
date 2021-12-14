import { RentalModel, RentalPeriod } from '../models/rental.model';

export function getAvailbleBoatRentals() {
    const currentRentals: RentalModel[] = [];

    currentRentals.push(
        {
            isAvailable: true,
            ageRestriction: true,
            ageDetails: "Over 18",
            rentalPeriods: [
                {
                    cost: 45.00,
                    rentalLength: 2,
                    rentalPeriod: RentalPeriod.Hour
                }
            ],
            rentalName: "Easy Going Boat",
            rentalDescription: "Medium speed boat, great for a peaceful cruise"
        }
    );

    currentRentals.push(
        {
            isAvailable: true,
            ageRestriction: true,
            ageDetails: "Over 30",
            rentalPeriods: [
                {
                    cost: 90.00,
            rentalLength: 30,
            rentalPeriod: RentalPeriod.Minutes,
                }
            ],
            rentalName: "Speed Monster",
            rentalDescription: "Highend Speed boat to feel like you a secret agent."
        }
    );
    currentRentals.push(
        {
            isAvailable: true,
            ageRestriction: true,
            ageDetails: "Over 16",
            rentalPeriods: [
                {cost: 12.00,
                    rentalLength: 1,
                    rentalPeriod: RentalPeriod.Hour
                },
                {
                    cost: 40.00,
                    rentalLength: 6,
                    rentalPeriod: RentalPeriod.Hour
                }
            ],
            rentalName: "Single Kayak",
            rentalDescription: "Create a most masterful adventure"
        }
    );
    currentRentals.push(
        {
            isAvailable: true,
            ageRestriction: true,
            ageDetails: "Over 16",
            rentalPeriods: [
                {cost: 36.00,
                    rentalLength: 1,
                    rentalPeriod: RentalPeriod.Hour
                },
                {
                    cost: 130.00,
                    rentalLength: 6,
                    rentalPeriod: RentalPeriod.Hour
                }
            ],
            rentalName: "Canoe for Three",
            rentalDescription: "Explorer new realms."
        }
    );

    return currentRentals;
}