/* Lakukan pengambilan data yang berasal dari API berikut “https://api.github.com/users/<github_username>”

-Gunakan promise utk mendapatkan data
-Tampilkan data menggunakan DOM minimal nama, gambar profile, bio, followers, followings
-Tampilkan serapih mungkin menggunakan CSS */

const getDataAPI = () => {
  const api = "https://api.github.com/users/Brianrahmarela";
  fetch(api)
  // console.log(api);
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let cards = `<img src="${data.avatar_url}"/><br><h1>${data.name}</h1>${data.bio}<br>Followers: ${data.followers}<br>Following: ${data.following}`;

      const containerTampung = document.querySelector('.container');
      containerTampung.innerHTML = cards;
      
    })
    .catch((error) => console.log("error", error));
  };
  
  getDataAPI();

