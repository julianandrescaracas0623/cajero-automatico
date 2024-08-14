# Análisis de un Cajero Automático en C++

Este proyecto es una simulación básica de un cajero automático escrita en C++. El objetivo es comprender el funcionamiento básico de un cajero automático programado en C++ y explorar los requerimientos necesarios para actualizar su implementación hacia una solución moderna con una interfaz gráfica y funcionalidad web, además de almacenar la información en una base de datos. 
A continuación se describe su estructura, funcionamiento, y lógica.

## Estructuras

- **clientes**: Representa un cliente del banco.
  - `string nombre`: Nombre del cliente.
  - `double sueldo`: Saldo disponible en la cuenta del cliente.

- **tarjetas**: Representa una tarjeta de banco asociada a un cliente.
  - `int usuario`: Número de usuario o identificación de la tarjeta.
  - `int pin`: Número PIN para autenticación.
  - `struct clientes user`: Asociación de la tarjeta con un cliente.

## Variables Globales

- **visa[3]**: Arreglo de tres estructuras `tarjetas` que simula tres tarjetas de banco.
- **v1**: Índice global que almacena el cliente activo.
- **retiro, saldo, adicionar, anterior, ret2, agr2**: Variables usadas para manejar las operaciones de retiro y depósito.

## Funciones y Procedimientos

### `void cargar()`

Inicializa el arreglo `visa` con datos predefinidos para tres usuarios: `usuario`, `pin`, `nombre`, y `sueldo`. Esto simula la existencia de tres clientes con sus respectivas tarjetas.

### `bool buscar(int bs, bool up)`

Busca un usuario (`up` es `true`) o un PIN (`up` es `false`) en el arreglo `visa`. Devuelve `true` si encuentra el valor buscado y actualiza `v1` con el índice correspondiente.

### `void consultar()`

Muestra la información del cliente activo: nombre, usuario y saldo actual.

### `void retirar()`

Permite al usuario seleccionar una cantidad predefinida para retirar (500, 1000, 2000, 5000 unidades). Llama a `verificar(double rt)` para comprobar si el saldo es suficiente para el retiro.

### `void verificar(double rt)`

Comprueba si el saldo del cliente es suficiente para realizar el retiro. Si es así, descuenta el monto del saldo y lo actualiza en la estructura `clientes`. Muestra el nuevo saldo al usuario. Si el saldo es insuficiente, muestra un mensaje de error y retorna a la función `retirar()`.

### `void agregar()`

Permite al usuario seleccionar una cantidad para agregar a su saldo. Llama a `agregarsaldo(double as)` para realizar la transacción.

### `void agregarsaldo(double as)`

Suma la cantidad ingresada al saldo actual del cliente y actualiza la estructura.

### `void menu()`

Muestra el menú principal con las opciones disponibles: consultar saldo, retirar, agregar saldo, o salir. Permite al usuario elegir una operación a realizar.

### `void imprimir()`

Imprime los detalles de la transacción actual en un archivo de texto `imprimir.txt`, incluyendo el usuario, nombre, saldo anterior, saldo agregado y saldo actual.

### Funciones de Manejo de Errores

- **`void error()`**, **`void error2()`**, **`void error3()`**: Muestran mensajes de error personalizados cuando el usuario ingresa una opción inválida o cuando hay algún problema en las operaciones de retiro o adición de saldo.

## Lógica del Programa Principal

### Configuración Regional (`setlocale(LC_CTYPE, "spanish")`)

La función `setlocale(LC_CTYPE, "spanish");` se utiliza para establecer la configuración regional a "spanish". Esto asegura que los caracteres especiales, como acentos y eñes, se manejen correctamente en la entrada y salida de texto en la consola. Es particularmente útil en idiomas que no usan solo caracteres ASCII.

### Flujo General

1. **Inicio**: 
   - El programa comienza con la carga de datos de los clientes mediante la función `cargar()`. Luego, solicita al usuario que ingrese su número de usuario y su PIN para autenticarse.

2. **Autenticación**: 
   - La autenticación se realiza comparando el número de usuario y el PIN ingresados con los datos almacenados en el arreglo `visa`. Si ambos coinciden, el usuario puede acceder al menú principal.

3. **Operaciones**: 
   - Desde el menú principal, el usuario puede consultar su saldo, retirar dinero, o agregar fondos a su cuenta. Dependiendo de la opción seleccionada, se llaman las funciones correspondientes.

4. **Finalización**: 
   - Tras realizar una operación, el programa puede regresar al menú principal para permitir más transacciones o finalizar según la decisión del usuario.

## Conclusión

Este proyecto proporciona una base sólida para entender cómo funcionan los cajeros automáticos en su forma más fundamental a través de una implementación en C++. A través de esta simulación básica, adquirimos una familiarizacion con las estructuras de datos, la lógica de operaciones y los mecanismos de autenticación esenciales para cualquier sistema bancario.

Sin embargo, este enfoque inicial es solo el punto de partida. ya que el  verdadero desafío impartido en clase  radica en la transición hacia una solución moderna que responda a las demandas tecnológicas de la actualidad. Este taller busca no solo afianzar los conceptos básicos, sino también abrir el camino hacia una implementación más sofisticada que incluya una interfaz gráfica de usuario (GUI), que permita una interacción más intuitiva y accesible, y la incorporación de funcionalidades web, que ofrezcan servicios bancarios remotos y en tiempo real.

Además, la evolución del proyecto hacia el uso de bases de datos para el almacenamiento seguro y persistente de la información de los usuarios refleja la necesidad de sistemas robustos y escalables. Este avance es crucial para la gestión eficiente de grandes volúmenes de datos y la seguridad de las transacciones

## Resumen
El taller no solo pretende enseñar la creación de un cajero automático en C++, sino también prepararnos para enfrentar  retos como actualizar y modernizar sistemas de software, llevando soluciones básicas a entornos de desarrollo más avanzados y orientados a las necesidades tecnológicas actuales. Esto es fundamental para cualquier desarrollador que aspire a diseñar e implementar soluciones financieras en un mundo cada vez más digitalizado.

## Estudiantes

- [@julianandrescaracas0623](https://github.com/julianandrescaracas0623)
- [@DaR3k](https://github.com/DaR3k6)

