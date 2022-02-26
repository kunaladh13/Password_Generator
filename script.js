// Getting the DOM Eleements
const pLength = document.getElementById("length");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const pNumber = document.getElementById("number");
const pSymbol = document.getElementById("symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

// Generating Character Codes

const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

// Password Generating Function

submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (lowerCase.checked) ? initialPassword += lCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";

    password.value = generatePassword(pLength.value, initialPassword)
});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

// Copy password to clipboard

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Please generate a password")
    }else {
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }
});