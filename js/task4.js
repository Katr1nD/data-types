import {
    isNumeric
} from "./task3";

const checkLeapYear = inputYear => {
    return inputYear % 400 === 0 || inputYear % 4 === 0 && inputYear % 100 !== 0;
}

function leapYear() {
    const inputYear = document.getElementById('enterYear').value;

    let message = !isNumeric(inputYear) ?
        "Invalid value!" :
        checkLeapYear(Number(inputYear)) ? "It's a leap year!" : "It isn't a leap year.";

    document.getElementsByClassName('message')[3].innerText = message;
}