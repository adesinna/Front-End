// It is possible to know whether a button or radio button has been selected

document.getElementById('myButton').onclick = function() {

  const myCheckBox = document.getElementById('myCheckBox'); // for easy readablity!
  const masterBtn = document.getElementById('masterBtn');
  const visaBtn = document.getElementById('visaBtn');
  const verveBtn = document.getElementById('verveBtn');


  if (myCheckBox.checked) {

    if (masterBtn.checked) {
      console.log('You are subcribed with master card payment');

    }

    else if (visaBtn.checked) {
      console.log('You are subcribed with visa card payment');

    }

    else if (verveBtn.checked) {
      console.log('You are subcribed with verve card payment');

    }

    else {
      console.log('You did not select payment mode');
    }
  }

  else {
    console.log('You are not subcribed');
  }

}
