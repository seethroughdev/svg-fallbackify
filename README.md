## SVG Fallbackify

[![Build Status](https://travis-ci.org/seethroughtrees/svg-fallbackify.svg?branch=master)](https://travis-ci.org/seethroughtrees/svg-fallbackify)

SVG Fallbackify is an easy way to use SVG images on your site and provide an automated
fallback for users with browsers that don't support them.

It will basically detect SVG support and change the image src accordingly.

==================

### Install

Download the [full](https://github.com/seethroughtrees/svg-fallbackify/blob/master/dist/jquery.svg-fallbackify.js) or [minified](https://github.com/seethroughtrees/svg-fallbackify/blob/master/dist/jquery.svg-fallbackify.min.js), or grab it from Bower

``` bower install svg-fallbackify```

Currently the script uses jQuery as a dependency.  So make sure you load it after
jQuery.

``` html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="bower_components/svg-fallbackify/jquery.svg-fallbackify.js"></script>
```

Then just call the plugin somewhere in your js:

``` javascript
$('[data-svg-fallback]').svgFallbackify();
```

==================

The default extension to replace is ```png```, but you can override that:

``` javascript
$('[data-svg-fallback]').svgFallbackify({
  ext: 'jpg'
});
```
==================

### Usage

**SVG Fallbackify** tries to be flexible in how you set up your image.  But the
most important part is to add the **data-svg-fallback** attribute.

And of course, have a png/jpg/gif somewhere on your site to fallback to.

Ex.

``` html
<img src="path-to-img.svg" data-svg-fallback />
```

The data attribute will tell the element to replace the .svg extension if the
browser does not handle SVG.

So if in your same folder, you have a file ```path-to-img.png``` it will automatically
be replaced.

==================

### More

You can add your fallback file in a few ways.

If your images are in the same folder and are a png, you can just add the ```data-svg-fallback``` attribute.

``` html
<img src="path-to-img.svg" data-svg-fallback />
```

You can also add a few other options into the ```data-svg-fallback`` attribute to make it more specific.

If you want to override the extension of the file being replaced, just add the extension:

``` html
<img src="path-to-img.svg" data-svg-fallback="jpg" />
```

If you want to add a separate image file or path to the fallback, you can provide it there:

``` html
<img src="path-to-img.svg" data-svg-fallback="different-image-path.jpg" />
```

Or you might want to avoid loading the svg at all if the browser doesn't support it.

I personally use this method to load the images async, and only once.

``` html
<!-- I put a 1px blank.gif file in my folder to cache and load. -->
<img src="blank.gif" data-svg-fallback="path-to-image.svg" />
```

==================

### Methods

You also get a method in case you need to check for SVG support on your own as well.

```javascript
$('[data-svg-fallback]').svgFallbackify().supportsSvg();
```

Will return ```true``` if the browser supports it, and ```false``` if it doesn't.

*I am currently using the [modernizr](http://modernizr.com/) technique for detecting SVG support.
If someone has a better suggestion, I'm all ears for improving it.  But with my testing, it works so far.*


==================


# Contributing

Before sending a pull request remember to follow [jQuery Core Style Guide](http://contribute.jquery.org/style-guide/js/).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

==================

#### Have you created a plugin from our boilerplate?

[Let us know!](https://github.com/jquery-boilerplate/boilerplate/wiki/Sites) It’s interesting to see what features others have come up with.

