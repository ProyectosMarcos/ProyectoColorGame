// !Introducción
// En este proyecto, crearás un juego en el que el usuario deberá adivinar un color a partir de su código RGB.

// ⚠️ Importante: La clave del éxito de tu proyecto es que hagas todo paso a paso. Es decir, no pienses en el paso 6 antes de que funcionen los 5 anteriores.

// Avanzá a las siguientes secciones para leer sobre nuestra metodología y las reglas del juego.
// =====================================================================================================================

// !Metodología

// 👩‍🏫👨‍🏫 Sugerimos que realices este proyecto usando el 🍅 Método Pomodoro.
// ¿Qué Es El 🍅 Método Pomodoro?
// El Método Pomodoro (del italiano "tomate") es una técnica de administración del tiempo creada por Francesco Cirillo.

// Recapitulando, el método consiste en dividir el tiempo de trabajo en bloques de 25 minutos ("pomodoros"), separados por cinco minutos de descanso.
// Durante esos 25 minutos, deberás concentrarte solo en una actividad hasta que suene la alarma. Luego, sugerimos que te levantes, estires y desconectes antes de retomar tu trabajo.
// Al completar cuatro "pomodoros", podrás tomarte un descanso más largo de 20 o 30 minutos.

// Mirá el siguiente gráfico:

// ¿Para Qué Sirve?

// El Método Pomodoro:

//     Sirve para fijar un límite de tiempo.
//     Facilita la realización de tareas al dividirlas en bloques manejables.
//     Fomenta la concentración.
//     Aumenta la productividad.
//     Evita el multitasking: la realización de más de una tarea al mismo tiempo.

// Herramientas Digitales

// Existen muchas herramientas online para medir el tiempo. Algunas de ellas son:

//     Pomodoro Tracker
//     Pomofocus
//     Pomodor
//     Marinara Timer

// 👩‍🏫👨‍🏫 ¡Elegí la herramienta que mejor se adapte a tus necesidades!
// ===============================================================================================================

// ! Las Reglas Del Juego
/*
Las Reglas Del Juego
Las reglas del juego son simples. El programa mostrará un código RGB y opciones posibles para que el usuario adivine cuál es la correcta. El usuario podrá jugar en dos niveles: el fácil (con 3 colores) o el difícil (con 6). En cualquier caso, el juego le permitirá hacer click en todas las opciones hasta que dé con la correcta.
⚠️ Importante: para entender mejor mirá este Proyecto.

Sintaxis De Las Funciones
Asegurate de escribir tus funciones usando esta sintaxis:

function saludar() {
  console.log("¡Hola!");
}

Al hacerlo, JavaScript primero guardará la Función en la memoria y, luego, cuando la queramos llamar ejecutará el código.
Esto nos servirá para organizar mejor el código, poniendo la definición de las Funciones en una sección y su uso en otra.
Si ejecutarámos la Función antes de declararla, funcionaría igual porque JS ya la leyó antes de empezar a correr el programa.
Veamos un ejemplo de esto último:
llamarBatman();
function llamarBatman() {
  alert("Soy Batman.");
}
=====================================================================================================================================
*/
// ! Paso A Paso (Parte 1)
// Paso 1: Archivos HTML Y CSS
/*Para que practiques JavaScript a fondo te ayudaremos con los pasos de HTML y CSS:

    Creá los archivos index.html y style.css.
    Luego ingresá a este link.
    Copiá el código que se encuentra dentro de cada uno de los archivos y pegalos en los que creaste en el VSC, según corresponda.
 
 
 ⚠️ Importante : más allá de que te demos resuelta esta parte, tenés la libertad de hacer las modificaciones que quieras en tus archivos.
 */
//                                     ====================================
// ! Paso 2 : Dar Color A Las Tarjetas
/*

    Creá un archivo JavaScript para darle a cada cuadrado un color distinto:
        Creá un Arreglo llamado colors y escribí 6 colores en formato RGB.

⚠️ Importante: Escribí los colores respetando esta sintaxis (con los espacios) "rgb(240, 14, 128)". 

    Pista: Escribí los Strings con una misma sintaxis. Un espacio de más (o de menos) puede hacer que el juego no funcione.


   2 Asignale a cada cuadrado un color:

    Seleccioná todos los cuadrados usando querySelectorAll().
    Recorrelos usando un for Loop. En cada vuelta del Loop, asignale un color del Arreglo colors.

    Pista: Aprovechá la Variable i, no solo para acceder al cuadrado específico, sino también al color.

    📛 Asegurate de que los 6 cuadrados tengan los colores del Arreglo colors.


👩🏻‍💻👨‍💻Acerca De Los Selectores
Cada vez que selecciones un elemento utilizá una Variable para guardarlo. Por ejemplo, escribir la Variable square, es más rápido que document.querySelectorAll(".square")

Avanzá a la siguiente sección para continuar con tu proyecto.



*/

