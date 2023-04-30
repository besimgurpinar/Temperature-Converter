const convertButton = document.getElementById('convert');
const resultText = document.getElementById('result-text');

convertButton.addEventListener('click', () => {
  const temperatureInput = document.getElementById('temperature');
  const unitSelect = document.getElementById('unit');
  
  if (unitSelect.value === 'celsius') {
    const fahrenheitTemp = (temperatureInput.value * (9/5)) + 32;
    resultText.textContent = `${temperatureInput.value}°C is equal to ${fahrenheitTemp.toFixed(2)}°F.`;
  } else if (unitSelect.value === 'fahrenheit') {
    const celsiusTemp = (temperatureInput.value - 32) * (5/9);
    resultText.textContent = `${temperatureInput.value}°F is equal to ${celsiusTemp.toFixed(2)}°C.`;
  }
});