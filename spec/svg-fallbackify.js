/*==========  SET UP EXAMPLES  ==========*/

var examples = [
  '<img id="example1" src="img/demo.svg" data-svg-fallback>',
  '<img id="example2" src="img/demo.svg" data-svg-fallback="jpg">',
  '<img id="example3" data-svg-fallback="img/demo">',
  '<img id="example4" data-svg-fallback="img/demo.svg">',
  '<img id="example5" src="img/demo.svg" data-svg-fallback="img/demo-also.png">',
  '<img id="example6" src="img/demo.svg" data-svg-fallback="gif">'
];

describe("SVG Fallbackify", function() {

  afterEach(function () {
    $('[data-svg-fallback]').remove();
  });

  /*==========  SVG SUPPORTED  ==========*/

  describe('When supporting SVG', function () {

    it('should detect supports SVG', function () {
      $(examples[0]).appendTo('body');
      var supportsSvg = $('[data-svg-fallback]').svgFallbackify().supportsSvg();
      expect(supportsSvg).toEqual(true);
    });

    describe('they should load svg', function () {
      examples.forEach(function(example) {
        it('should give the svg an svg src', function () {
          $(example).appendTo('body');
          $('[data-svg-fallback]').svgFallbackify();
          expect($('[data-svg-fallback]').attr('src')).toEqual('img/demo.svg');
        });
      })
    });

  });

  /*==========  SVG NOT SUPPORTED  ==========*/

  describe('When not supporting SVG', function () {

    beforeEach(function () {
      document.createElementNS = null;
    });

    it('should detect no SVG support', function () {
      $(examples[0]).appendTo('body');
      var supportsSvg = $('[data-svg-fallback]').svgFallbackify().supportsSvg();
      expect(supportsSvg).toEqual(false);
    });

    it('should override extension option', function () {
      $(examples[0]).appendTo('body');
      $('[data-svg-fallback]').svgFallbackify({ext: "jpg"});
      expect($('[data-svg-fallback]').attr('src')).toEqual('img/demo.jpg');
    });

    describe('it should load proper src', function () {

      beforeEach(function () {
        examples.forEach(function(example) {
          $(example).appendTo('body');
        })
        $('[data-svg-fallback]').svgFallbackify();
      });

      it('should load default fallback', function () {
        expect($('#example1').attr('src')).toEqual('img/demo.png');
      });

      it('should load a custom extension', function () {
        expect($('#example2').attr('src')).toEqual('img/demo.jpg');
      });

      it('should load using async with no exension', function () {
        expect($('#example3').attr('src')).toEqual('img/demo.png');
      });

      it('should load using svg with async', function () {
        expect($('#example4').attr('src')).toEqual('img/demo.png');
      });

      it('should load a new src with separate path', function () {
        expect($('#example5').attr('src')).toEqual('img/demo-also.png');
      });

      it('should load gif also', function () {
        expect($('#example6').attr('src')).toEqual('img/demo.gif');
      });

    });

  });


});
