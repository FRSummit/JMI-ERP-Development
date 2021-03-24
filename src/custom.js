// console.log('this is custom.js')
const $ = require('jquery');

$(document).ready(function () {

    // --------------------------------------------------------------------------
    // LockScreen functionality
    let c = 45;
    function draw() {
        document.documentElement.style.setProperty('--direction', c++ + 'deg');
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    // LockScreen functionality
    // --------------------------------------------------------------------------

    // window.onhashchange = (event) => {
    //     console.log(event)
    // }

});