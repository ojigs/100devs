// https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/javascript
// Description

// A traveling salesman has to visit clients. He got each client's address e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

// The basic zipcode format usually consists of two capital letters followed by a white space and five digits. The list of clients to visit was given as a string of all addresses, each separated from the others by a comma, e.g. :

// "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

// To ease his travel he wants to group the list by zipcode.
// Task

// The function travel will take two parameters r (addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

// zipcode:street and town,street and town,.../house number,house number,...

// The street numbers must be in the same order as the streets where they belong.

// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"
// Examples

// r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

// travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

// travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

// travel(r, "NY 5643") --> "NY 5643:/"

// Note for Elixir:

// In Elixir the empty addresses' input is an empty list, not an empty string.
// Note:

// You can see a few addresses and zipcodes in the test cases.
// Fundamentals
// Strings

// My solution
function travel(r, zipcode) {
  if (zipcode === "") return ":/";
  const matchingAddresses = r
    .split(",")
    .filter((addr) => addr.trim().endsWith(zipcode))
    .map((addr) => addr.trim().split(" ").slice(1, -2).join(" "));
  const houseNumbers = r
    .split(",")
    .filter((addr) => addr.trim().endsWith(zipcode))
    .map((addr) => addr.trim().split(" ")[0]);
  return houseNumbers.length > 0
    ? `${zipcode}:${matchingAddresses.join(",")}/${houseNumbers.join(",")}`
    : `${zipcode}:/`;
}

// other solution
function travel(r, zipcode) {
  const addressList = r.split(",");

  const streets = [];
  const numbers = [];

  addressList.forEach((address) => {
    let zip = address.substring(address.length - 8, address.length);
    if (zip === zipcode) {
      let number = address.substring(0, address.indexOf(" ") + 1);
      let street = address.substring(address.indexOf(" "), address.length - 8);

      streets.push(street.trim());
      numbers.push(number.trim());
    }
  });
  return `${zipcode}:${streets.join(",")}/${numbers.join(",")}`;
}
