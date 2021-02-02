[...document.getElementsByTagName('section')].forEach(section => {
    const callback = section.getAttribute("data-callback"); // getYourAge

    section.addEventListener('keyup', function (event) {
        if (event.code === 'Enter') {
            window[callback](section);
        }
    });

    section.addEventListener('click', function (event) {
        const btn = section.getElementsByTagName('button')[0];
        if (event.target === btn) {
            window[callback](section);
        }
    });
});