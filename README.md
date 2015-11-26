# Project Boilerplate

Usa elixir en laravel 4.

El boilerplate trae consigo los siguientes paquetes:

- [Laravel Elixir](http://laravel.com/docs/elixir)

## Instalación

### Instalar Node

Antes debes asegurarte de que [Node.js](https://nodejs.org/en/) este instalado en tu S.O

```sh
$ node -v
```

### Instalar Gulp

Lo siguiente es instalar [Gulp](http://gulpjs.com/) globalmente:

```sh
$ npm install --global gulp
```
### Instalar dependencias

Ahora solo queda instalar Elixir, el archivo `package.json` define las dependencias del proyecto en Node.js, asi como composer las de PHP. Puede instalar las dependencias que hace referencia el archivo `package.json` ejecutando:

```sh
$ npm install
```

## Uso

Todos tus archivos van dentro de la carpeta `resources`, la salida de todos los archivos compilados es la carpeta `public`.

### Compilar con cambios

Para ejecutar las tareas con cada cambio, escribe:

```shell
  $ gulp watch
```

### Compilar y minificar*

Ejecutar todas las tareas y minificar todos los archivos CSS y Javascript:

```shell
  $ gulp --production
```
