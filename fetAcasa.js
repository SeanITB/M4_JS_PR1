
function comprobasj() {
    //vars
    var aleatoi = Math.ceil(Math.random()*10000)

    //lets
    let element;
    let numeroUsuari;
    let intents;
    let arrNumeroUsuari = (5);
    
    //Obtindre els numeros
    numeroUsuari = document.getElementById("contingutComproba").value;
    console.log(numeroUsuari);
    do {
        intents = 0;
        intents++;
        //for (index = 0; arrNumeroUsuari.last)

        let incorrecte = (numeroUsuari > aleatoi)?true:false;
        console.log(intents);
        if (incorrecte == true){
            document.getElementsByTagName("p")[0].innerHTML = "No és correcte, introdueix un numero MÉS PETIT que: " + numeroUsuari + ". Portes " + intents + " intents.";
        } 
        else if (incorrecte == false) {
            document.getElementsByTagName("p")[0].innerHTML = "No és correcte, introdueix un numero MÉS GRAN que: " + numeroUsuari + ". Portes " + intents + " intents.";
        }
    }while((aleatoi != numeroUsuari))
    //Mostrar la sortida

    if (aleatoi == numeroUsuari) {
        document.getElementsByClassName("digito").innerHTML = aleatori;
    } 
   
}
