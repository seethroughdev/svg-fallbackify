## SVG Fallbackify

[![Build Status](https://travis-ci.org/seethroughtrees/svg-fallbackify.svg?branch=master)](https://travis-ci.org/seethroughtrees/svg-fallbackify)

SVG Fallbackify is an easy way to use SVG images on your site and provide an automated
fallback for users with browsers that don't support them.

#### Install

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

#### Usage

*SVG Fallbackify* tries to be flexible for how you set up your image.  But the
most important part is to add the **data-svg-fallback** attribute to your image.

And of course, have a png/jpg/gif somewhere on your site to fallback to.

Ex.

``` html

<img src="path-to-img.svg" data-svg-fallback />

```

That data attribute will tell the element to replace the .svg extension if the
browser does not handle SVG.

So if in your same folder, you have a file ```path-to-img.png``` it will automatically
be replaced.

#### Options

You can add your fallback file in a few ways.

If your images are in the same folder and are a png, you can just add the ```data-svg-fallback``` attribute.

``` html

<img src="path-to-img.svg" data-svg-fallback />

```

If your images are in the same folder, and are not a png.  You have a couple choices:

Specify the extension in the data-attribute

``` html
<img src="path-to-img.svg" data-svg-fallback="jpg" />
```

Or if it's the same everywhere, you can pass the option in when calling the plugin:

```javascript
$('[data-svg-fallback]').svgFallbackify({
  ext: 'jpg'
});
```




# Contributing

Before sending a pull request remember to follow [jQuery Core Style Guide](http://contribute.jquery.org/style-guide/js/).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

#### Have you created a plugin from our boilerplate?

[Let us know!](https://github.com/jquery-boilerplate/boilerplate/wiki/Sites) It’s interesting to see what features others have come up with.

