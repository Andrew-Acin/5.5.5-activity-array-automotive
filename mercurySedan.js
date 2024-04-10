// const { Vehicle } = require("./vehicleBaseClass.js");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage > 30000) {
            console.log("Service required");
            this.scheduleService = true;
        } else {
            console.log("No service required");
            this.scheduleService = false;
        }
    }

    start() {
        if (this.fuel > 0) {
            this.started = true;
            console.log("Engine started...!!!");
        } else {
            this.started = false;
            console.log("Engine cannot start...");
        }
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            this.passengers = num;
            console.log(`${this.model} Car ${this.make} loaded ${num} passengers.`);
        } else {
            console.log(`${this.model} Car ${this.make} is full.`);
        }
    }
}

// Test Cars

let car1 = new Car("Toyota", "Camry", "2023", "Red", "2000");
car1.start();
car1.loadPassenger(5);
car1.stop(); // You need to define the stop() method in the Car class
car1.checkService();

console.log(car1.make);

const car2 = new Car("Hyundai", "Palisade", "2022", "Black", "5000");
car2.start();
car2.loadPassenger(2);
car2.stop();
console.log(car2.make);

