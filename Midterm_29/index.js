fetch("data.json")
    .then(response => response.json())
    .then(myData => loadIndex(myData));

function loadIndex(myData) {
    var cowImg = document.getElementById("cowImg"); // Image of cow
    var pigImg = document.getElementById("goatImg"); // Image of pig
    var sheepImg = document.getElementById("sheepImg"); // Image of Sheep
    var chickenImg = document.getElementById("chickenImg"); // Image of chicken
    var cowtxt = document.getElementById("cowtxt"); // Cows
    var pigtxt = document.getElementById("goattxt"); // pig
    var sheeptxt = document.getElementById("sheeptxt"); // Sheep
    var chickentxt = document.getElementById("chickentxt"); // Chickens

    for (let i = 0; i < myData.animals.length; i++) {
        let speciesId = myData.animals[i].speciesId;
        let penTemp = myData.animals[i].penTemp;
        let penHumidity = myData.animals[i].penHumidity;
        let animalBlurb = myData.animals[i].animalBlurb;
        let url = myData.animals[i].url;
        let animalImg = document.createElement("div");
        animalImg.innerHTML = `<img src=${url} class="card-img-top" alt="Animal Image"></img>`;
        let animaltxt = document.createElement("p");
        animaltxt.innerHTML = `<p class="card-text"> <strong>${speciesId}</strong>: 
        <br> Ideal Pen Temperature: ${penTemp}
        <br> Ideal Pen Humidity: ${penHumidity} 
        <br> ${animalBlurb}
        </p>`;

        if (myData.animals[i].speciesId === "Bovine") {
            cowImg.appendChild(animalImg);
            cowtxt.appendChild(animaltxt);
        } else if (myData.animals[i].speciesId === "Porcine") {
            pigImg.appendChild(animalImg);
            pigtxt.appendChild(animaltxt);
        } else if (myData.animals[i].speciesId === "Ovine") {
            sheepImg.appendChild(animalImg);
            sheeptxt.appendChild(animaltxt);
        } else if (myData.animals[i].speciesId === "Galine") {
            chickenImg.appendChild(animalImg);
            chickentxt.appendChild(animaltxt);
        }
    }
    console.log("Main Success");


}
