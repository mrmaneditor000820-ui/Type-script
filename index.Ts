
//     Interface 

interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Rehman",
  age: 20
};
console.log(user.age)

//    Pramative Types

// string

var myname:string = "Abdurehman"   
console.log(myname)

// Number 

var myage:number = 18
console.log(myage)

// Boleans 

let isPaid: boolean = true;

if (isPaid) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Arrays

let names: string[] = ["Ali", "Ahmed"];
console.log(names)

// objects

let obj : { name: string; age: number } = {
  name: "Rehman",
  age: 20
};
console.log(obj.name)


// functions

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2,5))

function greet(): void {
  console.log("Hello Rehman");
}
greet()