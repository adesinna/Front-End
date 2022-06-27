// There is no switch in python but we have it here !

let score = Number(window.prompt('Enter your grade'));

switch (true) {
  case score >= 90:  // start from the top
    console.log('Grade is A');
    break;

  case score >= 80:
  console.log('Grade is B');
  break;

  case score >= 60:
  console.log('Grade is C');
  break;

  case score >= 50: // this is like elif in python
  console.log('Grade is D');
  break;  // the break must be there

  default:   // This is like else
  console.log(`${score} is failed`);

}


// && and
// || or
// ! not
