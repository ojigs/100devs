https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript
// Description

// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// Parameters and return of function:

// parameter (positive int or float, guaranteed) start_price_old (Old car price)
// parameter (positive int or float, guaranteed) start_price_new (New car price)
// parameter (positive int or float, guaranteed) saving_per_month 
// parameter (positive float or int, guaranteed) percent_loss_by_month

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

// Detail of the above example:

// end month 1: percent_loss 1.5 available -4910.0
// end month 2: percent_loss 2.0 available -3791.7999...
// end month 3: percent_loss 2.0 available -2675.964
// end month 4: percent_loss 2.5 available -1534.06489...
// end month 5: percent_loss 2.5 available -395.71327...
// end month 6: percent_loss 3.0 available 766.158120825...
// return [6, 766] or (6, 766)

// where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

// Note:

// Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

// nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
// nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]

// We don't take care of a deposit of savings in a bank:-)
// Fundamentals
// Mathematics



// My solution
function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth){
  let months = 0;
  let savings = 0;
  let currentPriceOld = startPriceOld;
  let currentPriceNew = startPriceNew;
  let percentLoss = percentLossByMonth / 100;

  while (savings + currentPriceOld < currentPriceNew) {
    months++;
    if (months % 2 === 0) {
      percentLoss += 0.005;
    }
    currentPriceOld *= (1 - percentLoss);
    currentPriceNew *= (1 - percentLoss);
    savings += savingPerMonth;
  }

  let moneyLeft = Math.round(savings + currentPriceOld - currentPriceNew);
  return [months, moneyLeft];
}


// other solution
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  // Case 1 : the old man has enough money
  
  //   We return 0 for the number of month and the difference between the two prices
  if(startPriceOld >= startPriceNew) {return [0, Math.round(startPriceOld - startPriceNew)];}
  
  
  // Case 2 : the old man doesn't have enough money
  
  // We initiate two variables, months for the number of months he's been waiting
  //   and total for the total money he has
  var months = 0, total = startPriceOld;
  
  // As long as the old man doesn't have enough money, we loop again for a new month
  while(total < startPriceNew) {
    // We add the savingperMonth for the new month
    total += savingperMonth;
    
    // We adjust the price of the old car
    total -= startPriceOld * percentLossByMonth / 100;
    
    
    // Applying the interest rate on the new car price and 
    startPriceNew -= startPriceNew * percentLossByMonth / 100;
    startPriceOld -= startPriceOld * percentLossByMonth / 100;
    
    // We increase the month counter
    months++;
    
    // Increasing the rate for all the even months (we use the increased rate immediately after month 1)
    //   So each time the numbers of passed months is odd, we increase the rate
    months % 2 !== 0 ? percentLossByMonth += 0.5 : percentLossByMonth;
    
  } // end while
  
  // Returning the number of months and what the old man has left after the purchase (rounded to units)
  return [months, Math.round(total - startPriceNew)];
    
}
