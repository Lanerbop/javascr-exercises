const convertToCelsius = function(temp) {
  const realCel = (temp - 32) * 5 / 9;
  return Math.round(realCel * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  const realFahr = (temp * 9 / 5 + 32);
  return Math.round(realFahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
