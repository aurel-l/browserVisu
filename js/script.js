document.addEventListener('DOMContentLoaded', function() {
  // Full list of configuration options available at:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls:    true,
    progress:    true,
    slideNumber: true,
    history:     true,
    center:      true,
    keyboard:    true,
    touch:       true,
    help:        true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
      {src: 'plugin/zoom-js/zoom.js', async: true },
      {src: 'plugin/notes/notes.js', async: true },
      {src: 'plugin/remotes/remotes.js', async: true}
    ]
  });

  // function evalCode(text) {
  //   babel.run(text);
  // }
  // function getD3Ctx(slide) {
  //   var el = slide.querySelector('.d3 > svg');
  //   if (el) {
  //     return d3.select(el);
  //   }
  // }
  //
  // function setup(slide) {
  //   var d3ctx = window.d3ctx = getD3Ctx(slide);
  //   console.log(d3ctx);
  // }
  //
  // function cleanup(slide) {
  //   var ta = slide.querySelector('textarea');
  //   if (!ta) {
  //     return;
  //   }
  //   //window.d3ctx = null;
  // }
  //
  // Reveal.addEventListener('slidechanged', function(e) {
  //   if (e.previousSlide) {
  //     cleanup(e.previousSlide);
  //   }
  //   if (e.currentSlide) {
  //     setup(e.currentSlide);
  //   }
  // });
});
