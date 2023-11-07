function comprobasj() {
    // Obte els numeros aleatoris
    var aleatori = Math.ceil(Math.random()*100000)
    console.log(aleatori)
    //Obtindre el numero del usuari
    let numeroUsuari = document.getElementById("contingutComproba").value;

    // Passar els numeros a strings
    let strAleatori = aleatori.toString()
    let strNumeroUsuari = numeroUsuari.toString()

    // Pasar numero aleatori a un array
    var arrayAleatori = String(aleatori).split("").map((aleatori)=>{
        return Number(aleatori)
      })
    //console.log(arrayAleatori)

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
            let article = resultat.appendChild(creaArticle);
            article.classList.add("digitResultat");
        }

        // Posar el numero d'usuari
        let posicioIncial = 0
        for (digit = posicioIncial; digit < 5; digit++) {
            document.getElementsByClassName("digitResultat")[digit].innerHTML = strNumeroUsuari[digit];
            let intAleatori = strAleatori.toInt();
            let intNumeroUsuari = strNumeroUsuari.toInt()[digit];
            if (intAleatori == intNumeroUsuari) {
                document.getElementsByClassName("digitResultat").style.property = "background-color: green";
            }
            else if (arrayAleatori.includes(intAleatori)) {
                document.getElementsByClassName("digitResultat").style.property = "background-color: yellow";
            }
            

        }   
        posicioIncial += 5
    }   
}

