# Prueba - Conversor de monedas

Este proyecto consiste en desarrollar un conversor de monedas que permita convertir un monto en pesos chilenos a otra moneda utilizando la API de mindicador.cl. En caso de que la API no esté disponible, se debe utilizar la versión offline que se encuentra en el archivo "Apoyo prueba - Conversor de monedas".

## Descripción del Proyecto

El objetivo principal de esta prueba es aplicar los conceptos y herramientas aprendidas hasta el momento, incluyendo el uso de la API fetch en JavaScript para obtener datos de tasas de cambio de moneda.

## Funcionalidades Principales

- **Consulta de API:** Utilizar el método fetch para consultar la API mindicador.cl y obtener los datos de las tasas de cambio de moneda actualizadas.
- **Interfaz de Usuario (UI):** Crear una interfaz de usuario que contenga:
  - Un campo de entrada para ingresar la cantidad de pesos chilenos a convertir.
  - Un menú desplegable (select) para elegir la moneda a la que se desea convertir.
  - Un botón para iniciar el proceso de consulta y renderización de datos.
- **Renderización de Datos:** Mostrar el resultado de la conversión en la interfaz de usuario una vez que el usuario haya ingresado la cantidad de pesos chilenos y seleccionado la moneda.
- **Historial de Conversión:** Utilizar una librería de JavaScript para mostrar un historial de los últimos 10 días del valor de la moneda seleccionada.
- **Manejo de Errores:** En caso de que la API mindicador.cl no esté disponible, utilizar la versión offline y manejar los errores adecuadamente para proporcionar retroalimentación al usuario.

## Instalación y Uso

No se requiere ninguna instalación especial para ejecutar este proyecto. Simplemente clona este repositorio y abre el archivo `index.html` en tu navegador web.

## Imagen de Referencia

![Maqueta general de la prueba](https://i.imgur.com/yXnjHpL.png)
