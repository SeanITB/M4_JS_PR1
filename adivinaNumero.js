// Obte el numero aleatori
var aleatori = Math.ceil(Math.random()*(100000 - 10000) + 10000)
console.log(aleatori)

// Per identificar els cubitos
let posicioIncialCubitoPerIntent = 0
// Contador d'intents
var intents = 0

function comprobasj() {

    //Obtindre el numero del usuari
    let numeroUsuari = document.getElementById("contingutComproba").value;

    // Passar els numeros a strings
    let strAleatori = aleatori.toString()
    let strNumeroUsuari = numeroUsuari.toString()

    // Pasar numero aleatori a un array
    var arrayAleatori = String(strAleatori).split("").map((strAleatori)=>{
        return String(strAleatori)
      });
    //console.log(arrayAleatori)

    // Mostra el numero d'usuari per la consola
    console.log(numeroUsuari);
    
    
    //Comprobar si el numero és correcte
    if (intents < 5) {
        if (aleatori == numeroUsuari){
            // Mostra el numero en codi 
            for (digit = 0; digit < 5; digit++) {
                document.getElementsByClassName("digitNumeroAleatori")[digit].innerHTML = strAleatori[digit]
            } 
            // Mostra el mistage en info
            document.getElementById("text").innerHTML = "Has encertat, enhorabona!!";
        } 
        else {
            //Mostrar el misatge d'error
            document.getElementById("text").innerHTML = "No és correcte, torna a intentar.";
    
            // Crear cubitos
            for (cubito = posicioIncialCubitoPerIntent; cubito < (posicioIncialCubitoPerIntent + 5); cubito++) {
                //console.log("Esta en el cubito: " + cubito)
                let resultat = document.getElementById("resultat");
                let creaArticle = document.createElement("article");
                let article = resultat.appendChild(creaArticle);
                article.classList.add("digitResultat");
            }
        
            // Diseciuonar el numero del usuari
            for (posicioCubito = posicioIncialCubitoPerIntent, posicioNumero = 0; posicioCubito < (posicioIncialCubitoPerIntent + 5); posicioCubito++, posicioNumero++) {
                //console.log("Esta en la posicio: " + posicioCubito)
                
                //Posar digit en cubito
                document.getElementsByClassName("digitResultat")[posicioCubito].innerHTML = strNumeroUsuari[posicioNumero];
                // Si el digit del numero és correcte
                if (strAleatori[posicioNumero] == strNumeroUsuari[posicioNumero]) {
                    //console.log("Correcte");
                    document.getElementsByClassName("digitResultat")[posicioCubito].style.backgroundColor = "green";
                }
            }
            // Si esta pero no en esa posicion
            for (posicioCubito = posicioIncialCubitoPerIntent, posicioNumero = 0; posicioCubito < (posicioIncialCubitoPerIntent + 5); posicioCubito++, posicioNumero++) {
                //Comprobar que numero encara no estigui correcte
                if (strAleatori[posicioNumero] != strNumeroUsuari[posicioNumero]) {
                    if ((arrayAleatori.includes(strNumeroUsuari[posicioNumero]))) {
                        //console.log("Mas o menos");
                        document.getElementsByClassName("digitResultat")[posicioCubito].style.backgroundColor = "yellow";
                    }
                }
            }    
            posicioIncialCubitoPerIntent += 5
            //console.log("Incrementa posicioIncial por " + posicioIncialCubitoPerIntent)    
        }  
    }
    else {
        // Mostra misatge NO QUEDEN INTENTS
        document.getElementById("text").innerHTML = "Ho sento, però ja has passat els 5 intents.";
    }
    intents++
}

