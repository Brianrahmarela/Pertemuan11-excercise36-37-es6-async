let api = "https://6023a8ba6bf3e6001766b52c.mockapi.io/User";
console.log(api);

// let data = {
//   todo: "Belajar POST data"
// }

function postTodo(data){
  fetch(api, {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
  })
  //fungsi callback keadaan
  //.then() adalah aksi jika trpenuhi
  //then akan menjalankan fungsi calback resolved
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}
postTodo({
  name: "tes2"
})

// function getTodoByID(id){
//   fetch(`https://6023a8ba6bf3e6001766b52c.mockapi.io/`)
//   .then(result => result.json())
//   .then(data => console.log(data))
//   .then(err => console.log(err))
// }
// getTodoByID(6)