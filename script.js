const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const resultDiv = document.getElementById("result");


addButton.addEventListener("click", ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
if(isNaN(num1) || isNaN(num2)){
    resultDiv.textContent = "Please enter valid numbers!";
    return;
}
const result = num1 + num2;
resultDiv.textContent = `Result: ${result}`;
});

subtractButton.addEventListener("click", ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
if (isNaN(num1) || isNaN(num2)){
    resultDiv.textContent = "Please enter valid numbers!"
    return;
}
const result = num1 - num2;
resultDiv.textContent = `Result: ${result}`;
});

