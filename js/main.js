var spanNombre = document.createElement("span");
var spanApellido = document.createElement("span");
var spanEmail = document.createElement("span");
var spanContra = document.createElement("span");
var spanC = document.createElement("span");
var spanSel = document.createElement("span");


function nombreN() {
    var nombre=document.getElementById("name");
    spanNombre.innerHTML="No coloque números en el nombre";
    nombre.parentNode.appendChild(spanNombre);
}
function apellidoN(){
    var apellidos = document.getElementById("lastname");
    spanApellido.innerHTML="No coloque números en el apellido";
    apellidos.parentNode.appendChild(spanApellido);
}
function mail(){
    var email = document.getElementById("input-email");
    spanEmail.innerHTML="e-mail invalido";
    email.parentNode.appendChild(spanEmail);
}
function contrasenia(){
    var password = document.getElementById("input-password");
    spanContra.innerHTML="Contraseña no aceptada";
    password.parentNode.appendChild(spanContra);
}
function contrasenia2(){
    var password2 = document.getElementById("input-password");
    spanC.innerHTML="Coloque mínimo 6 caracteres";
    password2.parentNode.appendChild(spanC);
}
function seleccionar(){
    var select = document.getElementsByClassName("form-control")[4];
    spanSel.innerHTML="Debe seleccionar alguna opción";
    select.parentNode.appendChild(spanSel);
}

function message(){
    alert("Ya estas Registrado");
}



function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contrasenia = document.getElementById("input-password").value;
    var seleccion = document.getElementsByClassName("form-control")[4].value;
    

// validacion de nombre y apellidos
    
    var numNombre=(/[0-9]/g).test(nombre);
    if(numNombre==true || nombre==""){
        nombreN();
    }else{
        spanNombre.style.display="none";
    }
    var numApellidos=(/[0-9]/g).test(apellido);
    if(numApellidos == true ||apellido==""){
        apellidoN()
    }else{
        spanApellido.style.display="none";
    }
    // primera en mayuscula
    if (nombre.toLowerCase()){
            document.getElementById("name").value= nombre.charAt(0).toUpperCase() + nombre.slice(1);
        }
    if (apellido.toLowerCase()){
            document.getElementById("lastname").value= apellido.charAt(0).toUpperCase() + apellido.slice(1);
        } 
// validacion de correo   
    var email=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(!email.test(correo)){
        mail();
    }else{
        spanEmail.style.display="none";
    }
//validacion de contraseña
if(contrasenia=="098754" || contrasenia=="123456"){
        contrasenia()+i;
    }else if(contrasenia.length<6){
        contrasenia2();
        spanContra.style.display="none";
    }else{
        spanC.style.display="none";
    }
// validacion del select       
    if(seleccion==0){
       seleccionar();
    }else{
       spanSel.style.display="none"; 
    }
 // validacion de todo el form   
    if(nombre=="" || apellido=="" || correo=="" || contrasenia=="" || seleccion==0){
        alert("Es Necesario que llenes todos los campos!!");
    }
    else{
        message2();
       
        
    }
   var nombre = document.getElementById("name").value="";
        var apellido = document.getElementById("lastname").value="";
        var correo = document.getElementById("input-email").value="";
        var contrasenia = document.getElementById("input-password").value="";
        var seleccion = document.getElementsByClassName("form-control")[4].value=0;  
}
