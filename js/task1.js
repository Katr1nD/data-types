function getYourAge(section) {
    let message = null;

    const inputValue = document.getElementById('currentAge').value;
    if (inputValue === '') return;
    const age = Number(inputValue);

    if (age < 0 || age > 125) {
        message = "It's a mystery to me who you are..";
    } else if (age >= 0 && age < 12) {
        message = "You're a child!";
    } else if (age < 18) {
        message = "You're a teenager";
    } else if (age < 60) {
        message = "You're an adult";
    } else if (age >= 60) {
        message = "You're a senior";
    } else {
        message = "Type in a valid number, please";
    }

    section.getElementsByClassName('message')[0].innerText = message;
}