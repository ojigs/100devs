https://www.codewars.com/kata/5977618080ef220766000022/javascript
// Description:

// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
// Examples (Input -> Output)

// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")


// My solution
function usdcny(usd) {
  return (usd*6.75).toFixed(2) + ' Chinese Yuan'
}


// other solution
function usdcny(usd) {
  
  let cny = 6.75,
      summ = cny * usd,
      string = summ.toString(),
      array = string.split(''),
      array2 = [];
  
  array.forEach((item,index) => {
    
    if(item === '.'){
      
      array2 = array.slice(index, Infinity);
      array.splice(index, Infinity);
    } 
  })

  if(array2.length === 2) {
    array2.push(0);
  } else if (array2.length === 0) {
    array2.splice(0, Infinity, '.', 0, 0);
  }
  
  let finallyArray = array.concat(array2),
      finallyString = finallyArray.join(''),
      result;
  
  return result = `${finallyString} Chinese Yuan`;
