function ValidarPassword(){
    var Passwrod1 = document.getElementById("Pass").value;
    var Passwrod2 = document.getElementById("VerificarPasss").value;
    if(Passwrod1.length <= 7){
        alert("La contraseña debe tener 7 caracteres.");
    }else {
        if(Passwrod1.length > 10){
            alert("La Contraseña debe tener 10 caracteres");
        }else if(!/[A-Z]/.test(Passwrod1)){
                alert("La Contraseña debe tener al menos una letra Mayuscula.");
            }else if(!/[a-z]/.test(Passwrod1)){
                alert("La Contraseña debe tener al menos una letra minuscula.");
            }else if(!/\d/.test(Passwrod1)){
                alert("La Contraseña debe tener al menos un numero.");
            }
    }
    if(Passwrod1 === Passwrod2){
    }else{
        alert("Las Contraseñas deben ser iguales.");
    }
}
function ValidarEmail(){
    
}