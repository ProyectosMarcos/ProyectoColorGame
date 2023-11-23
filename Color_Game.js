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
