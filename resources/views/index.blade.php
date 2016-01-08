<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <!--
            Description: `Project boilerplate` es una plantilla front-end para la creación de aplicaciones o paginas web rapidas, robustos y adaptables. Pasa más tiempo desarrollando y menos tiempo reinventando la rueda.
            Version: v0.9.4
            Author: Gean Bonifacio
        -->

        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>

        <!-- #DNS prefetching -->
        {{-- http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers --}}
        <link rel="dns-prefetch" href="//ajax.googleapis.com"/>
        <link rel="dns-prefetch" href="//google-analytics.com"/>

        <!-- #Asset Prefetching -->
        {{-- Fetch and Download Assets before requested by the user  --}}
        {{-- http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/#section:resource-prefetching --}}
        <link rel="prefetch" href=""/>

        <!-- #Page Prefetching -->
        {{-- http://calendar.perfplanet.com/2012/speed-up-your-site-using-prefetching --}}
        <link rel="prefetch" href="{{ URL::route('home') }}"/>

        <title>Project framework</title>
        <meta name="description" content=""/>

        <!-- Mobile Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>

        {{-- og tags Facebook --}}
        {{-- /og tags Facebook --}}
        {{-- og tags Google+ --}}
        {{-- /og tags Google+ --}}
        {{-- Twitter Cards --}}
        {{-- /Twitter Cards --}}

        {{-- Place favicon.ico and apple-touch-icon(s) in the root directory --}}
        {{-- http://mathiasbynens.be/notes/rel-shortcut-icon --}}
        {{-- http://mathiasbynens.be/notes/touch-icons --}}
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        <link rel="icon" type="image/ico" href="favicon.ico" sizes="32x32"/>
        <link rel="icon" type="image/png" href="favicon.png" sizes="32x32"/>

        <link rel="stylesheet" href="{{ asset('landing/css/main.css') }}"/>
        <script src="{{ asset('landing/js/modernizr-2.8.3.min.js') }}"></script>
        <!--[if lt IE 9]>
            <script src="{{ asset('landing/js/vendor/lt-ie-9.min.js') }}"></script>
            <script src="{{ asset('landing/js/vendor/calc.min.js') }}"></script>
        <![endif]-->
    </head>
    <body class="@yield('scope', 's-home')">
        <!--[if lt IE 8]>
            <div class="browsehappy">
                <p>You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to improve your experience.</p>
            </div>
        <![endif]-->

        {{-- content --}}
        <div class="x-main">
            <h1>Hi</h1>
        </div>
        {{-- /content --}}

        {{-- scripts --}}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="landing/js/vendor/jquery-2.1.4.min.js"><\/script>')</script>
        <script type="text/javascript">$.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });</script>
        <script src="{{ asset('landing/js/plugins.js') }}"></script>
        <script src="{{ asset('landing/js/main.js') }}"></script>
        {{-- /scripts --}}

        {{-- Google Analytics --}}
    </body>
</html>
