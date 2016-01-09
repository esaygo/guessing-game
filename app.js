
var counter = 0;
var counterNo = 0;
var randomNumber;
var userGuess;
var res1 = document.getElementById('a1');
var res2 = document.getElementById('a2');
var res3 = document.getElementById('a3');
var img1 = document.getElementById('cracker');
var img2 = document.getElementById('hunter');
var img3 = document.getElementById('shower');
var i = 0;

//[question, answer short, answer long, message right, message wrong, html result]
var questionData = [
  ['Is it wrong for a vegetarian to eat animal crackers?', 'N', 'NO', 'You are correct', 'I guess you are wrong. Here comes the next question', res1, './images/crack-me-up.jpg',img1],
  ['Is it ok to shoot tourists during \'tourist season\'?', 'N', 'NO,', 'You are correct', 'I guess you are wrong. Here comes the next question', res2,'./images/hunting.jpg',img2],
  ['Do you like to sing in the shower?', 'Y', 'YES', 'Good for you!', 'Maybe you should consider singing in the shower!', res3,'./images/emo-cat.jpg',img3]
];

  var user = prompt ('What is your name?');
  alert ('Welcome, ' + user + ' I will ask you some yes/no questions, please answer with Y or N');



function  questions() {
  var answer1 = prompt(questionData[i][0]);

  // make it so that we accept 'n' or 'N' or 'no' or 'NO' as an acceptable response
  if (answer1.toUpperCase() === questionData[i][1] || answer1.toUpperCase() === questionData[i][2]){
    // alert('You are correct');
    questionData[i][5].textContent = questionData[i][3];
    questionData[i][5].className = 'right';
    questionData[i][7].src = questionData[i][6];

    counter ++;
  }
  else {
    //alert('I guess you are wrong. Here comes the next question');
    questionData[i][5].textContent = questionData[i][4];
    questionData[i][5].className = 'wrong';
    questionData[i][7].parentNode.removeChild(questionData[i][7])
  }
}

//calling question functions
for (i = 0; i < questionData.length; i++) {
  questions();
}

  if (counter >= 2) {
    document.getElementById('score').innerHTML = user + ', congratulations, you got ' + counter + ' correct answers!';
}
  else if (counter = 1) {
    document.getElementById('score').innerHTML = user + ', you got only ' + counter + ' correct answers.';
  }
  else {
    document.getElementById('score').innerHTML = user + ', sorry, you got ' + counter + ' correct answers.';
  }

function random() {
  userGuess = prompt (user + ', I hope you are up for a number guessing game :). I am thinking of a number between 1 and 10, what is it?');

  //Generate a random number between 1 and 10
  randomNumber = Math.floor((Math.random() * 10) + 1);

  while (userGuess != randomNumber)  {
    if (userGuess > randomNumber) {
      userGuess = prompt ('Your number is too high.Keep guessing!');
      counterNo++;
    }
    else if (userGuess <randomNumber) {
      userGuess = prompt ('Your number is too low.Keep guessing!');
      counterNo++;
    }
  }
}
//calling last question
random();

document.getElementById('guess').innerHTML ='<p class="right">'+ user + ', you guessed in ' + counterNo + ' tries. The correct number is ' +randomNumber + '.</p>';
