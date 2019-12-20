document.getElementById("welcome").innerHTML = "Temperature Calculator";

function celsiusCal() {
    if (document.getElementById("celcius").value === "") {
        alert("Please input the celcius number");
    } else {
        let hasilF = Number(document.getElementById("celcius").value);
        document.getElementById("outputFahrenheit").innerHTML =
            (hasilF * 9 / 5) + 32;
        document.getElementById("outputKelvin").innerHTML = hasilF + 273.15;
    }
}

function fahrenheitCal() {
    if (document.getElementById("fahrenheit").value === "") {
        alert("Please input the fahrenheit number");
    } else {
        let hasilF = Number(document.getElementById("fahrenheit").value);
        document.getElementById("outputCelcius").innerHTML = (hasilF - 32) * 5 / 9;
        document.getElementById("outputKelvin").innerHTML =
            ((hasilF - 32) * 5) / 9 + 273.15;
    }
}

function kelvinCal() {
    if (document.getElementById("kelvin").value === "") {
        alert("Please input the kelvin number");
    } else {
        let hasilF = Number(document.getElementById("kelvin").value);
        document.getElementById("outputFahrenheit").innerHTML = ((hasilF - 273.15) * 9 / 5) + 32;
        document.getElementById("outputCelcius").innerHTML = hasilF - 273.15;
    }
}