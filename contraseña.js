function calcula_Contraseña() {
var usuario = document.getElementById("Usuario").value;
var contraseña = document.getElementById("Contraseña").value;

if (usuario == "Keren" && contraseña == "0511") {
    swal({
        title: "CONTASEÑA CORRECTA",
        text: "BIENVENIDO!",
        icon: "success",

    }).then((result) => {
        window.location = "index.html";

    });

} else {
    swal({
        title: "CONTASEÑA INCORRECTA",
        text: "VERIFIQUE NUEVAMENTE SU USUARIO  Y CONTRASEÑA!",
        icon: "error",
      });      
//alert("Usuario y Contraseña Incorrecto");
 }
    
}