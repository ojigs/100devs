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

