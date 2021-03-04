(function () {
  window.addEventListener("DOMContentLoaded", (event) => {});
});
console.log("hello");
let users = [];
fetch("https://randomuser.me/api/?results=100") // Promise
  .then((resp) => resp.json()) // unsorted array of user object
  .then((json) => {
    users = json.results;
    console.log(users);
  })
  .catch((err) => {
    console.log("An err has occured while trying to fetch random users");
  });