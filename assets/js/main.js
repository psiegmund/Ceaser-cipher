let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const inputText = document.getElementById('input-text');
const inputKey = document.getElementById('input-key');
const outputBlank = document.getElementById('output-blank');
const outputEncrypted = document.getElementById('output-encrypted');
const encryptRadio = document.getElementById('encrypt');

let doIt = () => {
    if (encryptRadio.checked) {
        encrypt();
        console.log('VERSCHLÜSSELN');
    }
    else {
        decode();
        console.log('ENTSCHLÜSSELN');
    }
}

let encrypt = () => {
    let input = inputText.value.toLowerCase();

    let result = "";
    for (let i = 0; i < input.length; i++) {
        for (let z = 0; z < alphabet.length; z++) {
            if (input.charAt(i) == alphabet[z])
                if ([z + Number(inputKey.value)] > 25) {
                    result += `${alphabet[z + Number(inputKey.value) - 26]}`;
                    outputEncrypted.innerHTML = result;
                    outputBlank.innerHTML = inputText.value;
                }
                else {
                    result += `${alphabet[z + Number(inputKey.value)]}`;
                    outputEncrypted.innerHTML = result;
                    outputBlank.innerHTML = inputText.value;
                };
        }
    }
}

let decode = () => {
    let input = inputText.value.toLowerCase();

    let result = "";
    for (let i = 0; i < input.length; i++) {
        for (let z = 0; z < alphabet.length; z++) {
            if (input.charAt(i) == alphabet[z])
                if ([z - Number(inputKey.value)] < 0) {
                    result += `${alphabet[z - Number(inputKey.value) + 26]}`;
                    outputEncrypted.innerHTML = result;
                    outputBlank.innerHTML = inputText.value;
                }
                else {
                    result += `${alphabet[z - Number(inputKey.value)]}`;
                    outputEncrypted.innerHTML = result;
                    outputBlank.innerHTML = inputText.value;
                };
        }
    }
};