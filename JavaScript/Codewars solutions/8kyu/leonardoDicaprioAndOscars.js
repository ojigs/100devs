// https://www.codewars.com/kata/56d49587df52101de70011e4/javascript
// Description:

// You have to write a function that describe Leo:

// function leo(oscar) {

// }

// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"
// Fundamentals



// My solution
function leo(oscar){
  return oscar === 88 ? "Leo finally won the oscar! Leo is happy" :
          oscar === 86 ?  "Not even for Wolf of wallstreet?!" :
          oscar < 88 ? "When will you give Leo an Oscar?" :
          "Leo got one already!"
}


// other solution
function leo(oscar){
  switch (oscar){
    case 88:
      return "Leo finally won the oscar! Leo is happy";
      break;
    case 86:
      return  "Not even for Wolf of wallstreet?!";
      break;
    default:
      if(oscar<88) return "When will you give Leo an Oscar?";
      else return  "Leo got one already!";
  }
}
