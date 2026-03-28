let animal = {
  eat() {
    return "Eating";
  }
};

let dog = {
  bark() {
    return "Barking";
  }
};

let puppy = {
  cute: true
};

Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(puppy, dog);

console.log(puppy.eat());
console.log(puppy.bark());
//Eating Barking