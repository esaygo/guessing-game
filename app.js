
  var user = prompt ('What is your name?');
  alert ('Welcome, ' + user + ' I will ask you some yes/no questions, please answer with Y or N');
  confirm('Are you ready for the game?');
  console.log('The user\'s name is: ' + user);

  var answer1 = prompt('Is it wrong for a vegetarian to eat animal crackers?');
  console.log('The user answered question1 with ' + answer1);
  if ( answer1 === 'N'){
    alert('You are correct');
  }
  else {
    alert('I guess you are wrong. Here comes the next question');
  }

  var answer2 = prompt("Is it ok to shoot tourists during 'tourist season'?");
  console.log('The user answered question2 with ' + answer2);
  if ( answer2 === 'N'){
    alert('You are correct');
  }
  else {
    alert('I guess you are wrong. Here comes the next question');
  }

  var answer3 = prompt('Do you like to sing in the shower?');
  console.log('The user answered question3 with ' + answer3);
  if ( answer3 === 'Y'){
    alert('Good for you!');
  }
  else {
    alert('Maybe you should consider singing in the shower!');
  }

  if (answer1==="N" & answer2 === "N" & answer3 === "Y") {
    document.write('Congratulations, you are a genius!');
  }
  else {

    document.write('You are not a genius, but thank you for playing the game, '+ user);
  }
