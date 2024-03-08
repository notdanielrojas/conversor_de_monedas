// Agrega un event listener al botón con el id "buscar", que escucha el evento "click" y ejecuta la función convertirMoneda
document.getElementById("buscar").addEventListener("click", convertirMoneda);

// Función asíncrona que se ejecuta al hacer clic en el botón "buscar" para convertir la cantidad de moneda ingresada
async function convertirMoneda() {
  // Obtiene el valor de la cantidad ingresada por el usuario
  const cantidad = document.getElementById("cantidad").value;
  // Obtiene el valor de la moneda seleccionada por el usuario
  const moneda = document.getElementById("moneda").value;

  try {
    // Realiza una solicitud GET a la API para obtener los datos de las tasas de cambio
    const response = await fetch("https://mindicador.cl/api");
    // Convierte la respuesta a formato JSON
    const data = await response.json();
    let resultado; // Variable para almacenar el resultado de la conversión

    // Verifica el tipo de moneda seleccionada por el usuario y realiza el cálculo de conversión correspondiente
    if (moneda === "usd") {
      resultado = cantidad / data.dolar.valor; // Realiza el cálculo para convertir a dólares
      informacion("dolar", moneda); // Llama a la función informacion para mostrar el gráfico de la tasa de cambio del dólar
    } else if (moneda === "euro") {
      resultado = cantidad / data.euro.valor; // Realiza el cálculo para convertir a euros
      informacion("euro", moneda); // Llama a la función informacion para mostrar el gráfico de la tasa de cambio del euro
    }

    // Muestra el resultado de la conversión en el elemento HTML con el id "resultado"
    document.getElementById(
      "resultado"
    ).innerHTML = `Resultado: ${resultado.toFixed(0)} ${moneda.toUpperCase()}`;
  } catch (error) {
    // Maneja los errores en caso de que falle la solicitud a la API
    console.error("Error al obtener los datos de la API:", error);
    document.getElementById("resultado").innerHTML =
      "Error al obtener los datos de la API.";
  }
}

// Función asíncrona que obtiene los datos de la API y muestra un gráfico de la tasa de cambio
const informacion = async (variable, nombreMoneda) => {
  // Realiza una solicitud GET a la API para obtener los datos de la tasa de cambio específica (dólar o euro)
  const res = await fetch(`https://mindicador.cl/api/${variable}`);
  // Convierte la respuesta a formato JSON
  const data = await res.json();
  // Obtiene los datos de la serie de la tasa de cambio (últimos 9 días)
  let series = data.serie.slice(0, 9);
  console.log(series); // Imprime los datos de la serie en la consola del navegador
  let fechas = []; // Arreglo para almacenar las fechas de la serie
  let valores = []; // Arreglo para almacenar los valores de la serie

  // Recorre los datos de la serie y agrega las fechas y los valores a los arreglos correspondientes
  series.forEach((item) => {
    let fecha = new Date(item.fecha).toLocaleDateString("en-GB"); // Convierte la fecha al formato "dd/mm/aaaa"
    if (fecha) {
      fechas.push(fecha); // Agrega la fecha al arreglo de fechas
      valores.push(item.valor); // Agrega el valor al arreglo de valores
    }
  });

  // Invierte el orden de los arreglos de fechas y valores para mostrar los datos más recientes primero en el gráfico
  const xValues = fechas.reverse(); // Arreglo de fechas invertido
  const yValues = valores.reverse(); // Arreglo de valores invertido

  // Crea un nuevo gráfico utilizando Chart.js con los datos obtenidos
  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label: nombreMoneda.toUpperCase(), // Utiliza el nombre de la moneda como etiqueta del dataset
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0, 255, 66, 1)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          data: yValues,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            fontColor: "white",
          },
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "white",
            },
            gridLines: {
              color: "rgba(255, 255, 255, 0.2)",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "white",
            },
            gridLines: {
              color: "rgba(255, 255, 255, 0.2)",
            },
          },
        ],
      },
    },
  });
};
