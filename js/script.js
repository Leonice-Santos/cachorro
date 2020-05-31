
// 
/*keypress --> no momento da tecla precionada
keyup --> no momento da tecla ser liberada
keydown --> no momento da tecla ser afundada*/

/// Keypress = invocado para cada caractere que for inserido:
$("#campo").keypress(function(){
	//alert('pressionou alguma tecla!');
});

var altura = 400;
var largura = 100;

/// Keydown = invocado para cada tecla pressionada
$("#campo").keydown(function(evento){

	if (largura >= 900 && altura >= 300) {
		alert('Você atingiu seu objetivo!')
	}

	if (evento.which == 37) {
		// Situação em que o usuário pressionou a seta da esquerda:
		alert("Tem que andar para trás!");
		$("#cachorro").css("margin-left", largura);
		largura = largura -10;
	}

    if (evento.which == 38) {
    	//Situação em que o usuário pressionou a seta de cima:
    	alert("Tem que subir!");
    	$("#cachorro").css("margin-top", altura);
    	altura = altura - 10;
    }
	
	if (evento.which == 39) {
		// Situação em que o usuário pressionou a seta da direita:
		alert("Tem que ir para frente!");
		$("#cachorro").css("margin-left", largura);
		largura = largura + 10;
	}

	if (evento.which == 40) {
		// Situação em que o usuário pressionou a seta de baixo:
		alert("Tem que descer!");
		$("#cachorro").css("margin-top", altura);
    	altura = altura + 10;
	}


});

/// Keyup = invocado para cada tecla liberada
$("#campo").keyup(function(){
	//alert('tecla liberada pelo usuário!');
});