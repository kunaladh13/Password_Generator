// Getting the DOM Eleements
const passwordLength = document.getElementById("length");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const passwordNumber = document.getElementById("number");
const passwordSymbol = document.getElementById("symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

// Generating Character Codes

const empty = "";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

// Password Generating Function

submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += upCase : "";
    (lowerCase.checked) ? initialPassword += lowCase : "";
    (passwordNumber.checked) ? initialPassword += number : "";
    (passwordSymbol.checked) ? initialPassword += symbol : "";

    password.value = generatePassword(passwordLength.value, initialPassword)});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

// Copy password to clipboardassword

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Please generate a password")
    }else {
        password.select();
        alert("Password has been copied to clipboard");
    }
});
