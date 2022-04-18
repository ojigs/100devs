// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    //Create a new Set object
    let newArr = new Set()
    //Convert the text string to lower case and create an array out of it
    let arr = text.toLowerCase().split('')
    //Check if the first occurence of an item in the array (using indexOf() method is not equal to the present index. If the item is a duplicate, this will return true and the code block under would be evaluated)
    arr.forEach((item, index, array) => {
        if (arr.indexOf(item) !== index) {
            //Add the particular item to the Set object. The Set object is designed to store only a unique value, so no duplicates here
            newArr.add(item)  
        }
    })
    return [...newArr].length
}

console.log(duplicateCount('indivisibility'))
