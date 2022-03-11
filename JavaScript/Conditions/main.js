//CHAPTER 3: ADD CONDITIONS

//Following day
//Program asks for user input; program alerts the day after; program accomodates for invalid input
//Array would be nice, but we use Switch case here
const day = prompt("What day is today?").toLowerCase();
switch (day) {
    case "monday": {
        alert("Tomorrow is Tuesday");
        break;
    }
    case "tuesday": {
        alert("Tomorrow is Wednesday");
        break;
    }
    case "wednesday": {
        alert("Tomorrow is Thursday");
        break;
    }
    case "thursday": {
        alert("Tomorrow is Friday");
        break;
    }
    case "friday": {
        alert("Tomorrow is Saturday");
        break;
    }
    case "saturday": {
        alert("Tomorrow is Sunday");
        break;
    }
    case "sunday": {
        alert("Tomorrow is Monday");
        break;
    }
    default: alert("This is not a valid day of the week. Try again")
}

//Number Comparison
//Program accepts two numbers; program compares numbers; program displays a message
//if conditional seems easier here, but will also analyse switch
const num1 = Number(prompt("Input a valid number"))
const num2 = Number(prompt("Input a valid number"))
switch (true) {
    case num1 == num2: {
        alert("Both numbers are equal");
        break;
    }
    case num1 > num2: {
        alert("First number is greater");
        break;
    }
    case num1 < num2: {
        alert("Second number is greater");
        break;
    }
    default: alert("Invalid argument")
}

//Final Values
//Evaluate the program manually and see how your result chesks out with that from the program
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
alert(nb1);
alert(nb2);
alert(nb3);

//Number of days in a month
const month = Number(prompt("Input number representation of the month of the year"));
switch (true) {
    case month == 1: {
        alert("There are 31 days in the month of January");
        break;
    }
    case month == 2: {
        alert("There are 28 days in the month of February");
        break;
    }
    case month == 3: {
        alert("There are 31 days in the month of March");
        break;
    }
    case month == 4: {
        alert("There are 30 days in the month of April");
        break;
    }
    case month == 5: {
        alert("There are 31 days in the month of May");
        break;
    }
    case month == 6: {
        alert("There are 30 days in the month of June");
        break;
    }
    case month == 7: {
        alert("There are 31 days in the month of July");
        break;
    }
    case month == 8: {
        alert("There are 31 days in the month of August");
        break;
    }
    case month == 9: {
        alert("There are 30 days in the month of September");
        break;
    }
    case month == 10: {
        alert("There are 31 days in the month of October");
        break;
    }
    case month == 11: {
        alert("There are 30 days in the month of November");
        break;
    }
    case month == 12: {
        alert("There are 31 days in the month of December");
        break;
    }
    default: alert("Input a valid number representation");
}

//Following Second
let time = prompt("Specify the time in this format", "00h00m00s")
let hour = Number(time.substring(0,2));
let minute = Number(time.substring(3,5));
let seconds = Number(time.substring(6,8));
seconds++;
if (seconds > 59) {
    minute++;
    seconds = 0;
    if (minute > 59) {
        hour++;
        minute = 0;
        seconds = 0;
        if (hour > 23) {
            hour = 0;
            minute = 0;
            seconds = 0;
        }
    }
}
let newTime = `${hour}h${minute}m${seconds}s`;
alert(newTime)
