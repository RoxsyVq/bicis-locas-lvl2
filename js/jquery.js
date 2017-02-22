   

$(document).ready(function(){
	var numNombre=/[0-9]/g;
	var email=/^[a-zaA-Z0-9_\.\-]+@[a-zaA-Z0-9_\-]+\.[a-zaA-Z0-9_\-.]+$/;
	function nameValidate(){
		var nom=$('#name').val();
		if(nom==""||numNombre.test(nom)){
        $('#name').after('<span>agrega texto y </span>');
			return false;
    	}else{
        $('span').remove();
    }	}
		
	function lastnameValidate(){
		var lastn=$('#lastname').val();
		if(lastn==""||numNombre.test(lastn)){
        $('#lastname').after('<span>agrega texto y </span>');
			return false;
    	}else{
        $('span').remove();
    }	
		
}
	function emailValidate(){
	
	var correo=$('#input-email').val();
	if(correo==""||!email.test(correo)){
	$('#input-email').after('<span>e-mail invalido!! </span>');
		return false;
	}else{
	$('span').remove();
	return true;
	}
	}
	
	
	function selectValidate(){
	var select=$("select").val();
	if(select==0){
		
	$('select').after('<span>elige una Bicicleta</span>');
		return false;
	}
	else{
		$('span').remove();
	}
}
	function passwordValidate(){
		var password=$('#input-password').val();
		if(password=="123456"||password.length<6){
        $('#input-password').after('<span>contraseña incorrecto! </span>');
			return false;
    	}else{
        $('span').remove();
    }	
		
}
		$('#input-email').keyup(emailValidate);
		$('#name').keyup(nameValidate);
		$('#lastname').keyup(lastnameValidate);
		$('#input-password').keyup(passwordValidate); 
		
//
	
	$('#enviar').click(validTodo);
	


function validTodo()
{

	
	if($('#name').val()=="" ||$('#lastname').val()=="" || $('#input-email').val()==""  || $('#input-password').val()==""  ){
	 alert("Es Necesario que llenes todos los campos!!");
		return false;
	}
	else{
		 alert("bienvenido!! Ya estas Registrado...");
	}
	emailValidate();
	nameValidate();
lastnameValidate();
passwordValidat();
selectValidate();
	return false;	
}

});

