let personObject = {
    name: "Kate",
    age: 30,
}
function InfoPerson (person){
    console.log("Человека зовут "+person.name);
    console.log("Возраст "+person.age);
}
InfoPerson(personObject);
let Object2 = {
name: "Misha",
age: "45",
}
InfoPerson(Object2);
let Object3 ={
    num: "Sergey",
    age: 98,
}
InfoPerson(Object3);
