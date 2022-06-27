// We build a simple hypotenus calculator

let adj = Number(window.prompt('Enter the adjacent length'));
let opp = Number(window.prompt('Enter the opposite length'));

let hyp;

hyp = Math.sqrt((Math.pow(adj, 2)) + (Math.pow(opp, 2)));
console.log(`The hypotenus is ${hyp}`);
