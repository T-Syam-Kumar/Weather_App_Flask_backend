const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(`/weather/${city}`);
        const data = await response.json();

        if (!response.ok) {
            alert("City not found");
            return;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".weather").classList.remove("hidden");

    } catch (error) {
        alert("Error fetching weather data");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});