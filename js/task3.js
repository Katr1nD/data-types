function checkRepeatedNum(num) {
    const numberArr = Array.from(String(num), Number);

    if (numberArr.every((symbol) => num % 10 === symbol)) {
        return "All numbers are the same";
    } else if (numberArr.some((symbol, i, arr) => num % 10 === symbol && i !== arr.length - 1)) {
        return "Some numbers are repeated";
    } else {
        return "All numbers are unique";
    }
}

/**
 * @param {string} num
 */
export function isNumeric(num) {
    return !isNaN(num) && (!!num || num !== 0) && num.trim() !== "";
}

function showMessageRepeatedNum() {
    const num = document.getElementById("repeatedNumeric").value;

    let message = isNumeric(num) ? checkRepeatedNum(Number(num)) : "Invalid number";

    document.getElementsByClassName('message')[2].innerText = message;
}