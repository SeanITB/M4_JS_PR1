function comprobasj() {
    //vars
    var aleatoi = Math.ceil(Math.random()*10000)

    //lets
    let element;
    let numeroUsuari;
    let sortidaPrograma;
    let intents;
    
    //Obtindre els numeros
    element = document.getElementById("contingutComproba");
    numeroUsuari = element.value;
    console.log(numeroUsuari);
    //mentres el numero que ha introduit l'usuari sigui diferent al numero de la sort, demana el numero.
    /*numeroUsuari = window.prompt("Intenta hacertar un numero enre 0 a 100");*/
    do {
        intents = 0;
        intents++;
        let incorrecte = (numeroUsuari > aleatoi)?true:false;
        console.log(intents);
        if (incorrecte == true){
            document.getElementsByTagName("p")[0].innerHTML = "No és correcte, introdueix un numero MÉS GRAN que: " + numeroUsuari + ". Portes " + intents + " intents.";
            /*numeroUsuari = window.prompt("El numero " + numeroUsuari + " es mes gran que el numero aleatori. Introdueix un altre cop el numero, pero que sigui mes petit que: " + numeroUsuariAnterior)*/
        } 
        else if (incorrecte == false) {
            document.getElementsByTagName("p")[0].innerHTML = "No és correcte, introdueix un numero MÉS PETIT que: " + numeroUsuari + ". Portes " + intents + " intents.";
            /*numeroUsuari = window.prompt("El numero " + numeroUsuari + " es mes petit que el numero aleatori. Introdueix un altre cop el numero, pero que sigui mes gran que: " + numeroUsuariAnterior)*/
        }
        //sortidaPrograma = window.confirm("Bols seguir en el programa?")
    }while((aleatoi != numeroUsuari) && (sortidaPrograma))
    //Mostrar la sortida
    if (aleatoi == numeroUsuari) {
        //window.alert("L'has trobat");
        document.getElementsByClassName("digito").innerHTML = aleatori;
    } 
    else {
        //window.alert("Has tencat el programa")
    }
}
