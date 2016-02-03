## Base Project
>v1.0.0

Una base para cualquier proyecto `frontend`.

### Elixir:

Este `project` usa [Laravel Elixir](https://laravel.com/docs/5.2/elixir) para `serve`, `build` y `watch` todos tus `assets`.

#### Paquetes

- [Elixir](http://laravel.com/docs/elixir)
- [Elixir Spritesmith](https://github.com/devfake/laravel-elixir-spritesmith)
- [Elixir Styledown](https://github.com/wochap/laravel-elixir-styledown)
- [Elixir Stylus](https://github.com/JeffreyWay/laravel-elixir-stylus)
- [Elixir Jade](https://github.com/wochap/laravel-elixir-jade)
- [Post Stylus](https://github.com/seaneking/poststylus)

### Instalación

#### Instalar Node

Antes debes asegurarte de que [Node.js](https://nodejs.org/en/) este instalado en tu S.O.

```sh
$ node -v
```

#### Instalar Gulp

Lo siguiente es instalar [Gulp](http://gulpjs.com/) globalmente:

```sh
$ npm install --global gulp
```
#### Instalar dependencias

Ahora solo queda instalar Elixir, el archivo `package.json` define las dependencias del proyecto en Node.js, asi como composer las de PHP. Puedes instalar las dependencias que hacen referencia al archivo `package.json` ejecutando:

```sh
$ npm install
```

### Uso

Todos tus `assets` van dentro de la carpeta `resources`, la salida de todos los archivos compilados es la carpeta `public`.

#### Compilar con cambios (desarrollo)

Para ejecutar las tareas con cada cambio, escribe:

```shell
  $ gulp watch
```

#### Compilar y minificar (producción)

Ejecutar todas las tareas y minificar todos los archivos CSS y Javascript:

```shell
  $ gulp --production
```

### Configuración

El proyecto viene pre-configurado para usarlo con `Laravel 5.*`, si deseas trabajar con `Laravel 4` usa la rama `laravel 4`.

## Changelog

### 1.0.0

* Rename `Project Boilerplate` to `Base Project`
* Update jquery version
* Fix BrowserSync doesn't inject CSS
* Update tabs 4 to 2 spaces
* Update packages version
