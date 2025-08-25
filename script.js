//                            1-Misol
// function Animal (name, speed, limitAge){
//     this.name = name;
//     this.speed = speed;
//     this.limitAge = limitAge;
// };

// Animal.prototype.info = function(){
//     return `ism: ${this.name}, tezlik: ${this.speed}, yashash yili: ${this.limitAge}`;
// };
// const wolf = new Animal('wolf', 40, 10);
// console.log(wolf.info());
//                            2-Misol
// function student (name, course, years, unversity){
//     this.name = name;
//     this.course = course;
//     this.years = years;
//     this.unversity = unversity;
// };
// student.prototype.qolganYil = function(){
//     return`ismi: ${this.name}, kursi: ${this.course}-kurs, oqish: ${this.years} yil, oqish joyi: ${this.unversity}, oqish muddati: ${this.years - this.course}-yil qoldi`;
// };
// const student1 = new student('eshmat', 2, 4, 'sanat' );
// console.log(student1.qolganYil());
//                            3-Misol
// function person (name, age, currentYears){
//     this.name = name;
//     this.age = age;
//     this.currentYears = currentYears;
// };
// person.prototype.tugilganYil = function(){
//     return `ismi: ${this.name}, yoshi: ${this.age}, hozirgi yil: ${this.currentYears}, tug'ilgan yili: ${this.currentYears - this.age}`;
// };
// const person1 = new person('Feruz', 16, 2025);
// console.log(person1.tugilganYil());
//                           4-Misol
// function Employee (name, salary, workName){
//     this.name = name;
//     this.salary = salary;
//     this.workName = workName;
// };
// Employee.prototype.protcentKeshbek = function(kesh){
//     return `ISHCHI: Ismi: ${this.name}, oyligi: ${this.salary}$, ish: ${this.workName}, oylik+protcent: ${this.salary + (this.salary * kesh / 100)}$ `;
// };
// const emp = new Employee('eshmat', 2000, 'dasturlash');
// console.log(emp.protcentKeshbek(10));
//                           5-Misol
// function Rectangle (width, height){
//     this.width = width;
//     this.height = height;
// };
// Rectangle.prototype.getArea = function(){
//     return `tortburchakning yuzasi: ${this.width * this.height}`;
// };
// const yuza = new Rectangle(8, 7);
// Rectangle.prototype.getPerimetr = function (){
//     return `tortburchakning perimetiri: ${2 * (this.width + this.height)}`;
// };
// const perimetr = new Rectangle(8, 7);
// console.log(perimetr.getPerimetr());
// console.log(yuza.getArea());