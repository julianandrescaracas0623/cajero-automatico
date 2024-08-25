## Aviso Importante

Este proyecto es solo un prototipo educativo. No está afiliado, respaldado, ni asociado con [Bancolombia]. El uso de nombres, logos y otros elementos de marca es solo con fines de demostración y no debe interpretarse como una conexión con la entidad real. Este proyecto no debe ser utilizado en sistemas de producción.

# Descripción General

Este proyecto está construido utilizando un patrón de diseño modular y la biblioteca de JavaScript React. React es una biblioteca basada en componentes que permite crear interfaces de usuario atractivas y dinámicas. Gracias a su estructura modular, el código es escalable y fácil de mantener, ya que cada componente encapsula su propia lógica y presentación.

Las diferentes capas del proyecto se conectan entre sí de manera eficiente, lo que facilita la colaboración y el desarrollo en equipo. Además, la aplicación está diseñada para interactuar de manera fluida con las capas del backend, asegurando una integración robusta entre el frontend y el backend.

## Estrcutura del Proyecto 

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
│   │   └── Routing.jsx      # Archivo de enrutamiento
│   ├── services/            # Capa de servicios - Contiene la lógica de negocio de la aplicación
│   ├── app.js               # Punto de entrada principal de la aplicación
│   ├── components/          # Componentes de la aplicación
│   │   ├── cajeroAutomatico/ # Componentes específicos del cajero automático
│   │   │   ├── ConsignarSaldo.jsx
│   │   │   ├── LayoutPrivate.jsx
│   │   │   ├── MenuPrincipal.jsx
│   │   │   ├── RetirarSaldo.jsx
│   │   │   └── SaldosPersonales.jsx
│   │   ├── error/           # Componentes para manejo de errores
│   │   │   └── Error.jsx
│   │   ├── loginScreen/     # Componentes de la pantalla de inicio de sesión
│   │   │   ├── IngresoPin.jsx
│   │   │   ├── LayoutPublic.jsx
│   │   │   ├── LoginScreen.jsx
│   │   │   ├── Registrar.jsx
│   │   │   └── RegistrarFinish.jsx
│   ├── helpers/             # Archivos auxiliares y utilidades
│   │   └── AuthProvider.jsx
│   └── styles/              # Archivos de estilos
├── .env                     # Archivo de configuración de variables de entorno
├── .gitignore               # Archivos y carpetas que Git debe ignorar
├── package-lock.json        # Archivo de bloqueo de versiones de dependencias
├── package.json             # Archivo de configuración del proyecto y dependencias
├── README.md                # Archivo con la información sobre el proyecto
├── postcss.config.js        # Configuración de PostCSS
├── tailwind.config.js       # Configuración de Tailwind CSS
├── vite.config.js           # Configuración de Vite
├── public/                  # Archivos públicos de la aplicación, como index.html
```

# Descripción de las Capas

## Capa Pública (`public/`)
- **Descripción:** Contiene archivos estáticos que se sirven directamente al navegador sin necesidad de procesamiento adicional por parte del servidor.
- **Contenido:** Imágenes, fuentes, archivos CSS, y otros recursos estáticos que no cambian en función de la aplicación.

## Capa de Código Fuente (`src/`)
- **Descripción:** Contiene todo el código fuente principal de la aplicación, estructurado en diferentes subdirectorios según su función en la aplicación.

  ### Capa de Componentes (`components/`)
  - **Descripción:** Contiene componentes reutilizables de React que encapsulan funcionalidades específicas de la interfaz de usuario.
  
  - **Subdirectorios:**
    
    #### Cajero Automático (`cajeroAutomatico/`)
    - **Descripción:** Componentes específicos para las funcionalidades del cajero automático.
    - **Contenido:**
      - **`ConsignarSaldo.jsx`**: Componente que permite al usuario consignar saldo en su cuenta.
      - **`LayoutPrivate.jsx`**: Layout utilizado para las rutas privadas, asegurando que solo usuarios autenticados puedan acceder.
      - **`MenuPrincipal.jsx`**: Componente que presenta el menú principal del cajero automático.
      - **`RetirarSaldo.jsx`**: Componente que permite al usuario retirar saldo de su cuenta.
      - **`SaldosPersonales.jsx`**: Componente que muestra los saldos personales del usuario.

    #### Manejo de Errores (`error/`)
    - **Descripción:** Componentes que se encargan de la gestión de errores en la aplicación.
    - **Contenido:**
      - **`Error.jsx`**: Componente que muestra mensajes de error al usuario.

    #### Pantalla de Inicio de Sesión (`loginScreen/`)
    - **Descripción:** Componentes relacionados con la pantalla de inicio de sesión y el proceso de autenticación del usuario.
    - **Contenido:**
      - **`IngresoPin.jsx`**: Componente que permite al usuario ingresar su PIN.
      - **`LayoutPublic.jsx`**: Layout utilizado para las rutas públicas, accesibles para todos los usuarios.
      - **`LoginScreen.jsx`**: Pantalla principal de inicio de sesión de la aplicación.
      - **`Registrar.jsx`**: Componente que permite al usuario registrarse en el sistema.
      - **`RegistrarFinish.jsx`**: Componente que finaliza el proceso de registro de un nuevo usuario.

  ### Capa de Ayudantes (`helpers/`)
  - **Descripción:** Contiene funciones y componentes auxiliares que son reutilizados en diferentes partes de la aplicación.
  - **Contenido:**
    - **`AuthProvider.jsx`**: Componente que provee la funcionalidad de autenticación a la aplicación, manejando el estado de autenticación y autorización.

  ### Capa de Enrutadores (`router/`)
  - **Descripción:** Contiene la configuración y definición de las rutas de la aplicación.
  - **Contenido:**
    - **`Routing.jsx`**: Archivo que configura las rutas principales de la aplicación y asocia cada ruta con su correspondiente componente.

  ### Capa de Estilos (`styles/`)
  - **Descripción:** Contiene todos los archivos de estilos CSS o preprocesadores CSS utilizados para el diseño y apariencia de la aplicación.

## Archivos de Configuración
- **Descripción:** Contiene archivos que configuran herramientas, dependencias y comportamiento general del proyecto.
- **Contenido:**
  - **`.gitignore`**: Define qué archivos y directorios deben ser ignorados por Git.
  - **`eslint.config.js`**: Configura ESLint, una herramienta para asegurar la calidad del código mediante la identificación y corrección de problemas de sintaxis y estilo.
  - **`index.html`**: Archivo HTML principal que actúa como la base de la aplicación web.
  - **`package.json`**: Archivo que especifica las dependencias del proyecto, scripts de npm y otra configuración relacionada con Node.js.
  - **`postcss.config.js`**: Configura PostCSS, una herramienta para transformar CSS con plugins.
  - **`tailwind.config.js`**: Configura Tailwind CSS, un framework de utilidades CSS.
  - **`vite.config.js`**: Configura Vite, una herramienta para el bundling y desarrollo rápido de aplicaciones web.
 
 ## Modelos

## User
- **Descripción:** Representa a los usuarios del sistema.
- **Campos:**
  - **`id`**: Identificador único del usuario.
  - **`username`**: Nombre de usuario.
  - **`password`**: Contraseña encriptada.
  - **`email`**: Correo electrónico del usuario.
  - **`createdAt`**: Fecha de creación del registro.
  - **`updatedAt`**: Fecha de última actualización del registro.

## Transaction
- **Descripción:** Representa las transacciones realizadas por los usuarios.
- **Campos:**
  - **`id`**: Identificador único de la transacción.
  - **`userId`**: Identificador del usuario que realizó la transacción.
  - **`type`**: Tipo de transacción (e.g., depósito, retiro).
  - **`amount`**: Monto de la transacción.
  - **`createdAt`**: Fecha de creación del registro.
  - **`updatedAt`**: Fecha de última actualización del registro.

## Account
- **Descripción:** Representa las cuentas bancarias de los usuarios.
- **Campos:**
  - **`id`**: Identificador único de la cuenta.
  - **`userId`**: Identificador del usuario propietario de la cuenta.
  - **`balance`**: Saldo actual de la cuenta.
  - **`createdAt`**: Fecha de creación del registro.
  - **`updatedAt`**: Fecha de última actualización del registro.


 # Dependencias Utilizadas en el lado del Frontend

- **`bcryptjs`**: Para encriptar contraseñas.
- **`cors`**: Para habilitar CORS (Cross-Origin Resource Sharing).
- **`dotenv`**: Para cargar variables de entorno desde un archivo `.env`.
- **`express`**: Framework web para Node.js.
- **`helmet`**: Para mejorar la seguridad de las aplicaciones Express.
- **`jsonwebtoken`**: Para trabajar con JSON Web Tokens (JWT).
- **`morgan`**: Middleware para registrar solicitudes HTTP.
- **`multer`**: Middleware para manejar la carga de archivos.
- **`mysql2`**: Cliente MySQL para Node.js.
- **`nodemon`**: Herramienta para reiniciar automáticamente el servidor en desarrollo.
- **`pdfkit`**: Para generar archivos PDF.
- **`sequelize`**: ORM (Object-Relational Mapper) para Node.js.
- **`sqlite3`**: Base de datos SQLite.

# Instalación del Frontend

1. El primer paso que debemos seguir es ubicarnos en la carpeta Frontend de la siguiente manera:

   ```bash
   cd .\frontend\
   ```
2. Luego de estar dentro de la carpeta Frontend debemos ingresar a su sub-carperta llamada cajero Automatico de la siguiente manera:
 
   ```bash
   cd .\Cajero Automatico\
   ```
3. Ya estando dentro de Cajero Automatico, podremos instalar todas las dependencias utilizadas en el proyecto para estar al dia, de la siguiente manera:

   ```bash
   npm install
   ```
   o para no escribir toda la palabra install podemos solo escribir lo siguiente:

   ```bash
   npm -i
   ```
4. Ya por ultimo teniendo en cuanta que tenemos todas las dependencias instaladas y estamos en la ruta correcta  **`Cajero Automatico`** procedemos a correr el proyecto de lado del cliente con el siguiente comando:

   ```bash
   npm run dev
   ```
# NOTA
Luego de haber seguidos estas indicaciones, el proyecto el servidor deberia empezar a correr por el puerto **`5173`** sin ningún problema, tener en cuanta tambien la configuración del backend para tener los dos servidores activos, el del servidor y el del cliente, ya que estos deben estar comunicandose entre si.

## Estudiantes

- [@Julian Andres Caracas](https://github.com/julianandrescaracas0623)
- [@Kevin Villegas Pérez](https://github.com/DaR3k6)


   
   
   





