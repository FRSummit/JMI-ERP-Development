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


    // function getOption(status) {

    //     if (status == "PD") {

    //         $('#PD').show();
    //         $('#FD').hide();
    //         $('#B').hide();
    //         $('#F').hide();
    //     } else if (status == "FD") {

    //         $('#PD').hide();
    //         $('#FD').show();
    //         $('#B').hide();
    //         $('#F').hide();
    //     } else if (status == "B") {

    //         $('#PD').hide();
    //         $('#FD').hide();
    //         $('#B').show();
    //         $('#F').hide();
    //     } else if (status == "F") {

    //         $('#PD').hide();
    //         $('#FD').hide();
    //         $('#B').hide();
    //         $('#F').show();
    //     } else {
    //         $('#PD').hide();
    //         $('#FD').hide();
    //         $('#B').hide();
    //         $('#F').hide();
    //     }

    // }

    // $(function() {
    //     $('input[name="daterange"]').daterangepicker({
    //         opens: 'left'
    //     // }, function(start, end, label) {
    //     }, function(start, end) {
    //         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    //     });
    // });

});