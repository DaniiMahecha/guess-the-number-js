let secretNumber = 0; //Almacena el número secreto
let attempts = 0; //Número de intentos
let secretNumberList = []; //Lista de números secretos para evitar repeticiones
let upperLimit = 10; //10 sorteos máximos




    //Verifica si el número del usuario es igual al número secret
    function attemptVerify(){
        let userNumber = parseInt(document.getElementById('userType').value);

        if(attempts > upperLimit * 0.4){

        setText('p','You have reached the attempt limit, TRY AGAIN')
        document.getElementById('jugar').setAttribute('disabled','true'); //Desahilito la opción de Jugar 
        resetInputValue();
        setOwnAttribute('reiniciar', 'disabled');

      } else {
        
        //Si los números coinciden, mensaje de victoria
          if(userNumber === secretNumber){

          setText('p', `You match the Secret Number in ${attempts} ${attempts > 1 ? 'attemps' : 'attempt'}, CONGATULATIONS!!`);
          document.getElementById('jugar').setAttribute('disabled','true'); //Desahilito la opción de Jugar

          //Si el usuario gana, se habilita la opción de empezar un nuevo juego
          setOwnAttribute('reiniciar', 'disabled');

        } else {
          //Si los números no coinciden, se da una pista
            if(secretNumber < userNumber){
              setText('p','The number is lower ')
            } else {
              setText('p', 'The number is higher')
            }
            attempts++; //Solo si falla los intentos aumentarán
            resetInputValue(); //Solo si pierde se reseteará la barra de input
        }
      return; 
    }
  }


    //Esta función nos permite cambiar el texto (parametro) de  objetos HTML
    function setText(tag, text){ 
        let HTMLi = document.querySelector(tag); 
        return HTMLi.innerHTML = text;
    }

    //Cambia los atributos de un objeto HTML al indicar su id y el atributo en cuestión
    function setOwnAttribute(id, attribute ){
      document.getElementById(id).removeAttribute(attribute)
    }

    //Esta función resetea automaticamente la barra de input 
    function resetInputValue(){
      let inputBar = document.getElementById('userType');
      return inputBar.value = '';
    }

    //Número pseudo randómico de 1 a 10 
    function getRandomInt() {
      let randomInt = Math.floor(Math.random() * upperLimit) + 1;

      console.log(randomInt);
      //Si ya se sortearon todos los números, acabar con el juego (condición la salida, de la recursividad)
      
          if(secretNumberList.length == upperLimit){

          setText('p','Game over, you match all the secret numbers availables, CONGRATULATIONS!!')
          document.getElementById('jugar').setAttribute('disabled','true');//Desahilito la opción de Jugar

          
        } else {

          if(secretNumberList.includes(randomInt)){
            return getRandomInt();  //Si el número randomInt, fue seleccionado en la partida anterior, llamamos a la función para crear otro número, así es imposible que un numero se repita

              
          } else {
            secretNumberList.push(randomInt);
            return randomInt; //Si el número ya aparecio, se guarda en la lista, porque no puede volver a salir 
          }
      }
    }
    

    //Mensajes iniciales
    function initialConditions() {
      setText('h1','Secret Number Game!!');
      setText('p',`Type an integer number till 1 to ${upperLimit}`);
      secretNumber = getRandomInt();
	    attempts = 1;
      setOwnAttribute('jugar', 'disabled');
    }

    function restartGame(){
      /*
      Limpiar input
      Indicar mensaje de intervalo de números
      Generar número aleatorio
      Inicializar el número de intentos
      Dashabilitar el botón de New Game
      */
      resetInputValue();
      initialConditions();
      document.getElementById('reiniciar').setAttribute('disabled','true');
      
    }


initialConditions();




