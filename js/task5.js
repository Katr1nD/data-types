function isPalindrom(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return "Unfortunately it isn't palindrom";
        }
    }

    return "It's definitely palindrom ";
}

function showMessagePalindrom() {

    let inputValue = document.getElementById('enterPal').value;

    const excludings = [' ', ',', '.', '-', ';'];
    let message = isPalindrom(
        inputValue
        .toLowerCase()
        .split('')
        .filter(x => !excludings.includes(x)));

    document.getElementsByClassName('message')[4].innerText = message;
}