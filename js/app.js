let cars = [];
const URL = "data/data.json";

const fetchCars = async () => {
    let response = await fetch(URL);
    cars = await response.json();
    updateCarList();
}


const updateCarList = () => {
    let carListdiv = document.querySelector("#carList");
    cars.map((car) => {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("row");
        let carCard = `
        <div class="col-5">
            <img src=${car.image} alt=${car.car_name} class="car-img">
        </div>
        <div class="col-7 car-description">
            <p class="car-title">${car.car_name}</p>
            <p>Model: ${car.car_model}</p>
            <p class="car-price">Rs. ${car.price}</p>
            <p>${car.desc}</p>
        </div>
        `
        cardDiv.innerHTML = carCard;
        carListdiv.appendChild(cardDiv);
    });
}


fetchCars();