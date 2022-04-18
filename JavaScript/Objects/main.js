//Return Object from array

//getData function gets three parameters, and each parameter is a array containing values for the number of sales each day, number of reviews, and number of likes respectively. For exaample:
salesArray = [['20190401', 34], ['20190402', 23], ['20190403', 29]]
reviewArray = [['20190401', 3], ['20190402', 0], ['20190403', 1]]
likesArray = [['20190401', 98], ['20190402', 102], ['20190403', 125]]
//We are to return an object containing separate values for the sum of all sales, reviews and likes

function GetData(sales, reviews, likes) {
    function reduceData(arr) {
        return arr.map((item, index) => item[1]).reduce((sum, current) => sum + current, 0)
    }
    
    this.sales = reduceData(sales)
    this.reviews = reduceData(reviews)
    this.likes = reduceData(likes)
    return this

}

let objData = new GetData(salesArray, reviewArray, likesArray)

console.log(objData) // -> {sales: 86, reviews: 4, likes: 325}



//What if we want to add a new parameter to the function, say profits array?
profitArray = [['20190401', 23500], ['20190402', 18750], ['20190403', 20150]]

//We refractor our GetData function to include a method that reduces the array of parameters to a single value

function GetData(sales, reviews, likes) {
    this.reduceData = arr =>  arr.map((item, index) => item[1]).reduce((sum, current) => sum + current, 0)
    
    this.sales = this.reduceData(sales)
    this.reviews = this.reduceData(reviews)
    this.likes = this.reduceData(likes)

    return this
}
let objData = new GetData(salesArray, reviewArray, likesArray)

GetData.prototype.profits = objData.reduceData(profitArray)

console.log(objData.profits)  // -> 62400
