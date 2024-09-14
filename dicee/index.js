window.onload = function() {
    if (sessionStorage.getItem('pageLoadedBefore') === 'true') {
        var randomNumber1 = Math.random();
        randomNumber1 *= 6; 
        randomNumber1 = Math.floor(randomNumber1) + 1;

        var randomNumber2 = Math.random();
        randomNumber2 *= 6; 
        randomNumber2 = Math.floor(randomNumber2) + 1;

        var firstDice = document.getElementsByClassName('img1')[0];
        var secondDice = document.getElementsByClassName('img2')[0];
        var newDices = ["images/dice" + randomNumber1 + ".png", "images/dice" + randomNumber2 + ".png"];
        firstDice.setAttribute("src", newDices[0]);
        secondDice.setAttribute("src", newDices[1]);

        h1Element = document.querySelector('h1');

        if (randomNumber1 > randomNumber2) {
            h1Element.innerHTML = "Player 1 wins!";
        } else if (randomNumber1 < randomNumber2) {
            h1Element.innerHTML = "Player 2 wins!";
        } else {
            h1Element.innerHTML = "It's a draw!";
        }
    } else {
        sessionStorage.setItem('pageLoadedBefore', 'true');
    }
};
