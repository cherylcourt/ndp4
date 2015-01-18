# Website Performance Optimization portfolio project

Usage
-----
1. Clone this repository
2. Navigate to your local copy of index.html through your web browser 
(note: this has only been tested in Chrome - Version 39.0.2171.95 (64-bit))

**OR**

Navigate to page hosted on github.com [here](http://cherylcourt.github.io/ndp4/)

Work
----
After cloning the project, work in the files located in the src directory.

Build
-----
1. Install all necessary modules.  

   To build the minified project you will need to have the following installed:
   * npm (download and install [node.js](http://nodejs.org))
   * [grunt](http://gruntjs.com/getting-started)
   * [grunt-usemin](https://www.npmjs.com/package/grunt-usemin)
   * [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)
   * [grunt-contrib-cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin)
   * [grunt-contrib-htmlmin](https://www.npmjs.com/package/grunt-contrib-htmlmin)
   * [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy)
   * [grunt-contrib-concat](https://www.npmjs.com/package/grunt-contrib-concat)
   * [grunt-processhtml](https://github.com/dciccale/grunt-processhtml)
2. From the root project directory run the following:

    ```bash
    grunt build
    ```

Structure
---------
* development files (i.e. originals) are in the _src_ directory
* minified files start in the root directory

### Development:
```
src
|-- index.html
|-- project-2048.html
|-- project-mobile.html
|-- project-webperf.html
|-- css
|-- js
|-- img
 -- views
    |-- pizza.html
    |-- css
    |-- js
     -- images
```

### Minified:
```
index.html
project-2048.html
project-mobile.html
project-webperf.html
css
js
img
views
  |-- pizza.html
  |-- css
  |-- js
   -- images
```

Optimizations
-------------

### index.html
* removed what I thought were redundant styles in main.css like the following:

    ```css
    b, strong { font-weight: bold; }
    pre, code { font-family: monospace, monospace; font-size: 1em; }
    ```
* combined css elements, where possible
* inlined css into html pages
* scaled images to their view sizes
* optimized images to reduce their file size
* made analytics script loading asynchronous
* added a media attribute to print.css
* replaced google font with standard open sans font
* minified html
* minified print.css
* minified perfmatters.js

### views/js/main.js
For changing pizza image sizes:
* instead of calculating an offset width for every randomPizzaContainer element, changed the width style directly instead
* instead of retrieving the entire list of elements every time we want to access just one, moved the list retrieval so that it is retrieved once before the loop and store it in a variable that is used and accessed in the for loop
* the new style width is calculated once based on the slider selection and then applied to all randomPizzaContainer elements
* 'uglified' file and created main.min.js

For changing pizza positions on background:
* retrieved the scrollTop value once instead of in the for loop
* did a first pass to calculate all the positions
* applied all new positions at once

Additional changes:
* the calculation and display of animations were then wrapped in a call to requestAnimationFrame() after reading the information
on [html5rocks](http://www.html5rocks.com/en/tutorials/speed/animations/) regarding speeding up animations.  I did not
really see any significant gains in performance, but thought I'd leave it in since it also didn't seem to hurt the
performance and perhaps it would help on certain machines (e.g. if they were slower somehow?)
* combined and minifed css files in views/css
* minified pizza.html
* scaled and optimized pizzeria.jpg -> pizzeria360x270.jpg

Notes
-----
I think there are probably further opportunities for improvement such as only changing the items that are visible
as well as possibly organizing some of the code into classes, but this would require considerable changes to the
existing code, which I think are not really the point of this exercise.  Considering only elements that are truly
visible would probably be easiest with the addition of jQuery, from what I can gather in looking into that option, 
but also introduce an extra complexity when one scrolls the page (at least from the point of view of displaying
the pizzas that change size) so I'll leave that idea alone for now.

References
----------

### Websites

Some of the following websites I only read and didn't incorporate into the project, but felt I should list here
anyway as I did a lot of reading since there seemed to be multiple avenues to possibly go down with this project:

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
* http://gruntjs.com/configuring-tasks#files
* https://github.com/keithamus/npm-scripts-example/blob/master/package.json
* https://www.jetbrains.com/pycharm/webhelp/using-grunt-task-runner.html
* https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
* http://yeoman.io/blog/performance-optimization.html
* http://www.html5rocks.com/en/tutorials/speed/animations/
* http://www.teamdf.com/web/194/jquery-element-onscreen-visibility
* http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
* https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
* https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=en
* http://stackoverflow.com/questions/16827858/npm-warn-package-json-no-repository-field

### Other Resources
* piazza forum
* Udacity Course: Website Performance Optimization
* Stack Overflow
* [Youtube: Grunt Usemin Plugin](https://www.youtube.com/watch?v=gIbfDxF69c8)