// =========================================================================================================

// ! Paso A Paso (Parte 2)
// ! Paso 3: El Contenido De La Página
/* En esta parte del proyecto, crearás el título del juego: "The Great Guessing Game". Deberás lograr que se muestre el código RGB del color ganador.

Para hacerlo, seguí estos pasos:

  1  Dentro del span #colorDisplay irá el código RGB del color ganador.

  2  Creá la Variable pickedColor. Dale un color específico (por ejemplo colors[3]) y su valor al texto de #colorDisplay.

👩‍🏫👨‍🏫 Más adelante, la Variable tendrá un color aleatorio (seleccionado del Arreglo).

 3 Comprobá que el código RGB aparezca correctamente en el <h1>.
*/
// Paso 3: El Contenido De La Página

// Creá la Variable pickedColor. Dale un color específico (por ejemplo colors[3]) y su valor al texto de #colorDisplay.
// var pickedColor = colors[3]; // Puedes cambiar el índice según el color que desees.

// Seleccioná el elemento con el id #colorDisplay y asignale el valor de pickedColor.
// var colorDisplay = document.getElementById('colorDisplay');
// colorDisplay.textContent = pickedColor;

//  Comprobá que el código RGB aparezca correctamente en el <h1>.
// var h1 = document.getElementById('h1');
// h1.textContent = 'The Great Guessing Game\n' + pickedColor;

// ! Paso 4: Un Poco Del Juego

/* Ahora empecemos con la lógica del juego.
Cuando el usuario haga click en un cuadrado incorrecto, éste desaparecerá (cambiando su color de fondo al mismo que el del <body>) y, al mismo tiempo, aparecerá el mensaje "Intentalo nuevamente".

Si el usuario adivina, en cambio, todos los cuadrados y el <h1> deberán tener el color del cuadrado ganador y aparecerá el mensaje "¡Correcto!".
Para lograr esta dinámica, seguí estos pasos:

    1  Dentro del span#message mostraremos el mensaje
    2 Agregá un evento de click a cada uno de los cuadrados.


    Pista: Podés aprovechar el Loop que hiciste antes.

    🤓 Tip: Cuando el usuario haga click en un cuadrado necesitarás guardar su código RGB en una variable clickedColor. Luego, lo compararás con pickedColor y comprobarás si el color clickeado es el mismo que el color ganador previamente seleccionado.

    Qué Sucede Si Los Colores Son Distintos

    Si son distintos, le darás a ese cuadrado el color de fondo del <body> y le mostrarás el mensaje "Intentalo Nuevamente" en el <span>.
📛 Fijate si funciona correctamente cuando hacés click en los colores equivocados.


    Qué Sucede Si Los Colores Son Iguales
    Si son el mismo color, seguí estos pasos:

   1 Mostrá el mensaje "¡Correcto!" en el <span>.
   2 Asignale al <h1> el color de fondo del ganador.

   Pista: 🤓 Tip: Para cambiar el color de los cuadrados, hacé una Función por fuera. De esta manera, mantendrás el código ordenado.


   3 Dentro de una nueva Función changeColors, que tomará como Argumento un color, iterá sobre todos los cuadrados y dale el color de fondo del Argumento.
   4 Ejecutá la Función en el momento que el usuario hace click en el color correcto y pasale como Argumento ese color.

   📛 Fijate si funciona cuando hacés click en el color correcto.

  5 Creá una Función para asignarle a pickedColor un color aleatorio del Arreglo de colores. Para eso, creá la Función pickColor que devuelva un color random:

   1 Dentro de la Función pickColor creá un número aleatorio entre los Índices del Arreglo colors.
   2 Usá ese número para devolver un color del Arreglo.
   3 Asigná lo que devuelve la Función a la Variable pickedColor.

   📛 Fijate si cada vez que actualizás la página el color del <h1> es distinto y si el juego sigue funcionando.

  6 Creá la Función randomColor para generar y devolver un color aleatorio.

    7 Creá la Función generateRandomColors que generará de forma aleatoria el Arreglo de colores usando la randomColor.

    La Función tomará como Argumento un número que indique la longitud del Arreglo (6 o 3 cuadrados, dependiendo si se está jugando en Easy o Hard Mode).
    El Arreglo que devuelva esta Función se lo asignarás a la Variable colors.

📛 Por último, fijate si cada vez que cargás la página aparecen colores random en los cuadrados y funciona el juego.

 */

