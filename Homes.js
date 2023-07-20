class Home {
 
  constructor(numRooms, numBathrooms, squareFeet) {
    this.numRooms = numRooms;
    this.numBathrooms = numBathrooms;
    this.squareFeet = squareFeet;
  }

  getHomeDetails() {
    return `Rooms: ${this.numRooms}, Bathrooms ${this.numBathrooms}, Square Feet: ${this.squareFeet}`;
  }

  isLargeHouse() {
    if(this.numRooms > 5){
      return true;
    }
    else{
      return false;
    }
  }
}

//sub class
class SingleFamilyHome extends Home {
  constructor(numRooms, numBathrooms, squareFeet, yardSize) {
    super(numRooms, numBathrooms, squareFeet);
    this.yardSize = yardSize;
  }

  getHomeDetails() {
    return `${super.getHomeDetails()}, Yard Size: ${this.yardSize}`;
  }
}

//sub class
class Apartment extends Home {
  constructor(numRooms, numBathrooms, squareFeet, floorNumber) {
    super(numRooms, numBathrooms, squareFeet);
    this.floorNumber = floorNumber;
  }

  getHomeDetails() {
    return `${super.getHomeDetails()}, Floor Number: ${this.floorNumber}`;
  }
}

const home = new Home(6, 2, 1400);
console.log(home.getHomeDetails());


const home2 = new SingleFamilyHome(3, 1, 1000, 500);
console.log(home2.getHomeDetails());

const home3 = new Apartment(2, 1, 800, 3);
console.log(home3.getHomeDetails());

console.log(home.isLargeHouse());
console.log(home2.isLargeHouse());
console.log(home3.isLargeHouse());

