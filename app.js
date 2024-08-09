let password = document.getElementById("Password");
let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let specialCharacters = "!@#$%-&/?_";
let numbers = "1234567890"

const generatePassword = () => {
  let firstSmall = smallLetters.charAt(Math.round(Math.random() * 25));
  let secondSmall = smallLetters.charAt(Math.round(Math.random() * 25));
  let firstCapital = capitalLetters.charAt(Math.round(Math.random() * 25));
  let secondCapital = capitalLetters.charAt(Math.round(Math.random() * 25));
  let thirdCapital = capitalLetters.charAt(Math.round(Math.random() * 25));
  let fourthCapital = capitalLetters.charAt(Math.round(Math.random() * 25));
  let firstSpecialChar = specialCharacters.charAt(
    Math.round(Math.random() * 9)
  );
  let secondSpecialChar = specialCharacters.charAt(
    Math.round(Math.random() * 9)
  );
  let thirdSpecialChar = specialCharacters.charAt(
    Math.round(Math.random() * 9)
  );
  let firstNumber = numbers.charAt(
    Math.round(Math.random() * 9));
  
  let secondNumber = numbers.charAt(
    Math.round(Math.random() * 9));

    let thirdNumber = numbers.charAt(
        Math.round(Math.random() * 9));

        let fourthNumber = numbers.charAt(
            Math.round(Math.random() * 9));
  const passwordGenerated =
    firstCapital +
    firstSmall +
    secondSmall +
    secondCapital +
    firstNumber+
    thirdSpecialChar +
    thirdCapital +
    secondNumber+
    secondSpecialChar +
    fourthCapital +
    thirdNumber+
    firstSpecialChar+
    fourthNumber;
  password.innerHTML = passwordGenerated;
};
