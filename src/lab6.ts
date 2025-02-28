function sealed(constructor: Function) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function ToUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return typeof result == 'string' ? result.toUpperCase() : result;
    };

    return descriptor;
}

@sealed
class CarLab6 {
    private mark: string;
    private model: string;
    private year: number;
    private vin: string;
    private registrationNumber: string;
    private bodyType: string;
    private carClass: string;

    constructor (mark: string, model: string, year: number, vin: string, registrationNumber: string, bodyType: string, carClass: string) {
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.bodyType = bodyType;
        this.carClass = carClass;
    }

    public get getMark(): string {
        return this.mark;
    }

    public set setMark(mark: string) {
        this.mark = mark;
    }

    public get getModel(): string {
        return this.model;
    }

    public set setModel(model: string) {
        this.model = model;
    }

    public get getYear(): number {
        return this.year;
    }

    public set setYear(year: number) {
        this.year = year;
    }

    public get getVin(): string {
        return this.vin;
    }

    public set setVin(vin: string) {
        this.vin = vin;
    }

    public get getRegistrationNumber(): string {
        return this.registrationNumber;
    }

    public set setRegistrationNumber(registrationNumber: string) {
        this.registrationNumber = registrationNumber;
    }

    public get getBodyType(): string {
        return this.bodyType;
    }

    public set setBodyType(bodyType: string) {
        this.bodyType = bodyType;
    }

    public get getCarClass(): string {
        return this.carClass;
    }

    public set setCarClass(carClass: string) {
        this.carClass = carClass;
    }


    printVehicleInfo(): void {
        console.log(`Марка: ${this.getMark}`);
        console.log(`Модель: ${this.getModel}`);
        console.log(`Год выпуска: ${this.getYear}`);
        console.log(`VIN-номер: ${this.getVin}`);
        console.log(`Регистрационный номер: ${this.getRegistrationNumber}`);
        console.log(`Тип кузова: ${this.getBodyType}`);
        console.log(`Класс автомобиля: ${this.getCarClass}`);
    }
}

const testCar = new CarLab6("Cadillac", "XT5", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", "Кроссовер", "Бизнес");
testCar.printVehicleInfo();


(CarLab6.prototype as any).newProperty = 'New Value';


console.log('newProperty' in CarLab6.prototype);