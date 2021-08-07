let url = "https://api.jikan.moe/v3/anime/1/characters_staff"

async function getData() {
  try {
    const result = fetch(url)
    const fetchdata = await (await result).json()
    const data = fetchdata.characters

    console.log(data)
    data.forEach(element => {
      const character = document.getElementsByClassName('card-deck')
      character[0].innerHTML += `<a href="${element.url}" target="_blank"><div class="card mb-5" style="min-width: 12rem; min-height: 5rem;">
        <img src="${element.image_url}" class="card-img-top">
        <div class="card-body">
          <h6 class="card-title font-italic">${element.name}</h6>
          <p class="card-text font-italic"><small class="text-danger">Role:</small> ${element.role}</p></a>
        </div>
      </div>`
    });
  }
  catch (err) {
    console.log(err)
  }
}
