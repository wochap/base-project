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

elixir(function (mix) {
    mix.rubySass([
        "main.scss"
    ],"public/css/style.css");
});

elixir(function (mix) {
    mix.scripts([
        "main.js"
    ], "public/js/main.js");
});

elixir(function (mix) {
    mix.spritesmith(null, {
        cssOutput: 'resources/assets/sass/vendor',
        cssName: '_sprite.scss',
        cssOpts: {
            cssSelector: function (item) {
                return '.sprite-' + item.name;
            }
        }
    });
    mix.livereload();
});
