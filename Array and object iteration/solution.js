// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
     for (zero of (dairy)) {
        console.log(zero);
        
    }
}
logDairy();


// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (one of Object.keys(bird)) {
        console.log(`${one}: ${bird[one]}`);
        
    }
}
birdCan();


// Task 3
function animalCan() {
    for (two in bird) {
        console.log(`${two}: ${bird[two]}`);
    }
}
animalCan();