// ===============================================================================================================
//! Botones

// En esta parte del ejercicio crearás el botón de "Play Again?".

// Este botón tiene 2 funcionalidades:

//   1  Cuando se está jugando el juego, ofrece pedir nuevos colores.
//   2  Si se ganó el juego, ofrece jugar otra vez.

// Pista: Te recomendamos guardar todo en una función reset ya que luego la vas a necesitar.

// En ambos casos el efecto es el mismo: reinicia el juego con nuevos colores.

// Para crear el botón "Play Again?", seguí estos pasos:

//   1  Seleccioná el button#reset y dale un event listener para que, cuando se haga click:

//     Genere nuevos colores en el Arreglo.
//     Vuelva a elegir un color de ese Arreglo (para que sea el ganador) y aparezca en #colorDisplay.
//     Cambie los colores de los cuadrados con los nuevos colores.

// 📛 Fijate si todo sigue funcionando correctamente.

//    2 Agregá un evento para que, cuando el usuario gane, #reset cambie su texto a "Play Again?".
//    3 Agregá en el listener de #reset un evento para que, cuando el usuario haga click, vuelva a decir "Nuevos Colores" y desaparezca el mensaje "Intentalo Nuevamente" y "¡Correcto!".

// Pista: Podés modificar tu primera función para agregar estos eventos.

// 📛 Antes de seguir avanzando, volvé a resetear el color de fondo del <h1> y fijate si todo esta funcionando como debería.
// Los Botones Easy Y Hard

// En esta parte del ejercicio crearás los_ niveles. Al final del div#stripe tenés dos botones Easy y Hard que modificarán la dificultad del juego. Para hacerlo, seguí los pasos indicados para cada botón.

/* El Botón Hard

1. El botón Hard tiene asignado la clase selected para que, al cargar la página, indique que está seleccionado. También cada botón tiene un ID para poder identificarlo.

2. Creá un event listener a cada uno para que, cuando le hagas click, le agregue la clase selected y se la quite al otro.


📛 Fijate si funciona correctamente cuando hacés click en ambos botones.


El Botón Easy

Cuando hagamos click en el botón Easy queremos que se generen solo 3 colores con un color ganador y que se muestre en el título cuál es.
Para lograrlo, le asignaremos a los primeros 3 cuadrados los 3 colores del Arreglo y ocultaremos los otros 3 a través de la Propiedad display:none;.



Pista: 
Debe ser un String con el color. 🤓 Si el String es verdadero, le asignará el color al cuadrado, sino (si no hay ningún elemento en ese Índice y nos devuelve undefined) le cambiará al cuadrado la propiedad CSS display a none. De esta manera, el cuadrado se esconderá.


📛 Fijate que cuando hagas click en Easy los 3 primeros cuadrados cambien de color y los otros tres se escondan.


La Última Milla
En esta parte del ejercicio, te enfocarás nuevamente en el botón Hard.


👩‍🏫👨‍🏫 No te preocupes si el código se empieza a repetir. Antes de terminar el proyecto lo podrás refactorizar.


Ahora deberás:

   1 Generar nuevos colores (que vuelvan a ser 6).
   2 Elegir un color ganador.
   3 Mostrar en el título cuál es ese color.

Para hacerlo, seguí estos pasos:

   1 Hacé Loop a todos los cuadrados y asignale a todos un color del Arreglo.
   2 Para poder volver a mostrar los cuadrados escondidos, dale a los cuadrados el Valor block a la propiedad CSS display.

📛 Fijate si después de ir a Easy y volver a Hard se muestran los cuadrados escondidos y si aparecen nuevos colores. También corroborá si el juego funciona correctamente en ambos modos.



Pista:  Un 🐞 Bug En El Juego

💣 En este momento, tenés un bug en el juego: cuando estás en el modo Easy y hacés click en #reset se generan 6 nuevos colores en el Arreglo que no se muestran en la pantalla.
Para solucionar este problema, crearás la Variable numberOfSquares que registre con cuántos cuadrados se está jugando en ese momento:

    La Variable iniciará siendo 6.
    Cuando se haga click en Easy cambiará a 3.
    Cuando se haga click en Hard volverá a 6.
    Luego, cada vez que se ejecute generateNumberColors ya no se pasará el número Hard codeado como Argumento sino que se pasará la Variable numberOfSquares.

📛 Fijate si se solucionó el bug mostrando por consola cuántos elementos hay en el Arreglo colors.


/*/
/*     */

