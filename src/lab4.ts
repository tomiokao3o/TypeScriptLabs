import {Transport} from "./lab3";

const owner1 = new Transport.OwnerClass(
    "Беннедикт",
    "Деля",
    "Коко",
    "1999-11-11",
    Transport.TypeOfDocument.passport,
    '1234',
    '567890'
);

const car1 = new Transport.CarCl(
    "Toyota",
    "Camry",
    2020,
    '123456789',
    '123',
    owner1,
    Transport.BodyType.sedan,
    Transport.CarClass.Business
);

car1.printVehicleInfo();
owner1.printOwnerInfo();