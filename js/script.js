document.addEventListener("DOMContentLoaded", () => {

    RGB = () => {

        let red = document.getElementById("red").value;
        let blue = document.getElementById("blue").value;
        let green = document.getElementById("green").value;

        let show = document.getElementById("showcolor");

        let color = red + ' , ' + green + ' , ' + blue;

        document.getElementById("color-code").value = color;
        show.style.color = `rgb(${color})`;
    }

    document.getElementById("red").addEventListener("input", RGB);
    document.getElementById("blue").addEventListener("input", RGB);
    document.getElementById("green").addEventListener("input", RGB);

    copycode = () => {

        let data = document.querySelector("#color-code").value;
        data = `rgb(${data});`;
        navigator.clipboard.writeText(data);

        btntext = document.getElementById("copy-btn");

        cool_words = ["awesome","cool","great","superb"];

        const random_choice = Math.floor(Math.random() * cool_words.length);

        btntext.innerHTML = cool_words[random_choice];

        setTimeout(() => {
            btntext.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"/><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>`+"Copy";
        }, 500);

    }

    document.getElementById("copy-btn").addEventListener("click", copycode);

});