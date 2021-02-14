const getApiFlag = async () => {
  const api = "https://restcountries.eu/rest/v2/all";
  let response = await fetch(api);
  console.log(response);
  let result = await response.json();
  console.log(result);
  result.map(item => {
        console.log(item);
        // let cards = `<img src="${result.flag}"/><br><h1>${result.name}</h1>`;
        let getContainer = document.querySelector('.container');
        console.log(item);

        let card = document.createElement('div');

        card.innerHTML = `
        <img style="height: 150px; width: 200px"; src="${item.flag}"/>
        <span>${item.name}</span>
        `
        card.classList.add("card");

        // card.add("card");
        getContainer.appendChild(card)

      })
};

getApiFlag();
