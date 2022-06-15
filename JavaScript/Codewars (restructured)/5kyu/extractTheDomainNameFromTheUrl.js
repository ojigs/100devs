// Description:

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


//my solution (and it was an abracadabra one :D)
//First time attempting a 5kyu
function domainName(url){
  let arrayFromUrl = url.split('/')
  if (arrayFromUrl.length >= 3 && arrayFromUrl[2] !== '') {
    return arrayFromUrl[2].replace('www.', '').split('.')[0]
  } else {
    return arrayFromUrl[0].replace('www.', '').split('.')[0]
  }
}


//other solutions
function domainName(url){
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}

