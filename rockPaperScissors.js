const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock', 'paper', 'scissors') {
      return userInput;
    } else {
      console.log('Error.');
    }
  };
  
  const getComputerChoice = () => {
    let rand = Math.floor(Math.random() * 3)
    if(rand === 0) {
      return 'rock';
    } else if(rand === 1) {
      return 'paper';
    } else if(rand === 2) {
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return 'tie';
    }
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'computer won';
      } else {
        return 'user won';
      }
    }
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'computer won';
      } else {
        return 'user won';
      }
    }
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'computer won';
      } else {
        return 'user won';
      }
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice('paper');
    console.log('User: ' + userChoice);
    let computerChoice = getComputerChoice();
    console.log('Computer: ' + computerChoice);
    console.log('Result: ' + determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  