document.addEventListener('DOMContentLoaded', function () {
  // Arreglo de colores iniciales
  let colors = [
    'rgb(240, 14, 128)',
    'rgb(34, 193, 195)',
    'rgb(235, 104, 65)',
    'rgb(0, 128, 0)',
    'rgb(255, 255, 0)',
    'rgb(128, 0, 128)',
  ];

  //    Seleccionar todos los cuadrados y otros elementos del DOM
  let squares = document.querySelectorAll('.square');
  let pickedColor = pickColor();
  let colorDisplay = document.getElementById('colorDisplay');
  let h1 = document.getElementById('h1');
  let messageDisplay = document.getElementById('message');
  let resetButton = document.getElementById('reset');
  let easyBtn = document.getElementById('easy');
  let hardBtn = document.getElementById('hard');
  let numSquares = 6; // Número predeterminado de cuadrados

  //    Inicializar la aplicación
  init();

  //    Función de inicialización
  function init() {
    setupModeButtons();
    setupSquares();
    reset();
  }

  //    Configurar botones de modo (Easy y Hard)
  function setupModeButtons() {
    easyBtn.addEventListener('click', function () {
      numSquares = 3; // Cambiar a modo fácil (3 cuadrados)
      easyBtn.classList.add('selected');
      hardBtn.classList.remove('selected');
      reset();
    });

    hardBtn.addEventListener('click', function () {
      numSquares = 6; // Cambiar a modo difícil (6 cuadrados)
      hardBtn.classList.add('selected');
      easyBtn.classList.remove('selected');
      reset();
    });
  }

  //   Configurar eventos para los cuadrados
  function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
          // Si el color es correcto
          messageDisplay.textContent = '¡Correcto!';
          setSquareColors(clickedColor);
          h1.style.backgroundColor = clickedColor;
          resetButton.textContent = 'Play Again?';
        } else {
          // Si el color es incorrecto
          this.style.backgroundColor = '#232323';
          messageDisplay.textContent = '¡Inténtalo nuevamente!';
        }
      });
    }
  }

  //  / Restablecer la aplicación
  function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'Nuevos Colores';
    messageDisplay.textContent = '';
    for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = 'none';
      }
    }
    h1.style.backgroundColor = 'steelblue';
  }

  //   Evento de clic para el botón de restablecimiento
  resetButton.addEventListener('click', function () {
    reset();
  });

  //    Función para establecer los colores de todos los cuadrados
  function setSquareColors(color) {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
  }

  //    Función para seleccionar un color aleatorio del arreglo
  function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  //    Función para generar colores aleatorios
  function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(randomColor());
    }
    return arr;
  }

  // Función para generar un color aleatorio
  function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
});
// ========================================================================================================
// ! Estilo

// Ahora que el juego funciona, nos enfocaremos en el estilo. En este punto, existen 2 caminos:

//   1  Seguir el maqueteado del ejemplo.
//   2  Crear tu propia versión.

// 👩‍🏫👨‍🏫 Si elegís la segunda opción, tenés que respetar los lineamientos generales:

//   1  Los botones de "Nuevos Colores", "Easy" y "Hard", no deben parecer botones clásicos ni tener una línea azul alrededor (en inglés, outline) cuando le hacemos click.
//   2  El mensaje de "¡Correcto!" y de "Intentalo Nuevamente" no tienen que mover a los otros elementos cuando aparecen.
//   3  Los cuadrados deben desaparecer con un efecto de transición de CSS. 🔍 Investigá cómo hacerlo.
// 🤓 Tip: Cualquier duda acerca de los colores, tamaños y tipografías los podés averiguar usando el Inspector De Elementos.
// 🚀 Avanzá a la siguiente sección para potenciar tu proyecto.

/* 🤓 Tip: El Principio No Te Repitas (Don’t Repeat Yourself, DRY) es uno de los principios en el desarrollo de software cuyo principal objetivo es evitar la duplicación de código. Cuando refactorizamos el código no solo lo volvemos más elegante y prolijo sino que lo optimizamos.
 */
