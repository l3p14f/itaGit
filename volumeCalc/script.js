// V = r2 * π * H

// r – poluprečnik osnove valjka
// H – visina
// π – konstanta Pi, približno 3,14

// Potrebno je omogućiti korisniku da unese vrednosti poluprečnika i visine, 
// obaviti računanje i na kraju rezultat prikazati unutar HTML dokumenta ili unutar modalnog prozora za prikaz poruka.


// function calculateV()
// {
//     let height = parseInt(document.getElementById("inputH").Value);
//     let radius = parseInt(document.getElementById("inputR").value);
//     document.getElementById("result") = height + radius;
// }


function calcVolume() {
    var height = parseInt(document.getElementById("inputH").value);
    var radius = parseInt(document.getElementById("inputR").value);
    var V;
    var r2 = radius;
    var H = height;
    V = Math.pow(r2,2)*Math.PI*H;
    document.getElementById("result").innerHTML = V + "<p>cm<sup>3</sup></p>";
}


console.log(8*2)