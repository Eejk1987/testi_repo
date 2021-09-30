function start(){   //1
    let arvattavaNumero = Math.floor(Math.random()*101);  //arpoo aluksi salanumeron 1-100 väliltä.
    return arvattavaNumero;
}

var secretNumber = start(); 
console.log("Secret number: ",secretNumber);
var guessedNumbers = [];  //arvaukset 

function GetArvaus (){
    let arvatut = document.getElementById("tulokset");
    let arvausA = guessButtonPressed();              //hakee arvauksen, joka on kokonaislukuna.
    let messageBox = document.getElementById("messageBox");
    let isValidGuessA = isValidGuess(arvausA);      //hakee sen, onko arvaus valiidi.
    messageBox.innerHTML = "";
    if (arvausA < 1){
        messageBox.innerHTML = "Arvaus on alle 1";      //ilmoittaa jos arvaus alle 1.
    }
    else if (arvausA > 100){
        messageBox.innerHTML = "Arvaus on yli 100";     //jos arvaus yli 100.     
    }
    if (isValidGuessA){
        guessedNumbers.push(arvausA);  //Jos arvaus on validi, se pusketaan guessedNumbers array, muuttujaan.
        console.log(guessedNumbers);  
        let row = "";
        row += arvausA +" "; 
        arvatut.innerHTML += row;  //tulostetaan arvaus
        CheckifCorrect(guessedNumbers);    
    }
    return guessedNumbers;
}

function guessButtonPressed(){      //arvaus muutetaan kokonaisluvuksi.
    let arvaus = document.getElementById("guessField").value 
    let parseArvaus = parseInt(arvaus);
    return parseArvaus;
}

function isValidGuess(number){  //tarkistetaan arvauksen oikeellisuus: arvaus on numero ja se on 1 ja 100 välillä.
    let isValidGuess = false;
    if (number == NaN || number<1 || number>100){
        isValidGuess = false;
    } else {
        isValidGuess = true;
    }
    console.log(isValidGuess);
    return isValidGuess;
}

function CheckifCorrect (number){    //tarkistetaan onko arvattu oikein.

    let salanumero = secretNumber;
    let oikein = false;
    if (number[number.length-1] == salanumero){   //tarkistetaan viimeisin arvaus ja verrataan salanumeroon.
        oikein = true
    } else {          
        oikein = false;       
    }
    if (oikein){
    messageBox.innerHTML = "Arvaus on oikein!! käytit: "+ number.length++ +" arvausta";    //Näyttää arvauksien määrän.
    reloadButton.disabled = false;
    } else {
        messageBox.innerHTML = "Arvaus on väärin.";     
    }
    if (number[number.length-1] < salanumero){
        messageBox.innerHTML += " Arvasit alle";  //arvaus alle
    } 
    else if (number[number.length-1] > salanumero){
        messageBox.innerHTML += " Arvasit yli";     //arvaus yli
    }
}

var reloadButton = document.getElementById("reloadPage");   
reloadButton.disabled = true;