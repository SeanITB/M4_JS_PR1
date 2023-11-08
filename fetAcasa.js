
function comprobasj() {
    let a = "1534"
    let b = "1234"
    let c = "4321"
    let d = "3"

    //console.log(a[0])
    /*
    for (digit = 0; digit < 5; digit++){
        if (a[digit] == b[digit]){
            console.log("true")
        } 
        else {
            console.log("false")
        }    
    }
    */
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    // Pasar numero aleatori a un array
    var arr = String(a).split("").map((a)=>{
        return String(a)
      });
    console.log(arr);

    // Comprovar si numero esta en arr
    if (arr.includes(d)) {
        console.log("true");
    }
    else {
        console.log("false")
    }
}
