```markdown
# Cajero Automatico

## Descripción General

Este proyecto está construido utilizando una arquitectura en capas en Node.js, lo cual ayuda a separar responsabilidades
y a hacer que el código sea más modular, mantenible y escalable. Cada capa en esta arquitectura tiene una responsabilidad específica, y se
comunican entre sí a través de interfaces bien definidas.

## Estructura del Proyecto

El proyecto está organizado en los siguientes directorios:

```plaintext
.
├── node_modules/            # Dependencias de Node.js
├── src/                     # Código fuente de la aplicación
│   ├── controller/          # Capa de controladores - Maneja las solicitudes entrantes y llama a los servicios
│   ├── database/            # Capa de base de datos - Conexión y configuración de la base de datos
│   ├── jwt/                 # Capa de JWT - Maneja la creación, validación y middleware de autenticación con JWT
│   ├── models/              # Capa de modelos - Modelos de datos que representan el esquema de la base de datos
│   ├── repositories/        # Capa de repositorios - Encargada de la interacción con la base de datos
│   ├── router/              # Capa de enrutadores - Define las rutas de la aplicación y sus correspondientes controladores
│   ├── services/            # Capa de servicios - Contiene la lógica de negocio de la aplicación
│   └── app.js               # Punto de entrada principal de la aplicación
├── .env                     # Archivo de configuración de variables de entorno
├── .gitignore               # Archivos y carpetas que Git debe ignorar
├── package-lock.json        # Archivo de bloqueo de versiones de dependencias
├── package.json             # Archivo de configuración del proyecto y dependencias
└── README.md                # Archivo con la información sobre el proyecto
```

### Descripción de las Capas

1. **Capa de Controladores (`controller/`)**:  
   Los controladores son responsables de manejar las solicitudes HTTP entrantes, procesar los datos si es necesario, y devolver la respuesta correspondiente. Esta capa interactúa con la capa de servicios para ejecutar la lógica de negocio.

2. **Capa de Base de Datos (`database/`)**:  
   Aquí se encuentra la configuración de la conexión a la base de datos, así como cualquier archivo relacionado con la administración y configuración de la base de datos.

3. **Capa de JWT (`jwt/`)**:  
   Esta capa maneja todo lo relacionado con los tokens JWT (JSON Web Tokens), incluyendo la creación, validación y middleware para la autenticación.

4. **Capa de Modelos (`models/`)**:  
   Los modelos representan la estructura de las tablas en la base de datos y se utilizan para interactuar con los datos de la aplicación.

5. **Capa de Repositorios (`repositories/`)**:  
   Los repositorios son responsables de realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos. Esta capa se comunica con la capa de modelos para obtener y manipular los datos.

6. **Capa de Enrutadores (`router/`)**:  
   Define las rutas de la aplicación y enlaza cada ruta con su controlador correspondiente.

7. **Capa de Servicios (`services/`)**:  
   La lógica de negocio principal se encuentra en esta capa. Los servicios realizan operaciones que pueden involucrar múltiples modelos y repositorios.

## Cómo Empezar

Para iniciar el proyecto, sigue estos pasos:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura las variables de entorno en el archivo `.env`.

3. Inicia la aplicación:
   ```bash
   npm run dev
   ```

```markdown
## Configuración del Entorno (.env)

Este proyecto utiliza un archivo `.env` para almacenar variables de entorno sensibles y específicas del entorno de ejecución. Este archivo debe estar ubicado en la raíz del proyecto y contiene la configuración necesaria para la conexión a la base de datos y otros parámetros de configuración.

### Ejemplo de Archivo `.env`

```plaintext
PORT = Puerto en  la base de datos
DATABASE = Nombre de la base de datos el que quieras
USER = Nombre del usuario de MYSQL
SECRETO = Generado usando OPENSSL o otra herramienta de Encryptación
```

### Explicación de las Variables

