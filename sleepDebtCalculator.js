const getSleepHours = day => {
    enteredDay = day.toLowerCase();
    if(enteredDay === 'monday') {
      return 8;
    } else if(enteredDay === 'tuesday') {
      return 7;
    } else if(enteredDay === 'wednesday') {
      return 6;
    } else if(enteredDay === 'thursday') {
      return 5;
    } else if(enteredDay === 'friday') {
      return 9;
    } else if(enteredDay === 'saturday') {
      return 10;
    } else if(enteredDay === 'sunday') {
      return 11;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  const getIdealSleepHours = numberOfHours => {
    let idealHours = numberOfHours;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    console.log('Total hours sleeped this week: ' + getActualSleepHours());
    let idealSleepHours = getIdealSleepHours(8);
    if(actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if(actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.');
      console.log('Extra hours: ' + (actualSleepHours - idealSleepHours));
    } else if(actualSleepHours < idealSleepHours) {
      console.log('You got less sleep than needed.');
      console.log('Hours needed: ' + (idealSleepHours - actualSleepHours));
    }
  }
  
  calculateSleepDebt();
  
  
  