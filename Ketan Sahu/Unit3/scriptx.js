function checkAge() {
    const age = document.getElementById('ageInput').value;
    const resultDiv = document.getElementById('result');
    
    if (age === '') {
        resultDiv.textContent = '⚠️ Please enter an age';
        resultDiv.className = 'result-box error';
    } else if (age < 18) {
        resultDiv.textContent = `✅ You are ${age} years old - Minor`;
        resultDiv.className = 'result-box success';
    } else if (age >= 18 && age < 60) {
        resultDiv.textContent = `✅ You are ${age} years old - Adult`;
        resultDiv.className = 'result-box success';
    } else {
        resultDiv.textContent = `✅ You are ${age} years old - Senior`;
        resultDiv.className = 'result-box success';
    }
}