const container = document.querySelector(".container");
const searchbar = document.querySelector("input");
const submitbtn = document.querySelector("button");
const img = document.createElement("img");
const box = document.querySelector(".box");
const infobox=document.querySelector(".info");
const descriptionp=document.querySelector(".description");
const humidityp=document.querySelector(".humidity");
const windspeedp=document.querySelector(".windspeed");
const tempminp=document.querySelector(".tempmin");
const tempmaxp=document.querySelector(".tempmax");

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
    getData(searchbar.value);
    box.style.display = "flex";
  }
});
async function getData(data) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}/2017-02-03/?key=WGBYFWJ3BF2VYEDDKETW59QNL`,
    { mode: "cors" }
  );
  
  response.json().then(function (response) {
    console.log(response.days[0]);
    descriptionp.innerHTML=`Brief:${response.days[0].description}`;
    humidityp.innerHTML=`Humidity:${response.days[0].humidity}`;
    windspeedp.innerHTML=`Windspeed:${response.days[0].windspeed}`;
    tempminp.innerHTML=`Temperature minimum:${response.days[0].tempmin}`;
    tempmaxp.innerHTML=`Temperature Maximum:${response.days[0].tempmax}`;
    getgif(response.days[0].icon);
    
  });
}
