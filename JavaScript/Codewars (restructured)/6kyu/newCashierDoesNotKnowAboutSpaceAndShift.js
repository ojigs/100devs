// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript
// Description

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

// Strings
// Fundamentals


// My solution
function getOrder(input) {
  let menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
  let arr = []
  for (let i = 0; i < menu.length; i++) {
    arr.push(input.match(new RegExp(menu[i], 'gi')))
  }
  return arr.flatMap(e => e === null ? [] : e)
        .map(e => e[0].toUpperCase() + e.slice(1))
        .join(' ')
}


// other solution
const getOrder = input => {
  const menu = ['Burger','Fries','Chicken','Pizza','Sandwich','Onionrings','Milkshake','Coke'];
  let orders = input.match(new RegExp(menu.join('|'), 'gi'))
                    .map(item => item[0].toUpperCase() + item.slice(1))
                    .sort((a,b) => menu.indexOf(a) - menu.indexOf(b));
  return orders.join(' ');
};
