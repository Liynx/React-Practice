const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1001));

const user = {
    name: 'Liam',
    cities: ['Victoria', 'Nanaimo', 'Nelson'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city) => this.name + ' has lived in ' + city);
      
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5, 32, 8],
    multiplyBy: 2,

    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());