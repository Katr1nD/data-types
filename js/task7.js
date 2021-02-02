function discount(sum) {
    if (200 <= sum < 300) {
        return `You have to pay ${sum * 0.97}`;
    } else if (300 <= sum < 500) {
        return `You have to pay ${sum * 0.95}`;
    } else if (500 <= sum) {
        return `You have to pay ${sum * 0.93}`;
    } else {
        return `You have to pay ${sum}`;
    }
}

function isNumeric(sum) {
    return !isNaN(sum) && (!!sum || sum !== 0) && sum.trim() !== "";
}

function finalDiscount() {

    const sum = document.getElementById('amountSpent').nodeValue;

    let message = isNumeric(sum) ? discount(Number(sum)) : "Invalid number";

    document.getElementsByClassName('message')[6].innerText = message;
}