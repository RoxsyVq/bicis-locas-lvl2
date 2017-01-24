function borrarMessage(idInput)
{
    var elemento=document.getElementById(idInput);
     if(elemento.nextSibling!=null)
         {
        elemento.parentNode.removeChild(elemento,nextSibling);
    
         }           
    }


function cMessage(idInput,message)
{
    var elemento=document.getElementById(idInput);
    if(elemento.nextSibling==null){
        //si elelemento span no existe
        var span=document.createComment("span");
        span.innerHTML=message;
        elemento.parentNode.appendChild(sp);
    }
    else{
        //el elemento span ya existe
        if(elemento.nextSibling.tagName=="SPAN")
         {
        elemento.nextSibling.innerHTML=message;
    
         } else{
             elemento.parentNode.removeChild(elemento,nextSibling);
             var span=document.createElement("span");
             span.innerHTML=message;
             elemento.parentNode.appendChild(span);
             
         }
    }
}

function primMayuscula(id)
{
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
}	
    //validaciones
    var validator ={
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
        



function validateForm(){	
var name = document.getElementById("name"); 
var lastname = document.getElementById("lastname");
var email = document.getElementById("input-email");
var password = document.getElementById("input-password");
var twitter = document.getElementById("input-social");
var lista= document.getElementsByClassName("form-control")[4];
var correo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
if(validator.isText(name.value)){
    borrarMessage("name");
    else{
      cMessage("name","Debe ingresar su nombre");
    }
    if(validator.isText(lastname.value))
    {
        borrarMessage("lastname");{
            else{
                cMessage("lastname","No es valido")
            }
        }
    }
    if(validator.isText(input-email.value)){
        borrarMessage("input-email");{
            else{
                cMessage("input-email","No es valido")
            }
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