function comprobasj() {
    //vars
    var aleatoi = Math.ceil(Math.random()*10000)

    //lets
    let numeroUsuari;
    let intents;
    
    //Obtindre els numeros
    numeroUsuari = document.getElementById("contingutComproba").value;
    console.log(numeroUsuari);

    do {
        intents = 0;
        intents++;
        let incorrecte = (numeroUsuari > aleatoi)?true:false;
        if (incorrecte == true){
            document.getElementById("text").innerHTML = "No és correcte, introdueix un numero MÉS GRAN que: " + numeroUsuari + ". Portes " + intents + " intents.";
            console.log("obtindre 1r num " +  (numeroUsuari%10));
        } 
        else if (incorrecte == false) {
            document.getElementById("text").innerHTML = "No és correcte, introdueix un numero MÉS PETIT que: " + numeroUsuari + ". Portes " + intents + " intents.";
            console.log("obtindre 1r num " + (numeroUsuari%10));
        }
    }while((aleatoi != numeroUsuari))
    //Mostrar la sortida
    if (aleatoi == numeroUsuari) {
        document.getElementsByClassName("digito").innerHTML = aleatori;
    } 
    
}
