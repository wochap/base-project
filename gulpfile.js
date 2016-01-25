var path = 'resources/' // let empty if Laravel 4 or no Laravel project
var elixir = require('laravel-elixir')
// var postStylus = require('poststylus')
// require('laravel-elixir-spritesmith')
// require('wo-laravel-elixir-jade')
// require('laravel-elixir-styledown')
// require('laravel-elixir-stylus')

// Elixir config Bower directory
// elixir.config.bowerDir = 'vendor/bower_components'
// ELixir config Laravel 4
// elixir.config.assetsPath = 'assets/'
// Elixir config Autoprefix
// elixir.config.css.autoprefix.options.browsers = ['last 2 versions', '> 1%', 'IE 9']

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

/* [COPY] images and fonts to public folder */
elixir(function (mix) {
  /* images */
  mix.copy(path + 'assets/img/images', 'public/img')

  /* fonts */
  .copy(path + 'assets/fonts', 'public/fonts')

  /* boilerplate scripts */
  .copy(path + 'assets/js/boilerplate', 'public/landing/js')
})

/* [GENERATE] sprites */
// elixir(function (mix) {
//   mix.spritesmith(null, {
//     cssName: '_sprite.scss',
//     cssOpts: {
//       cssSelector: function (item) { return '.sprite-' + item.name }
//     },
//     cssOutput: path + 'assets/sass/landing/vendor',
//     imgOutput: 'public/img',
//     imgPath: '../../img/sprite.png'
//   })
// })

/* [COMPILE] jade files */
// elixir(function (mix) {
//   mix.jade('**/*.jade', 'public', {
//     basedir: path + 'views',
//     pretty: true, // no minifi
//     extension: '.html'
//   })
// })

/* [COMPILE] styledown */
// elixir(function (mix) {
//   mix.styledown('components/*.md', 'public/docs/styledown.html')
// })

/* [COMPILE] sass files */
elixir(function (mix) {
  /* landing */
  mix.sass([
    'landing/main.scss'
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
