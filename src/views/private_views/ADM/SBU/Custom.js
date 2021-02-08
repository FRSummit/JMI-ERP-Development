// console.log('this is custom.js')
const $ = require('jquery');

$(document).ready(function () {
    // console.log('I am custom js')
});

// function test(pera) {
//     console.log(pera)
// }

export default class SBUStatus {

    test(pera) {
        console.log(pera)
        // $(document).ready(function () {
        //     console.log('I am custom js')
        //     $('#cont').DataTable( {
        //         dom: 'Bfrtip',
        //         buttons: [
        //             'copy', 'csv', 'excel', 'pdf', 'print'
        //         ]
        //     } );
        // });


        /*var yourDOCTYPE = "<!DOCTYPE html>";
        var printPreview = window.open('', 'print_preview');
        var printDocument = printPreview.document;
        printDocument.open();
        var head =
            "<head>" +
            "<style> .to-print{height:279mm; width:80mm; } </style>" +
            "</head>";
        printDocument.write(yourDOCTYPE +
            "<html>" +
            head +
            "<body>" +
            "<div class='to-print'>Hello Brother" +
            // "<!-- your content to print can be put here or you can simply use document.getElementById('id-content-toprint')-->" +
            "</div>" +
            "</body>" +
            "</html>");
        printPreview.print();
        // printPreview.close()*/

        // var mywindow = window.open('', 'PRINT', 'height=400,width=600');
        var mywindow = window.open('', 'PRINT');

        mywindow.document.write(
            '<html>' +
            '<head>' +
            '<title>' + document.title + '</title>' +
            '<link rel="stylesheet" href=""/>' +
            '<link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css"/>' +
            '<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.5/css/buttons.dataTables.min.css"/>' +
            '<script src="https://code.jquery.com/jquery-3.5.1.js"></script>' +
            '<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>' +
            '<script src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js"></script>' +
            '<script src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.print.min.js"></script>'
        );
        mywindow.document.write('</head><body >');
        mywindow.document.write('<h1>' + 'document.title' + '</h1>');
        // mywindow.document.write(document.getElementById('cont').innerHTML);
        // Table
        let table = document.createElement('table')
        table.className = 'display nowrap'
        // table.style.width = 100%
        table.id = 'example'

        let thead = document.createElement('thead')
        table.appendChild(thead)

        let thead_tr = document.createElement('tr')
        thead_tr.innerHTML = '<th>NAME</th> <th>ID NUMBER</th> <th>SISTER CONCERN</th> <th>ACTIVE USER</th> <th>STATUS</th>'
        thead.appendChild(thead_tr)

        let tbody = document.createElement('tbody')
        table.appendChild(tbody)

        // let tbody_tr = document.createElement('tr')
        // tbody_tr.innerHTML = '<td>Tiger Nixon</td> <td>Edinburgh</td> <td>61</td> <td>2011/04/25</td> <td>$320,800</td>'
        // tbody.appendChild(tbody_tr)
        for (let i = 0; i < pera.length; i++) {
            let tbody_tr = document.createElement('tr')

            let td_name = document.createElement('td')
            td_name.innerText = pera[i].name
            tbody_tr.appendChild(td_name)

            let td_id_number = document.createElement('td')
            td_id_number.innerText = pera[i].id_number
            tbody_tr.appendChild(td_id_number)

            let td_sister_concern = document.createElement('td')
            td_sister_concern.innerText = pera[i].sister_concern
            tbody_tr.appendChild(td_sister_concern)

            let td_active_user = document.createElement('td')
            td_active_user.innerText = pera[i].active_user
            tbody_tr.appendChild(td_active_user)

            let td_status = document.createElement('td')
            td_status.innerText = pera[i].status
            tbody_tr.appendChild(td_status)
            
            tbody.appendChild(tbody_tr)
        }

        // Table
        let div = document.createElement('div')
        div.appendChild(table)
        mywindow.document.write(div.innerHTML);
        // mywindow.document.body.appendChild(table);

        /*mywindow.document.write(
            '<table id="example" class="display nowrap" style="width:100%">' + 
                '<thead>' + 
                    '<tr>' + 
                        '<th>NAME</th>' + 
                        '<th>ID NUMBER</th>' + 
                        '<th>SISTER CONCERN</th>' + 
                        '<th>ACTIVE USER</th>' + 
                        '<th>STATUS</th>' + 
                        '<th>Salary</th>' + 
                    '</tr>' + 
                '</thead>' +
                // createTableRow() +
                // '<tbody>' + 
                    // '<tr>' + 
                    //     '<td>NAME</td>' + 
                    //     '<td>ID NUMBER</td>' + 
                    //     '<td>SISTER CONCERN</td>' + 
                    //     '<td>ACTIVE USER</td>' + 
                    //     '<td>STATUS</td>' + 
                    //     '<td>Salary</td>' + 
                    // '</tr>' + 
                // '</tbody>' +
            '</table>'
            // '<script type="text/javascript">' +
            //     '$(document).ready(function() {' +
            //         '$("#example").DataTable( {' +
            //             'dom: "Bfrtip",' +
            //             'buttons: [' +
            //                 '{' +
            //                     'extend: "print",' +
            //                     'customize: function ( win ) {' +
            //                         '$(win.document.body)' +
            //                             '.css( "font-size", "10pt" )' +
                
            //                         '$(win.document.body).find( "table" )' +
            //                             '.addClass( "compact" )' +
            //                             '.css( "font-size", "inherit" );' +
            //                     '}' +
            //                 '}' +
            //             ']' +
            //         '} );' +
            //     '} );' +
            // '</script>'
        );*/

        /*var table = document.createElement('table');
        for (let i = 0; i < 10; i++) {
          var tRow = document.createElement('tr');
          for (let j = 0; j < 6; j++) {
            var tData = document.createElement('td');
            tData.textContent = 'Cell';
            tRow.appendChild(tData);
          }
          table.appendChild(tRow);
        }
        // document.body.appendChild(table);
        // mywindow.document.body.appendChild(table);*/



        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        // mywindow.close();

        return true;
    }
}

// function createTableRow() {
//     let tbody = document.createElement('tbody');
//     for(let i=0; i<10; i++) {
//         let tr = document.createElement('tr')
//         tr.innerHTML = '<td>Tiger Nixon</td> <td>System Architect</td> <td>Edinburgh</td> <td>61</td> <td>2011/04/25</td> <td>$320,800</td>'
//         tbody.appendChild(tr)
//     }
//     return tbody;
// }
