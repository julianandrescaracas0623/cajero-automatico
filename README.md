# Aviso Importante

Este proyecto es solo un prototipo educativo. No está afiliado, respaldado, ni asociado con [Bancolombia]. El uso de nombres, logos y otros elementos de marca es solo con fines de demostración y no debe interpretarse como una conexión con la entidad real. Este proyecto no debe ser utilizado en sistemas de producción.


# Análisis de un Cajero Automático en C++

Este proyecto es una simulación básica de un cajero automático escrita en C++. El objetivo es comprender el funcionamiento básico de un cajero automático programado en C++ y explorar los requerimientos necesarios para actualizar su implementación hacia una solución moderna con una interfaz gráfica y funcionalidad web, además de almacenar la información en una base de datos.
A continuación se describe su estructura, funcionamiento, y lógica.

## Estructuras

- **clientes**: Representa un cliente del banco.
  - `string nombre`: Nombre del cliente.
  - `double sueldo`: Saldo disponible en la cuenta del cliente.
  - ![1](https://github.com/user-attachments/assets/ae57b303-b2f4-4338-8cc4-d5ea0b02f555)


- **tarjetas**: Representa una tarjeta de banco asociada a un cliente.
  - `int usuario`: Número de usuario o identificación de la tarjeta.
  - `int pin`: Número PIN para autenticación.
  - `struct clientes user`: Asociación de la tarjeta con un cliente.
  - ![2](https://github.com/user-attachments/assets/05aaabe0-14ce-40d0-8bee-8a483d3e0c5c)


## Variables Globales

- **visa[3]**: Arreglo de tres estructuras `tarjetas` que simula tres tarjetas de banco.
- **v1**: Índice global que almacena el cliente activo.
- **retiro, saldo, adicionar, anterior, ret2, agr2**: Variables usadas para manejar las operaciones de retiro y depósito.
- ![3](https://github.com/user-attachments/assets/1a43a502-b24c-47c2-810a-d3c14d66cb78)

## Funciones y Procedimientos


![4](https://github.com/user-attachments/assets/ef3e3c32-8aca-4813-b45f-92c949cd8375)

### `void cargar()`

Inicializa el arreglo `visa` con datos predefinidos para tres usuarios: `usuario`, `pin`, `nombre`, y `sueldo`. Esto simula la existencia de tres clientes con sus respectivas tarjetas.

![7](https://github.com/user-attachments/assets/46d7a7d9-61c4-496e-9950-426743aadcd3)


### `bool buscar(int bs, bool up)`

Busca un usuario (`up` es `true`) o un PIN (`up` es `false`) en el arreglo `visa`. Devuelve `true` si encuentra el valor buscado y actualiza `v1` con el índice correspondiente.

![8](https://github.com/user-attachments/assets/a5a88462-4dc1-476e-9ccf-c56da2e23c7d)


### `void consultar()`

Muestra la información del cliente activo: nombre, usuario y saldo actual.

![9](https://github.com/user-attachments/assets/898bb8ff-2119-4bb3-818f-eae5b5bb3853)

### `void retirar()`

Permite al usuario seleccionar una cantidad predefinida para retirar (500, 1000, 2000, 5000 unidades). Llama a `verificar(double rt)` para comprobar si el saldo es suficiente para el retiro.

![10](https://github.com/user-attachments/assets/3ebb5318-c0ca-411f-8bc1-4b0785d4b250)

### `void verificar(double rt)`

Comprueba si el saldo del cliente es suficiente para realizar el retiro. Si es así, descuenta el monto del saldo y lo actualiza en la estructura `clientes`. Muestra el nuevo saldo al usuario. Si el saldo es insuficiente, muestra un mensaje de error y retorna a la función `retirar()`.

![11](https://github.com/user-attachments/assets/2403c430-5a0d-441a-ab36-e170286f317f)

### `void agregar()`

Permite al usuario seleccionar una cantidad para agregar a su saldo. Llama a `agregarsaldo(double as)` para realizar la transacción.

![12](https://github.com/user-attachments/assets/74048fa9-e087-4346-a3b4-d5bed3082813)

### `void agregarsaldo(double as)`

Suma la cantidad ingresada al saldo actual del cliente y actualiza la estructura.

![13](https://github.com/user-attachments/assets/1099ab6c-465f-4ac0-82fc-bcc98318df2c)

### `void menu()`

Muestra el menú principal con las opciones disponibles: consultar saldo, retirar, agregar saldo, o salir. Permite al usuario elegir una operación a realizar.

![14](https://github.com/user-attachments/assets/7b4f0e0d-d519-4443-bbf7-6d49030f8da6)

### `void imprimir()`

Imprime los detalles de la transacción actual en un archivo de texto `imprimir.txt`, incluyendo el usuario, nombre, saldo anterior, saldo agregado y saldo actual.

![15](https://github.com/user-attachments/assets/b1ea8bbe-a328-46b3-9b71-666a2e7d3d64)


### Funciones de Manejo de Errores

- **`void error()`**, **`void error2()`**, **`void error3()`**: Muestran mensajes de error personalizados cuando el usuario ingresa una opción inválida o cuando hay algún problema en las operaciones de retiro o adición de saldo.
- 
- ![5](https://github.com/user-attachments/assets/6d034447-4af4-49b2-ab1b-17740bacdef0)

## Lógica del Programa Principal

### Configuración Regional (`setlocale(LC_CTYPE, "spanish")`)

La función `setlocale(LC_CTYPE, "spanish");` se utiliza para establecer la configuración regional a "spanish". Esto asegura que los caracteres especiales, como acentos y eñes, se manejen correctamente en la entrada y salida de texto en la consola. Es particularmente útil en idiomas que no usan solo caracteres ASCII.

![6](https://github.com/user-attachments/assets/9fa3854c-c37e-4b9e-b8f2-81f23e209046)


### Flujo General

1. **Inicio**:
   - El programa comienza con la carga de datos de los clientes mediante la función `cargar()`. Luego, solicita al usuario que ingrese su número de usuario y su PIN para autenticarse.

2. **Autenticación**:
   - La autenticación se realiza comparando el número de usuario y el PIN ingresados con los datos almacenados en el arreglo `visa`. Si ambos coinciden, el usuario puede acceder al menú principal.

3. **Operaciones**:
   - Desde el menú principal, el usuario puede consultar su saldo, retirar dinero, o agregar fondos a su cuenta. Dependiendo de la opción seleccionada, se llaman las funciones correspondientes.

4. **Finalización**:
   - Tras realizar una operación, el programa puede regresar al menú principal para permitir más transacciones o finalizar según la decisión del usuario.
  

# Identificación de Componentes

## 1. Sistema de Autenticación de Usuarios
- **Descripción:** Actualmente, la autenticación se realiza mediante la verificación de un número de usuario y un PIN almacenados en estructuras locales. Esta verificación se ejecuta en un entorno limitado a una simulación en consola.
- **Transformación:** Se debe actualizar el sistema de autenticación para incorporar métodos modernos y más seguros, como la autenticación multifactor (MFA), que incluya no solo el PIN sino también el uso de tokens. Además, la autenticación deberá ser realizada en un entorno seguro con el uso de bases de datos.

## 2. Manejo de las Transacciones
- **Descripción:** Las operaciones actuales (retiro, depósito, consulta de saldo) se realizan y almacenan en estructuras simples dentro del código del programa, sin persistencia real más allá de la sesión actual.
- **Transformación:** El sistema debe ser capaz de manejar transacciones en tiempo real y asegurar la persistencia de los datos, utilizando una base de datos para almacenar toda la información de los clientes y las transacciones realizadas. Asimismo, se debe implementar una capa de seguridad que garantice la integridad y autenticidad de cada transacción, así como la capacidad de revertir transacciones en caso de errores.

## 3. Presentación de la Interfaz de Usuario (UI)
- **Descripción:** Actualmente, la interfaz del cajero automático está basada en texto y se ejecuta en la consola, lo cual limita la interacción y accesibilidad del usuario.
- **Transformación:** Se debe implementar una interfaz gráfica de usuario (GUI) más moderna y accesible, posiblemente utilizando frameworks como Qt o GTK para aplicaciones de escritorio. La GUI debe ser intuitiva, fácil de usar y proporcionar una experiencia más realista de un cajero automático. Además, la interfaz podría ser adaptada para funcionar en dispositivos móviles y pantallas táctiles, acercando el diseño a cajeros automáticos modernos.

## 4. Conectividad y Funcionalidad Web
- **Descripción:** El sistema actual no ofrece ninguna capacidad para conectarse a redes ni para ofrecer servicios bancarios remotos.
- **Transformación:** Se debe habilitar la conectividad para que el cajero automático pueda interactuar con sistemas bancarios en línea, permitiendo a los usuarios realizar transacciones desde cualquier lugar. Esto requerirá la implementación de servicios web para gestionar las transacciones de manera remota, garantizando la seguridad y la disponibilidad del sistema en entornos distribuidos.

## 5. Seguridad y Encriptación
- **Descripción:** El proyecto actual no incorpora medidas de seguridad avanzadas como el cifrado de datos.
- **Transformación:** Para proteger la información confidencial de los clientes, se deben implementar técnicas de cifrado de datos en todas las comunicaciones y transacciones, tanto a nivel de la aplicación como en la base de datos. Esto asegurará que la información del usuario esté protegida frente a ataques de interceptación o accesos no autorizados. Además, es necesario aplicar protocolos de seguridad estándar como HTTPS y SSL/TLS para la comunicación segura con los servidores.

# Propuesta de Modernización del Cajero Automático

Este documento describe la propuesta de modernización del cajero automático implementado en C++. La modernización incluye la integración de tecnologías como JavaScript, React y un chatbot para mejorar la funcionalidad, accesibilidad y experiencia del usuario.

## 1. Interfaz Gráfica de Usuario (GUI) con React

### Descripción
Se desarrollará una interfaz gráfica moderna utilizando React, una biblioteca de JavaScript conocida por su eficiencia y capacidad de crear interfaces de usuario interactivas y dinámicas.

### Características
- Diseño responsivo que se adapta tanto a pantallas de computadoras como dispositivos móviles.
- Componentes reutilizables para diferentes funcionalidades como autenticación, consulta de saldo, retiros y depósitos.
- Mejora de la accesibilidad mediante el uso de interfaces táctiles y elementos interactivos que simulan la experiencia de un cajero automático moderno.

### Beneficios
- Ofrecerá una experiencia de usuario más intuitiva y atractiva.
- Facilitará el mantenimiento y la expansión futura del proyecto mediante un código más organizado y modular.

## 2. Conectividad y Funcionalidad Web

### Descripción
Se integrará la funcionalidad web para permitir a los usuarios realizar transacciones desde cualquier lugar a través de una conexión a internet.

### Características
- Implementación de servicios web (APIs) para manejar las transacciones y la comunicación entre la aplicación cliente (React) y el servidor.
- Uso de HTTPS  para garantizar la seguridad en las comunicaciones.

### Beneficios
- Permitirá a los usuarios acceder a sus cuentas y realizar operaciones bancarias de manera remota.
- Facilitará la expansión del sistema a diferentes ubicaciones sin necesidad de infraestructura física adicional.

## 3. Base de Datos para Almacenamiento Seguro

### Descripción
La información de los clientes y las transacciones se almacenará en una base de datos segura para poder llevar un registro de los registros y garantizar una mayor seguridad.

### Características
- Uso de bases de datos relacionales (como MySQL ) o NoSQL (como MongoDB) según los requerimientos de escalabilidad en nuestro caso estamos usando una base de datos relaciones MySQL.
- Encriptación de datos sensibles como contraseñas y PINs para proteger la información del usuario.

### Beneficios
- Asegurará la persistencia y seguridad de los datos a lo largo del tiempo.
- Facilitará la gestión y consulta de grandes volúmenes de datos de manera eficiente.

## 4. Chatbot para Atención al Cliente

### Descripción
Se integrará un chatbot dentro de la interfaz de usuario para mejorar la atención al cliente.

### Características
- Capacidad de responder preguntas frecuentes, guiar al usuario a través de las funciones del cajero y ofrecer soporte.

### Beneficios
- Mejorará la experiencia del usuario al ofrecer asistencia inmediata y personalizada.
- Reducirá la carga de trabajo del soporte humano, permitiendo a los usuarios resolver problemas comunes sin intervención directa.

## 5. Autenticación y Seguridad Mejorada

### Descripción
Se implementará un sistema de autenticación más seguro y moderno.

### Características
- Autenticación poe medio de un PIN el cual sera necesario para poder ingresar incluyendo tambien la autenticación, que tomara toda la información la cual sera necesaria para poder validar que los usuarios si estan registrados, de lo contrario no podrian ingresar.
- Encriptación de todas las transacciones y almacenamiento seguro de datos.

### Beneficios
- Incrementará la seguridad del sistema, reduciendo el riesgo de accesos no autorizados.
- Mejorará la confianza del usuario en el sistema al garantizar la protección de su información personal y financiera.

# Consideraciones de Seguridad

En esta sección, se describen las medidas de seguridad implementadas en la aplicación Express y se proporcionan enlaces a la documentación relevante para cada aspecto de seguridad.

### CORS (Cross-Origin Resource Sharing)
- **Descripción**: Controla qué orígenes pueden acceder a los recursos de la aplicación.
- **Más información**: [CORS - npm](https://www.npmjs.com/package/cors)

### Helmet
- **Descripción**: Configura varios encabezados HTTP para mejorar la seguridad.
- **Más información**: [Helmet - npm](https://www.npmjs.com/package/helmet)

### helmet.frameguard()
- **Descripción**: Protege contra ataques de clickjacking.
- **Más información**: [Frameguard Documentation](https://helmetjs.github.io/)

### Morgan
- **Descripción**: Registra todas las solicitudes HTTP para análisis y monitoreo.
- **Más información**: [Morgan - npm](https://www.npmjs.com/package/morgan)

### helmet.contentSecurityPolicy()
- **Descripción**: Controla qué recursos pueden ser cargados por el navegador para prevenir ataques XSS.
- **Más información**: [Content Security Policy - Helmet](https://helmetjs.github.io/)

### Sequelize
- **Descripción**: ORM (Object-Relational Mapping) que facilita la interacción con bases de datos SQL. Permite realizar consultas de manera segura mediante el uso de consultas preparadas y parametrizadas para evitar inyecciones SQL.
- **Más información**: [Sequelize - Documentation](https://sequelize.org/docs/v6/)
  
## Código de Configuración
![carbon](https://github.com/user-attachments/assets/8b8d0f4b-708b-4cb6-923f-f7955026acae)
  

# Reflexión Final

Este proyecto comenzó como una exploración básica del funcionamiento de un cajero automático mediante una implementación en C++. A través de este proceso, se abordaron aspectos fundamentales como la gestión de datos de clientes, la autenticación mediante PIN, y las operaciones básicas de un cajero como retiros y depósitos. Estas funcionalidades, aunque sencillas, son la base de cualquier sistema financiero más complejo.

Sin embargo, el verdadero valor de este proyecto no radica solo en la creación de una simulación funcional, sino en la comprensión de la necesidad de modernización y actualización de sistemas. A medida que la tecnología avanza, también deben hacerlo las soluciones que desarrollamos. Este proyecto nos reta a considerar cómo podemos transformar un sistema rudimentario en una solución moderna, segura y escalable que esté alineada con las expectativas y necesidades actuales de los usuarios.

La propuesta de modernización, que incluye la integración de una interfaz gráfica de usuario (GUI) con React, la implementación de conectividad y funcionalidad web, el uso de bases de datos para la persistencia de la información, y la mejora de la seguridad mediante técnicas avanzadas de encriptación y autenticación, refleja la dirección en la que debemos avanzar. Además, la incorporación de un chatbot para la atención al cliente subraya la importancia de ofrecer una experiencia de usuario enriquecida y accesible.

Este proyecto es un recordatorio de que el desarrollo de software no se trata solo de escribir código que funcione, sino de crear soluciones que sean sostenibles, seguras, y capaces de adaptarse a un entorno en constante evolución. La transición de un cajero automático básico en C++ a una solución moderna y conectada es un reflejo de este proceso continuo de aprendizaje y adaptación, que es esencial para cualquier desarrollador que aspire a trabajar en el ámbito de la tecnología financiera y más allá.

## Resumen

El taller no solo pretende enseñar la creación de un cajero automático en C++, sino también prepararnos para enfrentar  retos como actualizar y modernizar sistemas de software, llevando soluciones básicas a entornos de desarrollo más avanzados y orientados a las necesidades tecnológicas actuales. Esto es fundamental para cualquier desarrollador que aspire a diseñar e implementar soluciones financieras en un mundo cada vez más digitalizado.

## Estudiantes

- [@Julian Andres Caracas](https://github.com/julianandrescaracas0623)
- [@Kevin Villegas Pérez](https://github.com/DaR3k6)
