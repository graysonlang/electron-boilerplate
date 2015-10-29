(function () {
   "use strict";
}());

require("babel-core/register")({
    ignore: false,
    retainLines: true,
    extensions: [ ".js6" ],
    loose: [ 'es6.modules' ],
    experimental: true,
    stage: 0
});

require('./gulpfile.js6');
