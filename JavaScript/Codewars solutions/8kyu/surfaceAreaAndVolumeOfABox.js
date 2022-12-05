https://www.codewars.com/kata/565f5825379664a26b00007c/javascript
// Description:

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]



// My solution
function getSize(width, height, depth) {
  const area = 2*(width*height + width*depth + depth*height)
  const volume = width*height*depth
  return [area, volume]
}



