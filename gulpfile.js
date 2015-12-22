var elixir     = require('laravel-elixir');

// elixir.config.bowerDir   = "vendor/bower_components",

// ELixir Laravel 4 or no Laravel project
elixir.config.assetsPath = "assets/";
path = ""; // let empty if Laravel 4 or no Laravel project

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
elixir(function(mix) {
	/* images */
	mix.copy(path + "assets/img/images", "public/img")

	/* fonts */
	.copy(path + "assets/fonts", "public/fonts")

	/* boilerplate scripts */
	.copy(path + "assets/js/boilerplate", "public/landing/js");
});

/* [COMPILE] sass files */
elixir(function (mix) {
	/* landing */
	mix.sass([
		"landing/main.sass"
	], "public/landing/css/main.css");
});

/* [COMPILE] js files */
elixir(function (mix) {
	/* landing */
	mix.scripts([
		"landing/main.js"
	], "public/landing/js/main.js");

	/* dashboard */
	// .scripts([
	//	 "dashboard/main.js"
	// ], "public/dashboard/js/main.js");
});

/* [RELOAD] browserSync */
elixir(function (mix) {
	mix.browserSync({
		files: [ 'app/controllers/**/*', 'app/views/**/*', 'app/routes.php', 'public/**/*' ],
        online: false
	});
});
