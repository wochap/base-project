<!DOCTYPE html>
<html class="no-js" lang="es">
  <head>
    <!--
      Description: `Base Project` Una base para cualquier proyecto frontend.
      Version: 1.0.0
      Author: Gean Carlos Bonifacio
    -->

    <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>

    {{-- #DNS prefetching --}}
    {{-- http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers --}}
    <link rel="dns-prefetch" href="//ajax.googleapis.com"/>
    <link rel="dns-prefetch" href="//google-analytics.com"/>

    {{-- #Asset Prefetching --}}
    {{-- Fetch and Download Assets before requested by the user  --}}
    {{-- http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/#section:resource-prefetching --}}
    <link rel="prefetch" href=""/>

    {{-- #Page Prefetching --}}
    {{-- http://calendar.perfplanet.com/2012/speed-up-your-site-using-prefetching --}}
    <link rel="prefetch" href="{{ URL::route('') }}"/>

    <title>@yield('title', 'Base Project')</title>
    <meta name="description" content="@yield('description', '')"/>

    {{-- Mobile Metas --}}
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
    {{-- <link rel="apple-touch-icon" href="apple-touch-icon.png"/> --}}
    {{-- <link rel="icon" type="image/ico" href="favicon.ico" sizes="32x32"/> --}}
    {{-- <link rel="icon" type="image/png" href="favicon.png" sizes="32x32"/> --}}

    <link rel="stylesheet" href="{{ asset('landing/css/main.css') }}"/>
    <script src="{{ asset('base/js/modernizr-2.8.3.min.js') }}"></script>
    <!--[if lt IE 9]>
      <script src="{{ asset('base/js/lt-ie-9.min.js') }}"></script>
      <script src="{{ asset('base/js/calc.min.js') }}"></script>
    <![endif]-->
  </head>
  <body class="@yield('scope', '')">
    <!--[if lt IE 8]>
      <div class="browsehappy">
        <p>You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to improve your experience.</p>
      </div>
    <![endif]-->

    {{-- content --}}
    <div id="root">
      @yield('content', '<h1>Work!</h1>')
    </div>
    {{-- /content --}}

    {{-- scripts --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="{{ asset('base/js/jquery-2.2.0.min.js') }}"><\/script>')</script>
    <script>$.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });</script>
    @yield('scripts')
    {{-- /scripts --}}

    {{-- Google Analytics --}}
  </body>
</html>
