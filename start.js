// # Car factory

// Create a constructor function that can be used to create objects.

// The objects your factory creates should all have a "type" propety that always has the value "car".

// The factory should take in three parameters and save them to the created objects:
// - make
// - model
// - year

// Use your function to create 10 different cars. Store all of them inside a "garage" array.

function CarFactory (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = "car";
};
const  garage = [];

function addCar(make,model,year){
    const car = new CarFactory(make,model,year);
    garage.push(car);
};

addCar("AA1","BB1",1999);
addCar("AA2","BB2",1989);
addCar("AA3","BB3",1995);
addCar("AA4","BB4",1996);
addCar("AA4","BB4",1998);
addCar("AA5","BB5",1991);
addCar("AA6","BB6",1999);
addCar("AA7","BB7",1990);
addCar("AA8","BB8",1998);
addCar("AA9","BB9",2006);
addCar("AA10","BB10",2005);

console.log(garage)