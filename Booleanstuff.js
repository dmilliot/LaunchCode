let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let ComputerStatusCode = 200;
let shuttleSpeed = 15000;
// Engine Check
if (engineIndicatorLight === "green") {
    console.log('engines have started');
} else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
} else {
    console.log("engines are off");
}
// Crew Status Check
if (crewStatus) {
    console.log("Crew Ready");
} else {
    console.log("Crew not Ready");
}
// Computer Status Check
if (ComputerStatusCode === 200) {
    console.log ("Please stand by, Computer is rebooting.");
} else if (ComputerStatusCode === 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline");
}
// Shuttle Speed Alert
if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reaches!");
}    else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable Speed");
}
// Fuel Status
let fuelLevel = 18000;
let engineTemperature = 2500;
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot!");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank, Engines Good");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines Good");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines Good");
} else {
    console.log("Fuel and engine status pending")
}
// Command Override
let commandOverride = true;
if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Clear to Launch");
}
