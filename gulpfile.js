var path = 'resources/' // let empty if Laravel 4 or no Laravel project
var elixir = require('laravel-elixir')
// var postStylus = require('poststylus')
require('laravel-elixir-spritesmith')
require('laravel-elixir-styledown')
// require('laravel-elixir-stylus')
require('elixir-jade')

// Elixir config Bower directory
// elixir.config.bowerDir = 'vendor/bower_components'
// ELixir config Laravel 4 or no Laravel project
// elixir.config.assetsPath = 'assets/'
// Elixir config autoprefix
// elixir.config.css.autoprefix.options.browsers = ['last 2 versions', '> 1%', 'IE 10']

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
      cssSelector: function (item) { return '.sprite-' + item.name }
    },
    cssOutput: path + 'assets/sass/landing/vendor',
    imgOutput: 'public/img',
    imgPath: '../../img/sprite.png'
  })
})

/* [GENERATE] styledown */
elixir(function (mix) {
  mix.styledown({
    src: path + 'assets/styledown/components/*.md',
    config: path + 'assets/styledown/config.md', // Path to config.md
    filename: 'styledown.html', // Path to output html
    dest: 'public/docs'
  })
})

/* [COPY] images and fonts to public folder */
elixir(function (mix) {
  /* images */
  mix.copy(path + 'assets/img/images', 'public/img')

  /* fonts */
  .copy(path + 'assets/fonts', 'public/fonts')

  /* boilerplate scripts */
  .copy(path + 'assets/js/boilerplate', 'public/landing/js')
})

/* [COMPILE] jade files */
// elixir(function (mix) {
//   mix.jade({
//     baseDir: path,
//     dest: 'public/views',
//     pretty: true, // no minifi
//     search: '**/*.jade',
//     src: 'views/',
//     extension: '.html',
//     basedir: path + 'views/',  // option not available
//     watch: path + 'views/**/*.jade'  // option not available
//   })
// })

/* [COMPILE] sass files */
elixir(function (mix) {
  /* landing */
  mix.sass([
    'landing/main.sass'
  ], 'public/landing/css/main.css')
})

/* [COMPILE] stylus files */
// elixir(function (mix) {
//   /* landing */
//   mix.stylus([
//     'landing/main.styl'
//   ], 'public/landing/css/main.css', {
//     use: [postStylus(['lost', 'postcss-position'])] // no olvides instalar estos paquetes
//   })
// })

/* [COMPILE] js files */
elixir(function (mix) {
  /* landing */
  mix.scripts([
    'landing/main.js'
  ], 'public/landing/js/main.js')

  /* dashboard */
  // .scripts([
  //   'dashboard/main.js'
  // ], 'public/dashboard/js/main.js')
})

/* [RELOAD] browserSync */
elixir(function (mix) {
  /* Elixir laravel 5 */
  mix.browserSync({
    files: [ 'app/**/*', 'public/**/*', 'resources/views/**/*' ],
    online: false // localtunel
  })

  /* Elixir laravel 4 */
  // mix.browserSync({
  //   files: [ 'app/controllers/**/*', 'app/views/**/*', 'app/routes.php', 'public/**/*' ],
  //   online: false
  // })

  /* Elixir no laravel project */
  // mix.browserSync({
  //   server: {
  //     baseDir: 'public',
  //     directory: true,
  //     index: 'index.html' // doesn't work
  //   },
  //   files: [ 'public/**/*' ],
  //   online: false, // localtunel
  //   proxy: false
  // })
})
