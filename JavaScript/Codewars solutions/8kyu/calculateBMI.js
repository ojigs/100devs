// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


//My solution 
function bmi(weight, height) {
  let bodyMassIndex = weight/height**2
  switch (true) {
      case (bodyMassIndex <= 18.5): {
        return 'Underweight'
      }
      case (bodyMassIndex <= 25.0): {
        return 'Normal'
      }
      case (bodyMassIndex <= 30.0): {
        return 'Overweight'
      }
      default: {
      return 'Obese'
      }
  }
}
console.log(bmi(80, 0.18)  //'Normal'


//other solutions
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
