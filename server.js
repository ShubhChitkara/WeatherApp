const container = document.querySelector(".container");
const searchbar = document.querySelector("input");
const submitbtn = document.querySelector("button");
const img = document.createElement("img");
const imagebox = document.querySelector(".imagebox");
const box = document.querySelector(".box");
async function getgif(data) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=VWv6VBmqxOs1j6J9LgDTNEV8fCoEX4mp&s=${data}`,
    { mode: "cors" }
  );
  response.json().then(function (response) {
    img.src = response.data.images.original.url;
    box.appendChild(img);
  });
}
submitbtn.addEventListener("click", () => {
  if (searchbar.value) {
    //getgif(searchbar.value);
    box.style.display = "block";
  }
});
async function getCats() {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}/2017-02-03/?key=WGBYFWJ3BF2VYEDDKETW59QNL`,
    { mode: "cors" }
  );
  response.json().then(function (response) {
    img.src = response.data.images.original.url;
  });
}
