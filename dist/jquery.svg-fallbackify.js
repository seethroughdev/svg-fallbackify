/*
 *  SVG Fallbackify - v0.0.2
 *  An easy way to detect and add fallbacks for your SVG
 *  http://seethroughtrees.github.io/svg-fallbackify
 *
 *  Made by seethroughtrees
 *  Under MIT License
 */
;(function($, window, document, undefined) {

  var pluginName = "svgFallbackify",
    defaults = {
      defaultExt: "png"
    };

  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init(defaults);
  }

  var svgUrl = "http://www.w3.org/2000/svg";

  $.extend(Plugin.prototype, {
    init: function(defaults) {
    	console.log(defaults);
    },
    isSupported: function() {
      return !!document && !!document.createElementNS &&
        !!document.createElementNS(svgUrl, "svg").createSVGRect;
    }
  });

  $.fn[pluginName] = function(options) {
    this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });

    // chain jQuery functions
    return this;
  };

})(jQuery, window, document);
