"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));

let sequence = [
    TrafficLight.Green,
    TrafficLight.Yellow,
    TrafficLight.Red,
    TrafficLight.Green,
    TrafficLight.Red
];

for (let color of sequence) {
    switch (color) {
        case TrafficLight.Red:
            console.log("🔴 STOP — Wait for green");
            break;
        case TrafficLight.Yellow:
            console.log("🟡 SLOW DOWN — Prepare");
            break;
        case TrafficLight.Green:
            console.log("🟢 GO — Clear to proceed");
            break;
        default:
            console.log("⚠️ Unknown signal");
            break;
    }
}
