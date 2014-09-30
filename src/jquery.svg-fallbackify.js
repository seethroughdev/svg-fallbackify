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

  // we want to make sure the filename we're replacing is an SVG
  function isSvg(filename) {
    var reg = /\.svg$/ig;
    return reg.test(filename);
  }

  $.extend(Plugin.prototype, {
    init: function(defaults) {
    	console.log(defaults)
    },
    supportsSvg: function() {
      return !!document && !!document.createElementNS &&
        !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
    }
  });

  $.fn[pluginName] = function (options) {
    var plugin;
    this.each(function() {
      plugin = $.data(this, 'plugin_' + pluginName);
      if (!plugin) {
        plugin = new Plugin(this, options);
        $.data(this, 'plugin_' + pluginName, plugin);
      }
    });
    return plugin;
  };

})(jQuery, window, document);
