let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
let mpk = .621;

console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeed));
console.log(typeof(distanceMars));
console.log(typeof(distanceMoon));
console.log(typeof(mpk));

//time to calculate the space mission. huzzah!
let milestoMars = (distanceMars*mpk);
let hourstoMars = (milestoMars/shuttleSpeed);
let daystoMars = (hourstoMars*24);

console.log(shuttleName + ' will take ' + daystoMars + ' to reach Mars');

let milestoMoon = (distanceMoon*mpk);
let hourstoMoon = (distanceMoon/shuttleSpeed);
let daystoMoon = (hourstoMoon*24)

console.log(shuttleName + ' will take ' + daystoMoon + ' to reach the Moon');
