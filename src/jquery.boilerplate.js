/*=============================================
=  Started from the awesome jQuery boilerplate  =
= http://jqueryboilerplate.com/ =
=============================================*/


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
