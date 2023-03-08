fetch("data.json")
    .then(response => response.json())
    .then(myData => loadPage2(myData));

function loadPage2(myData) {
    var misterImg = document.getElementById("misterImg"); // Image of mister
    var cameraImg = document.getElementById("cameraImg"); // Image of camera
    var surgeImg = document.getElementById("surgeImg"); // Image of sound sensor
    var sensorImg = document.getElementById("sensorImg"); // Image of temperature/humidity sensor
    var misterTxt = document.getElementById("misterTxt"); // Mister
    var cameraTxt = document.getElementById("cameraTxt"); // Camera
    var surgeTxt = document.getElementById("surgeTxt"); // Sound Sensor
    var sensorTxt = document.getElementById("sensorTxt"); // Temperature/Humidity Sensor

    for (let i = 0; i < myData.products.length; i++) {
        let productId = myData.products[i].productId;
        let price = myData.products[i].price;
        let productBlurb = myData.products[i].productBlurb;
        let url = myData.products[i].url;
        let productImg = document.createElement("div");
        productImg.innerHTML = `<img src=${url} class="card-img-top" alt="Animal Image"></img>`;
        let productTxt = document.createElement("p");
        productTxt.innerHTML = `<p class="card-text"> <strong>${productId}</strong>: 
        <br> Price: ${price}
        <br> ${productBlurb}
        </p>`;

        if (myData.products[i].productId === "Fan Mister") {
            misterImg.appendChild(productImg);
            misterTxt.appendChild(productTxt);
        } else if (myData.products[i].productId === "Livestock Camera System") {
            cameraImg.appendChild(productImg);
            cameraTxt.appendChild(productTxt);
        } else if (myData.products[i].productId === "Surge Protector") {
            surgeImg.appendChild(productImg);
            surgeTxt.appendChild(productTxt);
        } else if (myData.products[i].productId === "Temperature and Humidity Sensor") {
            sensorImg.appendChild(productImg);
            sensorTxt.appendChild(productTxt);
        }
    }
    console.log("Page 2 Success");
}