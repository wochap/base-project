var elixir = require('laravel-elixir');
require('laravel-elixir-spritesmith');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// sprites
elixir(function (mix) {
    mix.spritesmith(null, {
        imgOutput: 'public/img',
        cssOutput: 'resources/assets/sass/vendor',
        cssName: '_sprite.scss',
        cssOpts: {
            cssSelector: function (item) {
                return '.sprite-' + item.name;
            }
        }
    });
});

// sass
elixir(function (mix) {
    mix.rubySass([
        "main.scss"
    ],"public/css/style.css");
});

// js
elixir(function (mix) {
    mix.scripts([
        "main.js"
    ], "public/js/main.js");
});

// livereload
elixir(function (mix) {
    mix.livereload();
});
