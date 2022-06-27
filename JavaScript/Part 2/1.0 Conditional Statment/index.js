let age = Number(window.prompt('Enter your age'));

if (age < 0) {     //this is how to write a conditional statement in JavaScript
  console.log(`${age} years old is invalid`);

}

else if (0 <  age && age <= 17) { //unlike python where inequality works this needs && to make it work! Python rules tho
  console.log(`${age} years old is a child`);

}

else if (18 <= age && age <= 60) {
  console.log(`${age} years old is an adult and a working class`);
}

else {
  console.log(`${age} years old is an adult and an elderly`);
}
