const VehicleModule = require("./vehicle").Vehicle



class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

checkService((mileage) => {
    if (this.mileage > 30000) {
        return this.mileage = true;
        console.log("service required");
    } 
})

start(() => {
    if (this.fuel > 0) {
        return this.started = true;
        console.log("engine started...!!!");
    } else {
        return this.started = false;
        console.log("engine cannot start...");
    }
})

loadPassenger((num) => {   
    if (this.passengers < this.maximumPassengers) {
        this.passengers = num;
        return this.passengers;
    }   else {
        console.log(this.model + "Car" + this.make + " is full")
    }
})



//Test Cars

let car1 = new Car("Toyota", "Camry", "2023", "Red", "2000")

car1.start()
car1.loadPassenger(5)
car1.stop()
car1.checkService()

console.log(car1.make)


const car2 = new Car("Hyundai", "Palisade", "2022", "Black", "5000" )
console.log(car2.make)



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
