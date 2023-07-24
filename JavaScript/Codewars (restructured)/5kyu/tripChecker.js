https://www.codewars.com/kata/52ee76fdf5f13567000005ae/train/javascript
// Description

// A friend of yours is planning a trip across the country via train, but they can't read the train information! They've asked you to help and they want you to check if they can get from place to place on the rail network. You hit a snag while trying to help when you've found that the trains don't always return to a station they've departed from! That is to say that a train route might go from Station X to Station Y, but it might not go from Station Y to Station X.

// They love train trips so they don't care how many trains it takes as long as it's possible to reach their target destination.

// You've decided to write a program to help you with the job and the format you've decide to use is as follows:

// Ruby:

// check_trip( start, target, stations, station_links )

// Javascript:

// checkTrip( start, target , stationLinks )

// You want the method to return "Possible" if the trip is possible and "Impossible" if otherwise

// Example usages:

// Ruby:

// stations = ["ADL", "BRI", "MEL", "SYD"]

// links = {"ADL" => ["MEL"], "MEL" => ["ADL", "SYD"],  "SYD" => ["BRI"]}

// check_trip( "ADL", "BRI", stations, links ) # => "Possible"
// check_trip( "MEL", "BRI", stations, links ) # => "Possible"
// check_trip( "SYD", "ADL", stations, links ) # => "Impossible"

// Javascript:

// links = {"ADL" : ["MEL"], "MEL" : ["ADL", "SYD"],  "SYD" : ["BRI"]}

// checkTrip( "ADL", "BRI", links ) # => "Possible"
// checkTrip( "MEL", "BRI", links ) # => "Possible"
// checkTrip( "SYD", "ADL", links ) # => "Impossible"

// Note for Ruby: The Hash provided for the 'links' argument will always have default = []
// Algorithms
// Graph Theory


// My solution
function checkTrip(start, target, stationLinks) {
  // Queue for BFS
  const queue = [start];
  // Set to keep track of visited stations
  const visited = new Set();

  while (queue.length > 0) {
    const currentStation = queue.shift();
    visited.add(currentStation);

    if (currentStation === target) {
      return "Possible";
    }

    const nextStations = stationLinks[currentStation] || [];
    for (const nextStation of nextStations) {
      if (!visited.has(nextStation)) {
        queue.push(nextStation);
      }
    }
  }

  return "Impossible";
};


// other solution
function checkTrip(start, target, stationLinks) {
	let everBeen = [start]
	let to = stationLinks[start]
	let ck = false
	return recurFindLocation(everBeen,to,target,stationLinks,ck) ? 'Possible':'Impossible'
	
};

function recurFindLocation(everBeen,to,target,stationLinks,ck){
	if (to && to.length > 0 && to.includes(target))return true
	else if (to && to.length > 0){
		to = to.filter((locate)=>{
			if(!everBeen.includes(locate))return locate
		})
		to.forEach((locate)=>{
			everBeen.push(locate)
			if (recurFindLocation(everBeen,stationLinks[locate],target,stationLinks))return ck = true
		})	
	}
	return ck
}
