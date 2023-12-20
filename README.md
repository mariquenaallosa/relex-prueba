# 💻 Relex Test

Este proyecto es un ejemplo práctico de una aplicación web desarrollada con Angular para gestionar publicaciones. Utiliza una arquitectura modular para organizar el código y aprovecha servicios y modelos en el núcleo de la aplicación. El módulo "posts" se especializa en la gestión de publicaciones, mientras que el módulo "shared" proporciona componentes reutilizables para toda la aplicación.

## 📌 Características principales

 - Listado paginado y filtrado de publicaciones.
 - Creación de nuevas publicaciones mediante un formulario.
 - Uso de servicios para comunicarse con el servidor (JSONPlaceholder).
 - Estilos gestionados con Bootstrap.
## 🏗 Estructura del Proyecto

```plaintext
src/
|-- app/
|   |-- core/
|   |   |-- models/
|   |   |   |-- post.ts
|   |   |-- services/
|   |   |   |-- post.service.ts
|   |-- posts/
|   |   |-- components/
|   |   |   |-- post-create/
|   |   |   |-- post-list/
|   |   |-- posts-routing.module.ts
|   |   |-- posts.module.ts
|   |-- shared/
|   |   |-- components/
|   |   |   |-- navbar/
|   |   |-- shared.module.ts
|-- app-routing.module.ts
|-- app.module.ts
|-- app.component.html
|-- app.component.css
|-- app.component.ts
|-- app.component.spec.ts
|-- assets/
```

## ⌨🖱 Instalación y Ejecución

Sigue las instrucciones detalladas a continuación para clonar, instalar y ejecutar la aplicación:


1. Clona el repositorio:

   ```bash
   git clone https://github.com/mariquenaallosa/relex-prueba.git

2. Instala las dependencias

    ```bash
    cd relex-prueba
    npm install

3. Ejecutar la aplicación

    ```bash
    ng serve

Este conjunto de comandos te permitirá tener la aplicación en funcionamiento localmente.

## Demo 

*próximamente*


## 📩 Contacto
🙋Si te interesa ponerte en contacto conmigo podés hacerlo a través de:
**[LinkedIn ](https://www.linkedin.com/in/mariquenaallosa/)**
