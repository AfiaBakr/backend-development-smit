//  const secreteNum = 5;

//  let computerNum =Math.random()+ 6

// object

const car = {
  type: "Fiat",
  model: 500,
  color: "white"
};

console.log ("This the Cars properties ", car);
console.log ("This the Cars Type ", car.type);
console.log ("This the Cars Model ", car.model);
console.log ("This the Cars Color ", car.color);

const person = {};

person.firstName="John", 
person.lastName="Doe", 
person.age=50, 
person.eyeColor="blue"

console.log("This person name is " + person.firstName +""+ person.lastName);
console.log("This person age is " + person.age);
console.log("This person eye color is " + person.eyeColor);

const book ={
    title:"Harry Porter",
    auther:"J.K. Rowling",
    page: 300
}
console.log(book["title"] + " has " + book["page"] +" and its auther name is "+book.auther)


const person1 = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

const student ={
    name: "Ali",
    class: 9,
    marks:{
        chemistry:78,
        math:88,
        engish:56,
        urdu: 76
    },
    totalmarks:400,
    studentPercentsge: function(){
        let sum = this.marks.chemistry+this.marks.engish+this.marks.math+this.marks.urdu
        let formula= sum/ this.totalmarks *100

        return "The Student "+ this.name +" is gets score " + formula + " %"
    }
};
console.log(student.studentPercentsge())