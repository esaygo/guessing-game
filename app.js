
var counter = 0;
var counterNo = 0;
var randomNumber;
var userGuess;


  var user = prompt ('What is your name?');
  alert ('Welcome, ' + user + ' I will ask you some yes/no questions, please answer with Y or N');
  confirm('Are you ready for the game?');

  var answer1 = prompt('Is it wrong for a vegetarian to eat animal crackers?');

  // make it so that we accept 'n' or 'N' or 'no' or 'NO' as an acceptable response
  if (answer1.toUpperCase() === 'N' || answer1.toUpperCase() === 'NO'){
    alert('You are correct');
    counter ++;
  }
  else {
    alert('I guess you are wrong. Here comes the next question');
  }

  var answer2 = prompt("Is it ok to shoot tourists during 'tourist season'?");

  if ( answer2.toUpperCase() === 'N'|| answer2.toUpperCase() === 'NO'){
    alert('You are correct');
    counter ++;
  }
  else {
    alert('I guess you are wrong. Here comes the next question');
  }

  var answer3 = prompt('Do you like to sing in the shower?');

  if ( answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES'){
    alert('Good for you!');
    counter ++;
  }
  else {
    alert('Maybe you should consider singing in the shower!');
  }

  if (counter >= 2) {
    document.write(user + ', congratulations, you got ' + counter + ' correct answers!');
<<<<<<< HEAD
}
  else if (counter = 1) {
    document.write(user + ', you got only ' + counter + ' correct answers.');
=======
  }
  else if (counter = 1) {
    document.write(user + ', you got only ' + counter + ' correct answer.');
>>>>>>> wednesday2
  }
  else {
    document.write(user + ', sorry, you got ' + counter + ' correct answers.');
  }

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

<<<<<<< HEAD
document.write('<p>'+ user + ' ,you guessed in ' + counterNo + ' tries. The correct number is' +randomNumber + '</p>');
=======
document.write('<p>'+ user + ', you guessed in ' + counterNo + ' tries. The correct number is' +randomNumber + '</p>');
>>>>>>> wednesday2
