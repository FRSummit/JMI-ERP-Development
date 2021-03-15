// console.log('this is custom.js')
const $ = require('jquery');

$(document).ready(function () {
    // $('#example').DataTable( {
    //     dom: 'Bfrtip',
    //     buttons: [
    //         'copy', 'csv', 'excel', 'pdf', 'print'
    //     ]
    // } );
    // console.log('Hello')

    // $('input[name="daterange_delivery_schedule"]').daterangepicker({
    //     opens: 'left'
    //   }, function(start, end) {
    //     console.log('Hello 2')
    //     console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    //   });

    // LockScreen functionality
    let c = 45;
    function draw() {
        document.documentElement.style.setProperty('--direction', c++ + 'deg');
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    // LockScreen functionality

    // Prevent Dot from CREATE_ORDER add product modal
    // $('#create-order-details-section.create-order-details-section .create-order-details-section-inner .add-order-modal-section .add-order-modal-section-inner .ordered-product-list .ordered-product-list-inner .selected-ordered-product tr td span.quantity-setup input.qty').live('keypress', () => {
    //     preventDot(event)
    // });

    // function preventDot(event) {
    //     alert(0);
    //     //var test = document.getElementById("#age");
    //     var key = event.charCode ? event.charCode : event.keyCode;
    //     $("#create-order-details-section.create-order-details-section .create-order-details-section-inner .add-order-modal-section .add-order-modal-section-inner .ordered-product-list .ordered-product-list-inner .selected-ordered-product tr td span.quantity-setup input.qty").innerHTML = key;
    //     if (key == 46) {
    //         return false;
    //     }
    // }
    // $('#doctors-list.doctors-list .v-data-table').prepend($('#doctors-list.doctors-list .v-data-table .v-data-footer'))


    // document.querySelector('#doctors-list.doctors-list .v-input__icon').addEventListener('click', () => {
    //     console.log('clicked')
    // })
    
});