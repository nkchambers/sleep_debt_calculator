//CODECADEMY JAVASCRIPT PRACTICE - sleep_debt_calculator Project 

// STARTING CODEBASE

// Task 1 - The first problem to solve is determining how many hours of sleep you got each night of the week.
// You can create a function that returns any given night’s number of hours of rest. 
// Instead of writing seven different functions (one for each day of the week), 
// let’s write one function with a parameter for the day.
// Create a function named getSleepHours with a single parameter named day.

// Task 2 - The function should accept a day as an argument and return the number of hours you slept that night.
// For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
// Use an if/else or switch statement to implement this.

// Task 3 - Test the function by calling it multiple times and printing the results to the console.
// You can remove the tests when you know your function works.

// Task 4 - Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
// Get the total sleep hours that you actually slept
// Get the ideal sleep hours that you prefer
// Calculate the sleep debt, if any.
// To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

// Task 5 - Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. 
// Add the results together and return the sum using an implicit return.

// Task 6 - To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
// Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. 
// Then return the idealHours multiplied by 7.

// Task 7 - Test your two new functions by calling them and printing the results to the console.

// Task 8 - Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
// Create a function named calculateSleepDebt with no parameters.
// Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
// Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

// Task 9 - Now that you have actualSleepHours and idealSleepHours, 
// you can write a few if/else statements to output the result to the console. 
// The function should fulfill this logic:
// If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

// Task 10 - To make this calculator more helpful, 
// add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().

// Task 11 - On the last line of the program, start the program by calling the calculateSleepDebt() function.

// Task 12 - For extra practice, try these:
// getActualSleepHours() could be implemented without calling getSleepHours(). 
// Use literal numbers and the + operator to rewrite getActualSleepHours(). 
// It should still return the total actual hours slept in the week.
// Some people need to sleep longer than others. 
// Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. 
// Update the call to getIdealSleepHours() in calculateSleepDebt() too.




// getSleepHours function - find hours slept per day
const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 10;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 7;
        case 'friday':
            return 9;
        case 'saturday':
            return 8;
        case 'sunday':
            return 8;
        default:
            return 0;
    }
};


// Testing getSleepHours function
console.log('Monday sleep hours: ', getSleepHours('monday'));
console.log('Tuesday sleep hours: ', getSleepHours('tuesday'));
console.log('Wednesday sleep hours: ', getSleepHours('wednesday'));
console.log('Thursday sleep hours: ', getSleepHours('thursday'));
console.log('Friday sleep hours: ', getSleepHours('friday'));
console.log('Saturday sleep hours: ', getSleepHours('saturday'));
console.log('Sunday sleep hours: ', getSleepHours('sunday'));

// Testing default (invalid entry) case 
console.log('Funday sleep hours: ', getSleepHours('funday'));


// getActualSleepHours function - 
// determine actual sleep hours for week by calling getSleepHours for each day of week and adding together
// const getActualSleepHours = () => 
//         getSleepHours('monday') +
//         getSleepHours('tuesday') +
//         getSleepHours('wednesday') +
//         getSleepHours ('thursday') +
//         getSleepHours('friday') +
//         getSleepHours('saturday') +
//         getSleepHours('sunday');

// Extra Practice - getActualSleepHours function without calling getSleepHours function
const getActualSleepHours = () => 
        8 +
        10 +
        8 +
        7 +
        9 +
        10 +
        9;

// Print acutal hours slept to the console
console.log('Total hours slept: ', getActualSleepHours());


// getIdealSleepHours function - determine ideal hours of sleep you want per night
// Extra Practice - Rewrite getIdealSleepHours so that you can pass argument 
// like getIdealSleepHours(8) where 8 is ideal hours per night
const getIdealSleepHours = (num) => {
    const idealHours = num || 8;
    return idealHours * 7;
};

// Print ideal hours slept to the console
console.log('Ideal hours slept: ', getIdealSleepHours(8));


// calculateSleepDebt function - determine sleep debt with previous functions
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${actualSleepHours - idealSleepHours} more hour(s) of sleep than needed.`);
    }
    else {
        console.log ('You should get some rest.');
    }
};

// Testing calculateSleepDebt function
calculateSleepDebt();