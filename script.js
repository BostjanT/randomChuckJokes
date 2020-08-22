const displayJokes = document.getElementById("showJokes");

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function showJokes() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  displayJokes.innerHTML = `
  <h2 id='showJokes'>${data.value}</h2>
  `;

  console.log(data);
}

showJokes();
