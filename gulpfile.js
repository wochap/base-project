var elixir = require('laravel-elixir');
require('laravel-elixir-spritesmith');
require('laravel-elixir-livereload');

// ELixir laravel 4
// elixir.config.assetsPath = 'assets/';

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
        cssOutput: 'resources/assets/sass/landing/vendor',
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
    // landing
    mix.rubySass([
        "landing/main.scss"
    ],"public/landing/css/main.css")

    // dashboard
    .rubySass([
        "dashboard/main.scss"
    ],"public/dashboard/css/main.css");
});

/* [COMPILE] js files */
elixir(function (mix) {
    // landing
    mix.scripts([
        "landing/main.js"
    ], "public/landing/js/main.js")

    // dashboard
    .scripts([
        "dashboard/main.js"
    ], "public/dashboard/js/main.js");
});

/* [RELOAD] livereload */
elixir(function (mix) {
    mix.livereload([ 'app/**/*', 'public/**/*', 'resources/views/**/*' ]);

    // ELixir laravel 4
    // mix.livereload([ 'app/controllers/**/*', 'app/views/**/*', 'app/routes.php', 'public/**/*' ]);
});

/* [RELOAD] browserSync */
// elixir(function (mix) {
//     mix.browserSync({
//         files: [ 'app/**/*', 'public/**/*', 'resources/views/**/*' ]
//     }); 
    
    // ELixir laravel 4
    // mix.browserSync({
    //     files: [ 'app/controllers/**/*', 'app/views/**/*', 'app/routes.php', 'public/**/*' ]
    // });
// });
