var elixir = require('laravel-elixir');
require('laravel-elixir-spritesmith');
require('laravel-elixir-livereload');

// ELixir laravel 4
// elixir.config.assetsDir = 'assets/';

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

/* [GENERATE] sprites */
elixir(function (mix) {
    mix.spritesmith(null, {
        cssName: '_sprite.scss',
        cssOpts: {
            cssSelector: function (item) {
                return '.sprite-' + item.name;
            }
        },
        cssOutput: 'resources/assets/sass/front-page/vendor',
        imgOutput: 'public/img',
        imgPath  : '../../img/sprite.png'
    });
});

/* [COPY] images and fonts to public folder */
elixir(function(mix) {
    // images
    mix.copy("resources/assets/img/images", "public/img")
    // fonts
    .copy("resources/assets/fonts", "public/fonts");
});

/* [COMPILE] sass files */
elixir(function (mix) {
    // front page
    mix.rubySass([
        "front-page/main.scss"
    ],"public/css/front/main.css")

    // back page
    .rubySass([
        "back-page/main.scss"
        ],"public/css/back/main.css";
});

/* [COMPILE] js files */
elixir(function (mix) {
    // front page
    mix.scripts([
        "front-page/main.js"
    ], "public/js/front/main.js")

    // back page
    .scripts([
        "back-page/main.js"
    ], "public/js/back/main.js");
});

/* [RELOAD] livereload */
elixir(function (mix) {
    mix.livereload([ 'app/**/*', 'public/**/*', 'assets/**/*', 'resources/**/*' ]);
});
