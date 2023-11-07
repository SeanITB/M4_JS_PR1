function comprobasj() {
    // Obte els numeros aleatoris
    var aleatori = Math.ceil(Math.random()*10000)

    //Obtindre el numero del usuari
    let numeroUsuari = document.getElementById("contingutComproba").value;

    // Passar els numeros a strings
    let strAleatori = aleatori.toString()
    let strNumeroUsuari = numeroUsuari.toString()


    // Mostra el numero d'usuari per la consola
    console.log(numeroUsuari);
    
    
    //Comprobar si el numero és correcte
    if (aleatori == numeroUsuari){
        for (digit = 0; digit < 5; digit++) {
            document.getElementsByClassName("digitNumeroAleatori")[digit].innerHTML = strAleatori[digit]
        } 
    } 
    else {
        //Mostrar el misatge d'error
        document.getElementById("text").innerHTML = "No és correcte, torna a intentar.";

        // Crear articles en resultat
        for (cubito = 0; cubito < 5; cubito++) {
            let resultat = document.getElementById("resultat");
            let creaArticle = document.createElement("article");
            resultat.appendChild(creaArticle);
        }

        // Posar el numero d'usuari
        for (digit = 0; digit < 5; digit++) {
            //document.getElementsByClassName("digitResultat")[digit].innerHTML = strNumeroUsuari[digit]
        }   
    }   
}

