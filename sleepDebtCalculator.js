const getSleepHours = (day) => {

    switch (day) {
      case 'Monday':
        return 4;
      case 'Tuesday':
        return 6;
      case 'Wednesday':
        return 5;
      case 'Thursday':
        return 8;
      case 'Friday':
        return 8;
      case 'Saturday':
        return 10;
      case 'Sunday':
        return 7;
    }
  };
  
  
  const getActualSleepHours = () => 
    4 + 6 + 5 + 8 + 8 + 10 + 7;
  
  
  const getIdealSleepHours = idealHours => 
    idealHours * 7;
  ;
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep, Keep it up!');
    } else if (actualSleepHours > idealSleepHours){
      console.log(`Hey, you got ${actualSleepHours - idealSleepHours} hours more sleep than needed, You are being lazy!`);
    } else {
      console.log(`Hey, you need to get some rest because you got ${idealSleepHours - actualSleepHours} hours less sleep than you needed.` );
    }
  };
  
  calculateSleepDebt();  
  