- **PORT**: El puerto en el que se ejecutará la aplicación Node.js.
- **DATABASE**: El nombre de la base de datos que utilizará la aplicación.
- **USER**: El nombre de usuario para conectarse a la base de datos.
- **SECRETO**: Una cadena secreta utilizada para la firma y verificación de tokens JWT.

### Creación de la Base de Datos

Antes de iniciar la aplicación, debes asegurarte de que la base de datos especificada en el archivo `.env` ha sido creada. A continuacion debes escribir en el apartado de la interfaz de MYSQL el nombre de base de datos que quieras dar.

![image](https://github.com/user-attachments/assets/609a6ff0-5c08-48e5-9862-2f9cd5a5621a)


Asegúrate de que los valores en el archivo `.env` coincidan con la configuración de tu base de datos y otros aspectos de tu entorno de desarrollo.

### Importante

No olvides mantener el archivo `.env` fuera de tu repositorio de control de versiones (por ejemplo, usando un archivo `.gitignore`), ya que contiene información sensible que no debería compartirse públicamente.

# Diagrama de Relación de Modelos

A continuación se muestra el diagrama de relaciones entre los modelos de la base de datos:

![Captura de pantalla 2024-08-22 121417](https://github.com/user-attachments/assets/fc1f9acf-630e-4966-9fe3-d7818518666b)

## Configuración de la Base de Datos

Este proyecto utiliza Sequelize para manejar la conexión con la base de datos y la definición de modelos. A continuación, se detalla la configuración y los modelos utilizados.

### Conexión a la Base de Datos

La conexión a la base de datos MySQL se establece utilizando el archivo `conexion.js`. El archivo configura Sequelize con las credenciales proporcionadas en las variables de entorno.

![carbon](https://github.com/user-attachments/assets/ba866f6e-ef26-4e54-a031-f2ff3479e941)

### Modelos

#### Usuario

El modelo `Usuario` representa a un usuario en la base de datos. Tiene los siguientes atributos:

- `idUsuario`: Identificador único del usuario (clave primaria, autoincrementable).
- `tipoDocumento`: Tipo de documento del usuario.
- `documento`: Número de documento del usuario.
- `nombre`: Nombre completo del usuario.
- `correo`: Correo electrónico del usuario (único).
- `fechaNacimiento`: Fecha de nacimiento del usuario.
- `fechaExpedicion`: Fecha de expedición del documento.
- `numeroTelefono`: Número de teléfono del usuario.
- `numeroPin`: PIN del usuario.

![carbon](https://github.com/user-attachments/assets/0d54706d-3e8d-4103-afe0-fbf6e77e428c)


#### Cuenta

El modelo `Cuenta` representa una cuenta asociada a un usuario. Tiene los siguientes atributos:

- `idCuenta`: Identificador único de la cuenta (clave primaria).
- `idUsuario`: Identificador del usuario al que pertenece la cuenta.
- `saldo`: Saldo actual de la cuenta.

![carbon](https://github.com/user-attachments/assets/cdb40f26-1727-4cdb-8e83-4ff673fa722b)

#### Transaccion

El modelo `Transaccion` representa una transacción asociada a una cuenta. Tiene los siguientes atributos:

- `idTransaccion`: Identificador único de la transacción (clave primaria, autoincrementable).
- `idCuenta`: Identificador de la cuenta asociada a la transacción.
- `tipoTransaccion`: Tipo de transacción (ej. ingreso, egreso).
- `monto`: Monto de la transacción.
- `fechaTransaccion`: Fecha en la que se realizó la transacción (por defecto, la fecha actual).

![carbon](https://github.com/user-attachments/assets/62bc7f31-2dfa-4bf3-ad43-a4a38c6519d4)

### Relación entre Modelos

- **Usuario** puede tener muchas **Cuentas**.
- **Cuenta** pertenece a un **Usuario**.
- **Cuenta** puede tener muchas **Transacciones**.
- **Transaccion** pertenece a una **Cuenta**.

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


## Estudiantes

- [@Julian Andres Caracas](https://github.com/julianandrescaracas0623)
- [@Kevin Villegas Pérez](https://github.com/DaR3k6)
