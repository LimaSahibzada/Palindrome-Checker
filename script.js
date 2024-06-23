document.getElementById("check-btn").addEventListener("click", function() {
    var input = document.getElementById("text-input").value.trim(); 
    var result = document.getElementById("result");
    
    if (input === "") {
        alert("Please input a value");
    } else {
        var cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        var reversedInput = cleanedInput.split("").reverse().join("");
  
        if (cleanedInput === reversedInput) {
            result.textContent = input + " is a palindrome";
            result.style.color = "black"; 
        } else {
            result.textContent = input + " is not a palindrome";
            result.style.color = "red"; 
        }
    }
  });