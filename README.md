# LND-JS

Repositorio personal de aprendizaje para mis proyectos de JavaScript. Un espacio donde aplico la lógica de programación de manera profesional y enfocada al trabajo en una empresa, haciendo uso además, de los conocimientos de HTML y CSS aprendidos a lo largo del curso.

## Ejercicios de Lógica
TBA.
### Ejercicio ('nombre.js')

## 📂 Documentación
- **index.html:** El visor de nuestros códigos.
- **test.js:** Archivo de prueba para el visor de códigos.
- **README.md:** Este archivo. (duh)
---

## Herramientas y Calidad (Tooling)

Para asegurar que el código sea profesional y legible, he implementado **ESLint** (v10+) con una configuración estricta y multiplataforma.

### Las reglas de ESLint
El código debe cumplir las siguientes reglas para pasar la prueba:
- **Indentación:** 2 espacios (Estándar moderno).
- **Puntuación:** Punto y coma (';') obligatorio al final de cada sentencia.
- **Citas:** Comillas dobles (' "" ') para strings.
- **Declaraciones:** Preferencia absoluta por 'const' sobre 'let'.
- **Igualdad:** Uso estricto de '===' (igualdad absoluta).

### Comandos (Scripts)
He configurado `package.json` para que funcione tanto en **PC (VS Code)** como en **Android (Termux/Acode)** sin problemas de permisos.

- `npm run lint`: **🕵️‍♂️ El Ojo que Todo lo Ve.** Escrudiña el código en busca de errores y malas prácticas sin alterar nada.
- `npm run fix`: **🩹 La venda.** Escrudiña el código y **repara automáticamente** los problemas de formato (espacios, comillas, puntos y coma), guardando los cambios en el código.

---
*Configuración probada en Node.js v25+ (PC) y Acode + Termux (Android).*