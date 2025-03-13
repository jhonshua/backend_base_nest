API es una aplicación backend construida con NestJS, un framework de Node.js que sigue una arquitectura modular y escalable. Esta API está diseñada para gestionar usuarios y roles, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre estas entidades. Además, incluye funcionalidades avanzadas como:

Gestión de usuarios:

Crear, leer, actualizar y eliminar usuarios.

Asignar roles a los usuarios.

Validar y encriptar contraseñas.

Gestión de roles:

Crear, leer, actualizar y eliminar roles.

Asignar permisos y notificaciones a los roles.

Autenticación y autorización (si decides implementarla en el futuro):

Proteger rutas con JWT (JSON Web Tokens).

Restringir el acceso a ciertas funcionalidades según el rol del usuario.

Conexión a una base de datos relacional:

Usa PostgreSQL para almacenar datos de usuarios y roles.

Utiliza TypeORM como ORM (Object-Relational Mapping) para interactuar con la base de datos.

Variables de entorno:

Configuración flexible mediante un archivo .env.

Uso de @nestjs/config para gestionar las variables de entorno.

Escalabilidad y modularidad:

Estructura modular que permite agregar nuevas funcionalidades fácilmente.

Diseño basado en buenas prácticas de desarrollo de software.


