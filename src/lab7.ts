interface Auto {
    make: string;
    type: string;
    manufactureYear: number;
}
interface IDataStore {
    insertAuto(auto: Auto): void;
    retrieveAutos(): Auto[];
    orderByMake(): void;
}
class DataStore implements IDataStore {
    private autos: Auto[] = [];

    insertAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    retrieveAutos(): Auto[] {
        return this.autos;
    }

    orderByMake(): void {
        this.autos.sort((a, b) => a.make.localeCompare(b.make, 'ru'));
    }
}
class Auto {
    constructor(public type: string, public make: string) { }
}
class AutoService {
    private autos: Auto[];

    constructor(autos: Auto[]) {
        this.autos = autos;
    }

    filterAutosByTypeEnding(suffix: string): Auto[] {
        return this.autos.filter(auto =>
            auto.type.toLowerCase().endsWith(suffix.toLowerCase())
        );
    }
}
class TransportVehicle {
    private vehicleVin: string;
    private ownerFirst: string;
    private ownerLast: string;
    private regNumber: string;

    constructor(vehicleVin: string, ownerFirst: string, ownerLast: string, regNumber: string) {
        this.vehicleVin = vehicleVin;
        this.ownerFirst = ownerFirst;
        this.ownerLast = ownerLast;
        this.regNumber = regNumber;
    }

    public fetchVehicleDetails(): string {
        const info = {
            VIN: this.vehicleVin,
            Owner: `${this.ownerFirst} ${this.ownerLast}`,
            RegistrationNumber: this.regNumber
        };
        return JSON.stringify(info, null, 2);
    }
}