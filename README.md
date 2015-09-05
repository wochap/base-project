# Project Boilerplate

Esto es un boilerplate diseñado para empezar a  desarrollar rapidamente cualquier proyecto Front end.

El boilerplate trae consigo los siguientes paquetes:

- [Laravel Elixir](http://laravel.com/docs/elixir)
- [Elixir Livereload](https://github.com/ehlovader/laravel-elixir-livereload)
- [Elixir Spritesmith](https://github.com/devfake/laravel-elixir-spritesmith)

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
