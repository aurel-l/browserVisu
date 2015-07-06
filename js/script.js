document.addEventListener('DOMContentLoaded', function() {
  var localStorageKey = (location.hostname + location.pathname + '-secret').toLowerCase();
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

    multiplex: {
      secret: localStorage.getItem(localStorageKey),
      id:     'b05c4f76d2665ffc',
      url:    'revealjs.jit.su:80'
    },
    // Optional reveal.js plugins
    dependencies: [
      {src: 'plugin/zoom-js/zoom.js', async: true},
      {src: 'plugin/notes/notes.js', async: true},
      {src: '//cdn.socket.io/socket.io-1.3.5.js'},
      {src: 'plugin/multiplex/master.js', async: true},
      {src: 'plugin/multiplex/client.js', async: true}
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

  var keyButtonDisplay = (function() {
    // "master key" button on the first page
    var keyDom = document.getElementById('key');
    keyDom.addEventListener('click', function() {
      /* eslint-disable */
      var secretKey = prompt(
        'new secret master key for presentations on this domain with this browser'
      );
      /* eslint-enable */
      if (secretKey) {
        // keep for future visits
        localStorage.setItem(localStorageKey, secretKey);
        location.reload();
      }
    });
    return function(curr, prev) {
      if (curr.parentElement.firstElementChild === curr) {
        keyDom.classList.remove('away');
      } else if (prev && prev.parentElement.firstElementChild === prev) {
        keyDom.classList.add('away');
      }
    };
  })();

  Reveal.addEventListener('slidechanged', function(e) {
    keyButtonDisplay(e.currentSlide, e.previousSlide);
    // if (e.previousSlide) {
    //   cleanup(e.previousSlide);
    // }
    // if (e.currentSlide) {
    //   setup(e.currentSlide);
    // }
  });
  Reveal.addEventListener('ready', function(e) {
    keyButtonDisplay(e.currentSlide);
  });
});
