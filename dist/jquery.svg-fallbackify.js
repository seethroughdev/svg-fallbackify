/*
 *  SVG Fallbackify - v0.0.2
 *  An easy way to detect and add fallbacks for your SVG
 *  http://seethroughtrees.github.io/svg-fallbackify
 *
 *  Made by seethroughtrees
 *  Under MIT License
 */

;(function ( $, window, document, undefined ) {

		var pluginName = "svgFallback",
				defaults = {
					propertyName: "value"
				};

		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
				init: function () {

				},
				yourOtherFunction: function () {
						// some logic
				}
		});

		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );
