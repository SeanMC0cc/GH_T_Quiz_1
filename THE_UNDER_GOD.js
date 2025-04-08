function calculateBMI() {
    const weight = parseFloat(document.getElementById('inputKG').value);
    const height = parseFloat(document.getElementById('inputM').value);
    const result = document.getElementById('result');
  
    if (!weight || !height || height === 0) {
      result.textContent = "Please enter valid weight and height.";
      result.style.color = 'red';
      return;
    }
  
    const bmi = weight / (height * height);
    let category = "";
  
    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9) category = "Normal weight";
    else if (bmi >= 25 && bmi <= 29.9) category = "Overweight";
    else if (bmi >= 30 && bmi <= 35) category = "Obese";
    else category = "Severely Obese";
  
    result.textContent = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
    result.style.color = 'black';
  }