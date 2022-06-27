// There are strings methods here to just like python string method

let name = 'shananarambo';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.slice(2, 7)); // last number is not always included and it starts from zero!
console.log(name.indexOf('o')); // you can get the index of a particular letter in the string
console.log(name.charAt(4)); // character at index 4
console.log(name.trim()); // this takes all the space in the string
console.log(name.replaceAll('a', 'b')); // this replaces all a by //


//String Method Chaining

let userName = 'shanana'

// make S upper case

let NewUser = userName.replace(userName.charAt(0), userName.charAt(0).toUpperCase());

console.log(NewUser);
