# Website Performance Optimization portfolio project

The page is hosted on github.com [here](http://cherylcourt.github.io/ndp4/)


References
==========

### Websites
* http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
* https://www.igvita.com/slides/2012/devtools-tips-and-tricks/#1
* https://developer.mozilla.org/en-US/docs/Web/API/Element.classList
* http://stackoverflow.com/questions/18964267/fixing-jank-on-movement-locked-to-scroll-on-android
* http://jankfree.org/
* http://calendar.perfplanet.com/2013/the-runtime-performance-checklist/
* http://www.html5rocks.com/en/tutorials/speed/scrolling/
* http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html
* http://www.html5rocks.com/en/tutorials/speed/rendering/
* http://gruntjs.com/getting-started#preparing-a-new-grunt-project
* https://github.com/keithamus/npm-scripts-example/blob/master/package.json
* https://www.jetbrains.com/pycharm/webhelp/using-grunt-task-runner.html
* https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
* http://yeoman.io/blog/performance-optimization.html

### Other Resources
* piazza forum
* Udacity Course: Website Performance Optimization
* Stack Overflow

---

Original Instructions
=====================

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
