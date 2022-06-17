//Fetch using ombd API to field movie data
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  // console.log(choice)

  const url = key + choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.Poster;
        document.querySelector('#title').innerText = data.Title;
        document.querySelector('#year').innerText = data.Year;
        document.querySelector('h3').innerText = data.Plot;
        document.querySelector('#actors').innerText = data.Actors;
        if (data.BoxOffice === undefined) {
          document.querySelector('#box-office').innerText = 'N/A'
        }
        else {
          document.querySelector('#box-office').innerText = data.BoxOffice
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//Handle response and error for all data response types
function handleResponse(res) {
  let contentType = res.headers.get('content-type')
  if (contentType.includes('application/json')) {
    return handleJSONResponse(res)
  } else if (contentType.includes('text/html')) {
    return handleTextResponse(res)
  } else {
    throw new Error (`Sorry, content-type ${contentType} is unknown`)
  }
}

//Handle error for json response object. I have introduced this function so that if there is an error receiving the response, I can easily know from the .catch handler exactly what the error is. With this I can have a start on how to go about fixing it.
function handleJSONResponse(res) {
  return res.json()
    .then(json => {
      if (res.ok) {
        return json
      } else {
        return Promise.reject({}, json, {
          status: res.status,
          statusText: res.statusText
        })
      }
    })
}

//handle error for XML request
function handleTextResponse(res) {
  return res.text()
    .then(text => {
      if (res.ok) {
        return text
      } else {
        return Promise.reject({}, text, {
          status: res.status,
          statusText: res.statusText,
          err: text
        })
      }
    })
}
