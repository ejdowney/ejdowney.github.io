var animal = {};

animal.species = 'dog';
animal['name'] = 'Pat';
animal.noises = [];

console.log(animal);

var noises = [];

noises[0] = 'bark!';
noises.push('ruff');
noises.unshift('meow');
noises[noises.length] = 'moo';

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal['noises'] = noises;

animal.noises.push('woof!');

console.log(animal);

var animals = [];

animals.push(animal);

console.log(animals);

var duck = { 
        species: 'duck',
        name: 'Jerome',
        noises: ['quack', 'honk', 'sneeze', 'woosh']
    
};

animals.push(duck);

console.log(animals);

var goat = {
    species: 'goat',
    name: 'Elliot',
    noises: ['AAAH!', 'Baa']
};

var falcon = {
    species: 'falcon',
    name: "Aaron",
    noises: ['Squawk!', 'SHREIK!']
};

animals.push(goat, falcon);
console.log(animals);

//friends is an array because arrays are like a list. 

var friends = [];

function randomFriend(animals) {
    return animals[Math.floor(Math.random() * animals.length)];
}

friends.push(randomFriend(animals).name);

console.log(friends);

animals[0].friends = friends;

console.log(animals[0]);

function search (animalName) {
    for (var i = 0; i < animals.length; i++) {
      if (animalName === animals[i].name) return animals[i];
    }
    return null;
}

function edit (animalName, obj) {
    for (var q = 0; q < animals.length; q++) {
        if (animalName === animals[q].name) {
            animals[q] = obj;
        }
    }
}

function remove(animalName) {
    for (var i = 0; i < animals.length; i++) {
        if (animalName === animals[i].name){
          animals.splice(i, 1);
        }
    }
}

function create (obj) {
    if (obj.species.length > 0 && obj.name.length > 0) {
        for (var i = 0; i < animals.length; i++){
                if (obj.name === animals[i].name){
                    return;
                }
            }
        animals.push(obj);
    }
}
