Master Front End XVII - Módulo 4.3 - Frameworks - Vue Laboratorio
Intro
El laboratorio del módulo de Vue, lo hemos divido en dos secciones.

Básico: Aplicar las técnicas que hemos visto en la parte práctica de Vue a una aplicación, pero dejando espacio por si queréis centraros en otro framework.
Opcional: Para experimentar con requerimientos cercanos a los que os podéis encontrar en el mundo real.
IMPORTANTE: estas prácticas las tenéis que subir a vuestro repositorio de Github (o si lo prefirís Gitlab o Bitbucket público).

Ejercicio: ToDo App con Vue (Básico)
En este ejercicio, deberás crear una aplicación web utilizando Vue que permita a los usuarios administrar una lista de tareas ("ToDo tasks list"). La interfaz de usuario debe tener los siguientes elementos:

Un formulario con un campo de texto donde los usuarios puedan ingresar el nombre de una tarea.
También debe contener un botón "Add" que agregue una tarea a la lista.
Una lista de tareas, donde cada tarea tenga:
un checkbox para marcar una tarea como completada, que pueda ser activado o desactivado.
un botón "Remove" que permita eliminarla de la lista.
La lista de tareas debe ser almacenada en el estado de la aplicación utilizando un store de Pinia.

Una vez se añada una tarea, el campo de texto debe limpiarse automáticamente.

Requisitos Adicionales (Opcional):
La aplicación anterior es un ejemplo básico de una lista de tareas. Para aquell@s que deseen profundizar en Vue y en la creación de aplicaciones web, se pueden añadir funcionalidades adicionales a la aplicación, como las siguientes:

Agregar estilos CSS para mejorar la apariencia de la aplicación: cualquier enfoque es válido, ya sea utilizando CSS puro, Tailwind CSS u otro framework de CSS.
Hacer la app responsive y para poder verla bien e interactuar con ella en dispositivos móviles.
Añadir la persistencia de estado utilizando un Storage local (como localStorage o IndexedDB) para que las tareas se mantengan incluso después de recargar la página o cerrar y abrir el navegador.
Para los botones de "Add" y "Remove", se pueden utilizar iconos o emojis. Es importante asegurarse de que dichos botones sean accesibles, utilizando atributos ARIA o texto "escondido" que sea visible solo para lectores de pantalla en caso de que los botones no contengan texto visible y solo muestren iconos o emojis.
Agregar funcionalidades adicionales, como poder editar el contenido de una tarea ya existente (al hacer doble click, se convierte en un input type="text") y guardar los cambios al pulsar Enter o "perder el foco" (@blur).
Agregar una funcionalidad de filtrado para mostrar solo las tareas completadas, solo las tareas pendientes o todas las tareas.
Agregar una funcionalidad de búsqueda para filtrar las tareas por su contenido.
Agregar una funcionalidad para reordenar las tareas por su contenido o por su estado (completadas primero o pendientes primero).
Marcar todas las tareas como completadas o como pendientes.
Borrar todas las tareas completadas.
