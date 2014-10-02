/*
 *  SVG Fallbackify - v0.0.2
 *  An easy way to detect and add fallbacks for your SVG
 *  http://seethroughtrees.github.io/svg-fallbackify
 *
 *  Made by seethroughtrees
 *  Under MIT License
 */
// make AMD browserify compatible

;(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    factory(require("jquery"));
  } else {
    factory(window.jQuery);
  }

}(function($, window, document, undefined) {

  var pluginName = "svgFallbackify",
    defaults = {
      ext: "png"
    };

  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init(this.settings);
  }


  // check if data-svg-fallback IS image extension
  function isExt(val) {
    var reg = /^(?:jpg|gif|png|svg|jpeg)$/i;
    return val.match(reg);
  }

  // check if data-svg-fallback HAS image extension
  function hasExt(val) {
    var reg = /\.(?:jpg|gif|png|svg|jpeg)$/i;
    return val.match(reg);
  }

  // check that filename is an SVG
  function isSvg(val) {
    var reg = /\.svg$/ig;
    return reg.test(val);
  }

  // replace svg extension with another
  function replaceSvg(val, ext) {
    var reg = /(svg)$/i;
    return val.replace(reg, ext);
  }

  // replace img src with expected value
  function getFallback($el, val, ext) {
    if (val === "") {
      $el.attr("src", replaceSvg($el.attr("src"), ext));
    } else if (isExt(val)) {
      $el.attr("src", replaceSvg($el.attr("src"), val));
    } else if (isSvg(val)) {
      $el.attr("src", replaceSvg(val, ext));
    } else if (!hasExt(val)) {
      $el.attr("src", val + "." + ext);
    } else {
      $el.attr("src", val);
    }
  }

  $.extend(Plugin.prototype, {

    init: function(settings) {
    	var $el         = $(this.element),
          fallbackVal = $el.data("svg-fallback"),
    	    srcVal      = $el.attr("src"),
          supportsSvg = this.supportsSvg();

    	if (typeof fallbackVal === "undefined") {
    		throw new Error("Element must have data-svg-fallback attribute!");
    	}

      // if supports svg but svg is not in src
      // and fallback has no ext or is svg
      if (supportsSvg && !isSvg(srcVal) &&
            (!hasExt(fallbackVal) || isSvg(fallbackVal))) {
        getFallback($el, fallbackVal, "svg");
      }

      // if does not support svg, replace with fallback
      if (!supportsSvg) {
        getFallback($el, fallbackVal, settings.ext);
      }

    },

    supportsSvg: function() {
      return !!document && !!document.createElementNS &&
        !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
    }
  });

  $.fn[pluginName] = function (options) {
    var plugin;
    this.each(function() {
      plugin = $.data(this, "plugin_" + pluginName);
      if (!plugin) {
        plugin = new Plugin(this, options);
        $.data(this, "plugin_" + pluginName, plugin);
      }
    });
    return plugin;
  };

}(jQuery, window, document)));
