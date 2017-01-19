//var spanName=document.createElement("span");
//var spanEmail=document.createElement("span");
//var spanPw=document.createElement("span");
//var spanPw=document.createElement("span");
//var spanLista=document.createElement("span");
function validateForm(){	

var name = document.getElementById("name").value; var var lastname = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var password = document.getElementById("input-password").value;
var twitter = document.getElementById("input-social").value;
var lista= document.getElementsByClassName("form-control")[4].value;
var correo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

function borrarmessage(_idInput){
    var elemento=document.getElementById(_idInput);
     if(elemento.nextSibling!=null)
         {
        elemento.parentNode.removeChild(elemento,nextSibling);
    
         }           
                        }
function cMessage(_idInput,message){
    var elemento=document.getElementById(_idInput);
    if(elemento.nextSibling==null){
        //si elelemento span no existe
        var sp=document.createComment("span");
        sp.innerHTML=message;
        elemento.parentNode.appendChild(sp);
    }
    else{
        //el elemento span ya existe
        if(elemento.nextSibling.tagName=="SPAN")
         {
        elemento.nextSibling.innerHTML=message;
    
         } else{
             elemento.parentNode.removeChild(elemento,nextSibling);
             var sp=document.createElement("span");
             
         }
    }
    
    
    var validatorname ={
        isText:function(_texto){
            return /([a-zA-Z]+)/g.test(_texto):
        },
    isEmail:function(_texto){
        return correo.test(_texto):
    },
    isPassword:function(_texto){
        var isValido¨=true;
        if(_texto.length<6||_texto=="09874");
        isValido=false;
        return isValido;
    }
    }
        

}
if(validator.isText(nombre.value)){
    borrarmessage("name");
    else{
      borrarmessage("name","Debe ingresar su nombre")  
    }
    if(validator.isText(lastname.value)){
        borrarmessage("lastname");{
            else{
                message("lastname","No es valido")
            }
        }
    }
    if(validator.isText(input-email.value)){
        borrarmessage("input-email");{
            else{
                message("input-email","No es valido")
            }
        }
    }

        
}




/*function validateForm(){	
   
    
    
    
    if (nombre==""||apellido==""||email==""||password=="")
        {
            var cnombre=document.getElementById("name");
            spanName.innerHTML="Debe ingresar su nombre";
            cnombre.parentNode.appendChild(spanName);
        }
        else
            {
                spanName.style.display="none";
            }
        
    if((/[0-9]/g).test(nombre)||(/[0-9]/g).test(apellido))
        {
           var cnombre=document.getElementById("name");
            
            spanName.innerHTML="Debe ingresar su nombre";
            cnombre.parentNode.appendChild(spanName);
        }
        else
            {
                spanName.style.display="none";
            }

    if(!correo.test(email))
        {
            var email=document.getElementById("input-email");
            spanEmail.innerHTML="Verifique su E-mail";
            email.parentNode.appendChild(spanEmail);
        }
        else
            {
            spanEmail.style.display="none";
            }
    
        
    if (password.length<6)
        {
            var pasword=document.getElementById("input-password");
            spanPw.innerHTML="la contraseña debe tener almenos 6 caracteres";
            pasword.parentNode.appendChild(spanPw);
        }
        else
            {
                spanPw.style.display="none";
            }
    
    if (Password=="123456"||inputPassword=="098754"||inputPassword=="password")
        {
            var pasword=document.getElementById("input-password");
            spanPw.innerHTML="la contraseña debe tener almenos 6 caracteres";
            pasword.parentNode.appendChild(spanPw);
        }
          else
            {
                spanPw.style.display="none";
            }

    
     if (lista == 0)
        {
            var clista=document.getElementsByClassName("form-control")[4];
            spanLista.innerHTML="Debes seleccionar almenos un tipo de bici";
            clista.parentNode.appendChild(spanLista);
        }
        else
            {
                spanLista.style.display="none";
            }
            
    if (nombre.toLowerCase())
        {
            document.getElementById("name").value= nombre.charAt(0).toUpperCase() + nombre.slice(1);
        }
        
    if (apellido.toLowerCase())
        {
            document.getElementById("lastname").value= apellido.charAt(0).toUpperCase() + apellido.slice(1);
        }   
    
    else{
        form.submit();
    }
   
}*/