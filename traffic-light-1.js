"use strict";
const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  // Trafik lambasının durumuna göre işlemleri yap
  if (currentState === "green") {
    trafficLight.state = "orange"; // Yeşilden turuncuya geç
  } else if (currentState === "orange") {
    trafficLight.state = "red"; // Turuncudan kırmızıya geç
  } else if (currentState === "red") {
    rotations++; // Dönüş sayısını artır
    trafficLight.state = "green"; // Kırmızıdan yeşile geç
  }
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
