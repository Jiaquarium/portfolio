import serialize from 'serialize-javascript';
import objectValues from 'object.values';

const dnsPrefetch = hosts =>
    objectValues(hosts)
        .map(
            host =>
                `
        <link rel="dns-prefetch" href="//${host}">
        <link rel="preconnect" href="https://${host}">`
        )
        .join('');

export const renderPage = ({
    isProductionEnvironment,
    hosts,
    staticPath,
    appMarkup,
    bundleFileName,
    styleTags,
    initialState,
}) =>
    `
<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <meta property="og:description" content="Visual arts portfolio of James Gu." >
    <meta property="og:title" content="James J Gu | Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="http://jamesjgu.com/static/raw-media/letting-go-hi.jpg" />
    <meta property="og:image:secure_url" content="http://jamesjgu.com/static/raw-media/letting-go-hi.jpg" />
    <meta property="og:image:width" content="2914" />
    <meta property="og:image:height" content="2176" />
    <meta property="og:url" content="http://jamesjgu.com/" />
    <meta property="og:site_name" content="Portfolio">

    <meta name="twitter:description" content="Visual arts portfolio of James Gu.">
    <meta name="twitter:image:src" content="http://jamesjgu.com/static/raw-media/letting-go-hi.jpg" />
    <meta name="twitter:card" content="summary_large_image">

    <meta property="og:image:type" content="image/jpeg" />

    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="static/manifest.json">
    <link rel="shortcut icon" href="./daemon.png">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the 'public' folder during the build.
      Only files inside the 'public' folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running 'npm run build'.
    -->
    <title>James J Gu | Portfolio</title>
    <meta name="author" content="James Gu">
    <meta name="description" content="Visual arts portfolio of James Gu.">

    <link rel="preload" href="static/js/${bundleFileName}.js" as="script">
    <link rel="prefetch" href="static/js/${bundleFileName}.js">

    <link rel="preload" href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700" as="style">
    <link rel="prefetch" href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700">

    ${dnsPrefetch({
        gstatic: 'fonts.gstatic.com',
        gapis: 'fonts.googleapis.com',
        ...hosts,
    })}

    <style>
    /* RESET -- http://meyerweb.com/eric/tools/css/reset/ 2. v2.0 | 20110126
      License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
        list-style: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a:link {
        color:black;
    }
    a:visited {
        color:black;
    }
    a:hover {
        color:black;
    }
    a:focus {
        color:black;
    }
    a:active {
        color:black;
    }

    button {
        border: 0;
        background: none;
        padding: 0;
    }

    button:focus {
        outline: none;
    }

    /* Add box sizing */
    *, *:before, *:after {
      box-sizing: border-box;
    }
    </style>

    ${styleTags}
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>

    <div id="root">${appMarkup}</div>

    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run 'npm start' or 'yarn start'.
      To create a production bundle, use 'npm run build' or 'yarn build'.
    -->

    <!-- Google Analytics -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-106198272-1', 'auto');
        ga('send', 'pageview');
    </script>

    <!-- Load Initial State -->
    <script type="application/javascript">window.__INITIAL_STATE__ = ${serialize(
        initialState,
        { isJSON: true }
    )}</script>

    <!-- Load Bundle -->
    <script type="text/javascript" src="static/js/${bundleFileName}.js"></script>

    <!-- Load Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700" rel="stylesheet">
  </body>
</html>
`;
