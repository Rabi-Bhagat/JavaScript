class Car {
    #brand; // Private property
  
    constructor(brand, model) {
      this.model = model; // Public property
      this.#brand = brand; // Private property
    }

    drive() {
      console.log(`Driving a ${this.model}`);
    }

    #startEngine() {
      console.log("Engine started!");
    }
  
    // Public method to access the private method
    startCar() {
      this.#startEngine(); // Can access private method inside the class
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  
  console.log(myCar.model);  // Public property: accessible
  myCar.drive();             // Public method: accessible
  
//   console.log(myCar.#brand);  // Error: Private field '#brand' is not accessible
//   myCar.#startEngine();      // Error: Private method '#startEngine' is not accessible
  
  myCar.startCar();  // Works: Calls the private method via a public method
  