function fitFigures(inputCircle, inputSquare) {
    if (inputCircle / Math.PI < inputSquare / 4) {
        return "This circle will fit in this squre!"
    } else {
        return "This circle won't fit in this square."
    }
}

function showMessageFitFigures() {

    const inputCircle = document.getElementById('circumference').value;
    const inputSquare = document.getElementById('squarePerimeter').value;

    const message = fitFigures(inputCircle, inputSquare);

    document.getElementsByClassName('message')[7].innerText = message;
}