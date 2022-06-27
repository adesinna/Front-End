//While loop

count = 0;

while (count < 10) {
  count += 1
  console.log(count);

}

condition = true;
let number = 0;

while(condition) {

  if (number < 50) {
    number += 1;
    console.log(number);
  }
  else {
    condition = false;
  }
}

// do while loop  do something first then check the condition

let counter = 0;

do {
  counter += 1; // add this firsts
  console.log(counter);
} while(counter < 8) //after adding make it the condition of the while loop!



// foor  loop

//    initial; condition; operation
for (let i = 0; i < 10; i += 1) { // it prints initial condtion first
  console.log(i);
}
//    initial; condition; operation
for (let i = 20; i > 0; i -= 1) {
  console.log(i);
}

// continue and break

for (let i = 20; i < 40; i += 1) {

  if (i == 35) {
    break // this will escape the loop
  }
  console.log(i);
}


for (let i = 20; i < 40; i += 1) {

  if (i == 35) {
    continue // this will skip that point and continue
  }
  console.log(i);
}


// Nested loops

//Draw a rectangle

let row = Number(window.prompt('Enter the number of rows'));
let col = Number(window.prompt('Enter the number of columns'));
let sym = window.prompt('Enter your symbol');


for (let i = 1; i <= row; i += 1) {
  for (let j = 1; j <= col; j += 1 ) {
    document.getElementById('myLabel').innerHTML += sym;
  }
  document.getElementById('myLabel').innerHTML += '<br>';
}
