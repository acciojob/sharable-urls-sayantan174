// your code here
const h3 = document.getElementById("url");
h3.innerText = window.location.href;

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  h3.innerText = window.location.href;
  if (form["name"].value !== "" && form["year"].value === "") h3.innerText += `?name=${form["name"].value}`;
  if (form["year"].value !== "" && form["name"].value === "") h3.innerText += `?year=${form["year"].value}`;
  if(form["year"].value !== "" && form["name"].value !== "")
  h3.innerText += `?name=${form["name"].value}&year=${form["year"].value}`
});