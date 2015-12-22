## Project boilerplate
>v0.9.1

`Project boilerplate` es una plantilla front-end para la creación de aplicaciones o paginas web rapidas, robustos y adaptables. Pasa más tiempo desarrollando y menos tiempo reinventando la rueda.

### Paquetes:

- [Elixir](http://laravel.com/docs/elixir)
- [Elixir Spritesmith](https://github.com/devfake/laravel-elixir-spritesmith)
- [Elixir Styledown](https://github.com/wochap/laravel-elixir-styledown)
- [Elixir Stylus](https://github.com/JeffreyWay/laravel-elixir-stylus)
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

Ahora solo queda instalar Elixir, el archivo `package.json` define las dependencias del proyecto en Node.js, asi como composer las de PHP. Puedes instalar las dependencias que hace referencia el archivo `package.json` ejecutando:

```sh
$ npm install
```

### Uso

Todos tus archivos van dentro de la carpeta `resources`, la salida de todos los archivos compilados es la carpeta `public`.

#### Compilar con cambios (desarrollo)

Para ejecutar las tareas con cada cambio, escribe:

```shell
  $ gulp watch
```

#### Compilar y minificar* (producción)

Ejecutar todas las tareas y minificar todos los archivos CSS y Javascript:

```shell
  $ gulp --production
```

### Configuración

El proyecto viene pre-configurado para usarlo con `Laravel 5.*`, si deseas trabajar con `Laravel 4` usa la rama `laravel 4`.
