let count = 0;

document.getElementById('d-btn').onclick = function() {
  count = count - 1;
  document.getElementById('countLabel').innerHTML = count; // get elements in the html


}

document.getElementById('r-btn').onclick = function() {
  count = 0;
  document.getElementById('countLabel').innerHTML = count;


}

document.getElementById('i-btn').onclick = function() {
  count = count + 1;
  document.getElementById('countLabel').innerHTML = count;



}