/*🚀 Para potenciar tu proyecto refactorizá el código siguiendo estos pasos:



   1 Los botones de Easy y Hard tienen un event listener similar. La diferencia entre ellos es que uno muestra 3 y, el otro, 6 colores. Para optimizarlo:

    Sacale el ID y hacé que ambos compartan la misma clase.
    Comentá las 2 funciones de los botones.

   2 Seleccioná los botones y agregá un event listener que le dé la clase selected al botón cliqueado.
   3 Para actualizar numSquare, creá una condicional en la que, dependiendo del textContent del botón cliqueado, el Valor de numSquare sea 3 o 6. 🤓 Podés hacerlo con un operador ternario para ahorrar líneas de código.
   4 Generá una Función reset para simplificar las líneas de código de estos procesos:

    Generar nuevos colores en el Arreglo.
    Elegir un color ganador.
    Actualizar el display de la página correctamente.



👩‍🏫 La Función reset
La Función reset deberá considerar el mismo if statement en el que, dependiendo de si hay un color lo mostremos y, si no lo hay, lo ocultemos. Esto funcionará tanto en modo Easy como en Hard.


⚠️ Importante: Ahora que existe la Función reset, borrá un poco del código. Por ejemplo, cuando hacés click el botón #reset llama directamente a esa Función.


Pista:  Otros Usos De La Función reset
🤓 También podés usar la Función reset cuando recién carga la página: Podría estar en una nueva Función init donde esté todo lo que necesita hacer cuando se carga la página (por ejemplo, el evento para los botones de modo y el event listener de los cuadrados).


Últimos Detalles

    Como las Variables colors y pickedColor son definidas por reset, deberás definirlas sin un Valor.
    Ejecutá init.
    Emprolijá init: Hacé 2 Funciones para los listeners agregados. De esta manera, init solo será una Función que ejecuta 3 Funciones.

📛 Revisá y comprobá que tu proyecto funcione correctamente. Luego, pasá a la última sección de este proyecto.


*/
//! DRY

/*Si tu juego funciona correctamente y tiene el estilo que te gusta, ¡refactorizá tu código!


🤓 Tip: El Principio No Te Repitas (Don’t Repeat Yourself, DRY) es uno de los principios en el desarrollo de software cuyo principal objetivo es evitar la duplicación de código. Cuando refactorizamos el código no solo lo volvemos más elegante y prolijo sino que lo optimizamos.


🚀 Para potenciar tu proyecto refactorizá el código siguiendo estos pasos:

   1 Los botones de Easy y Hard tienen un event listener similar. La diferencia entre ellos es que uno muestra 3 y, el otro, 6 colores. Para optimizarlo:

    Sacale el ID y hacé que ambos compartan la misma clase.
    Comentá las 2 funciones de los botones.

   2 Seleccioná los botones y agregá un event listener que le dé la clase selected al botón cliqueado.
   3 Para actualizar numSquare, creá una condicional en la que, dependiendo del textContent del botón cliqueado, el Valor de numSquare sea 3 o 6. 🤓 Podés hacerlo con un operador ternario para ahorrar líneas de código.
   4 Generá una Función reset para simplificar las líneas de código de estos procesos:

    Generar nuevos colores en el Arreglo.
    Elegir un color ganador.
    Actualizar el display de la página correctamente.



👩‍🏫 La Función reset
La Función reset deberá considerar el mismo if statement en el que, dependiendo de si hay un color lo mostremos y, si no lo hay, lo ocultemos. Esto funcionará tanto en modo Easy como en Hard.


⚠️ Importante: Ahora que existe la Función reset, borrá un poco del código. Por ejemplo, cuando hacés click el botón #reset llama directamente a esa Función.

Pista:  Otros Usos De La Función reset
🤓 También podés usar la Función reset cuando recién carga la página: Podría estar en una nueva Función init donde esté todo lo que necesita hacer cuando se carga la página (por ejemplo, el evento para los botones de modo y el event listener de los cuadrados).


Últimos Detalles
    Como las Variables colors y pickedColor son definidas por reset, deberás definirlas sin un Valor.
    Ejecutá init.
    Emprolijá init: Hacé 2 Funciones para los listeners agregados. De esta manera, init solo será una Función que ejecuta 3 Funciones.

📛 Revisá y comprobá que tu proyecto funcione correctamente. Luego, pasá a la última sección de este proyecto.

*/
