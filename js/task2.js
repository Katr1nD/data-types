function keySymbol(section) {

    const num = document.getElementById("enterSymbol").value;

    const symbolMap = new Map([
        ['0', ")"],
        ['1', "!"],
        ['2', "@"],
        ['3', "#"],
        ['4', "$"],
        ['5', "%"],
        ['6', "^"],
        ['7', "&"],
        ['8', "*"],
        ['9', "("],
    ]);

    document.getElementsByClassName('message')[1].innerText = symbolMap.has(num) ? 
         `Corresponding symbol is ${symbolMap.get(num)}` : 
         `Invalid value`;
}
