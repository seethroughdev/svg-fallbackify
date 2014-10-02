## SVG Fallbackify

[![Build Status](https://travis-ci.org/seethroughtrees/svg-fallbackify.svg?branch=master)](https://travis-ci.org/seethroughtrees/svg-fallbackify)

SVG Fallbackify is an easy way to use SVG images on your site and provide an automated
fallback for users with browsers that don't support them.

#### Install

Download the [full](https://github.com/seethroughtrees/svg-fallbackify/blob/master/dist/jquery.svg-fallbackify.js) or [minified](https://github.com/seethroughtrees/svg-fallbackify/blob/master/dist/jquery.svg-fallbackify.min.js), or grab it from Bower

``` bower install svg-fallbackify```

#### Usage

Currently the script uses jQuery as a dependency.  So make sure you load it after
jQuery.

``` javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="bower_components/svg-fallbackify/jquery.svg-fallbackify.js"></script>
```

Then just add the method here:

``` javascript
  $('[data-svg-fallback]').svgFallbackify();
```




