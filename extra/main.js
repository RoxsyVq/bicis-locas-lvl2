

function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById('name');
	var lastName = document.getElementById('lastname');
	var email = document.getElementById('input-email');
	var password = document.getElementById('input-password');

	if(Validator.isText(name.value))
	{
		removeMessage('name');
	}else{
		createMessage('name', 'No es válido');
	}

	if(Validator.isText(lastName.value))
	{
		removeMessage('lastname');
	}else{
		createMessage('lastname', 'Ingresa tu apellido');
	}
        
	if(Validator.isValidPassword(password.value))
	{
     
		removeMessage('input-password');
	}else{
		createMessage('input-password', 'Tu password no es válido');
        
        
	}

	if(Validator.isEmail(email.value))
	{
		removeMessage('input-email');
	}else{
		createMessage('input-email', 'Tu e-mail no es válido');
	}
}


function removeMessage(_inputID)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling != null)
	{
		elemento.parentNode.removeChild(elemento.nextSibling);
	}
}

function createMessage(_inputID, _message)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling == null)
	{
		//El span no existe
		var span = document.createElement('span');
		span.innerHTML = _message;
		elemento.parentNode.appendChild(span);
	}else{
		//El span ya existe
		if(elemento.nextSibling.tagName == 'SPAN')
		{
			elemento.nextSibling.innerHTML = _message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);

			var span = document.createElement('span');
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
		}
	}
}



// Validaciones

function primeraMayuscula(texto)
{
    var nombreArray = texto.split("");
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


function inputOnKeyUp(evt)
{
    var texto = evt.target.value;
//console.log("holalal");
    evt.target.value = primeraMayuscula(texto);  
}

var Validator = {
	isText:function (_string)
	{
    var regex = (/[0-9]/g).test(_string);
    if( _string == '' || regex==true){
        isValid=false;
           
        }
        else{
            isValid=true;
        }
		 return isValid;
	},
	isEmail:function (_string)
	{
		var regex = /([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
		return regex.test(_string);
	},
        
	isValidPassword: function (_string)
	{
		var isValid = true;
		if(_string.length < 6 || _string == '098754' || _string == '123456' || _string == 'password'){
			isValid = false;
		
	}else{
    isValid=true;
}
return isValid;
        
};	







//  ota de hACER  validacion   
//function  Validator()
//{
//    this.isText = function(){};
//}
//
//var validator = new Validator()
        



  



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