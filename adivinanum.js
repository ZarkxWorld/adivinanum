        var numeroAdivinar = Math.floor((Math.random() * 100) + 1); // buscamos un número aleatorio entre el uno y el cien con un random
        var contadorRespuestas = 0;

        function adivinar() {

            var numeroRespuestas = document.getElementById("numeroRespuestas").value; // obtendremos el número de respuestas posibles

            if (document.getElementById("numeroRespuestas").disabled == false) {
                if (isNumber(numeroRespuestas) && numeroRespuestas > 0) {
                    document.getElementById("numeroRespuestas").disabled = true;
                    document.getElementById("num").disabled = false;
                    document.getElementById("num").focus();
                }
            } else {

                var respuestas = document.getElementById("respuestas").innerHTML; // obtendremos el contenido del div que contiene las respuestas

                if (contadorRespuestas < numeroRespuestas) {

                    var numero = document.getElementById("num").value; // obtendremos el número introducido por el usuario

                    if (isNumber(numero) && numero > 0 && numero < 100) {
                        // aumentaremos el número de la respuesta dada
                        contadorRespuestas += 1;

                        if (numero > numeroAdivinar) {
                            // Si el número es superior

                            // Añadiremos el texto
                            respuestas += "<br>" + numero + " - El numero que buscas es inferior";
                            document.getElementById("num").focus();
                        } else if (numero < numeroAdivinar) {
                            // Si el numero es inferior

                            // Añadiremos un texto
                            respuestas += "<br>" + numero + " - El numero que buscas es superior";
                            document.getElementById("num").focus();
                        } else {
                            // has acertado

                            // Añadiremos un texto
                            respuestas += "<br><span class='acertado'>" + numero + " - HAS ACERTADO!!</span>";

                            fin()
                        }
                        // vaciamos el valor del núumero
                        document.getElementById("num").value = "";
                    } else {
                        respuestas += "<br><span class='error'>" + numero + " - Tiene que ser un valor numerico comprendido entre 1 y 100</span>";
                    }
                } else {
                    respuestas += "<br><span class='fin'>NO HAS ACERTADO!! El numero era el " + numeroAdivinar + "</span>";

                    fin()
                }

                // pondremos nuevamente todas las respuestas
                document.getElementById("respuestas").innerHTML = respuestas;
                console.log(respuestas);
            var mensaje1;
            mensaje1 = new SpeechSynthesisUtterance(respuestas);
            window.speechSynthesis.speak(mensaje1); //realiza un speak del resultado
            }
            
            // devolveremos false para que el formulario no envíe los valores
            return false;
        }

        // La función que se ejecuta al finalizar el juego ya sea por haber descubierto el numero o por finalizar el numero de intentos
        function fin() {
            // deshabilitamos la casilla de entrar el numero, y el botón de enviar
            document.getElementById("num").disabled = true;
            document.getElementById("btnEnviar").disabled = true;
        }

        // Simple función para validar un número
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
