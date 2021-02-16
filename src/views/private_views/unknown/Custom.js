// import { param } from 'jquery';

// console.log('this is custom.js')
const $ = require('jquery');

$(document).ready(function () {
    // console.log('I am custom js')
});

// function test(pera) {
//     console.log(pera)
// }

export default class SBUStatus {

    print_1(pera) {
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
        // var mywindow = window.open('', 'PRINT', 'height=750, width=563');  // Letter size paper

        // let myStyle = new URL('./print.css')
        var mywindow = window.open('', 'PRINT'); 

        /*mywindow.document.write(
            '<html>' +
            '<head>' +
            '<title>' + document.title + '</title>' +
            // '<link rel="stylesheet" href="'+ myStyle +'"/>' +
            '<link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css"/>' +
            '<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.5/css/buttons.dataTables.min.css"/>' +
            '<script src="https://code.jquery.com/jquery-3.5.1.js"></script>' +
            '<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>' +
            '<script src="https://cdn.datatables.net/buttons/1.6.5/js/dataTables.buttons.min.js"></script>' +
            '<script src="https://cdn.datatables.net/buttons/1.6.5/js/buttons.print.min.js"></script>'
        );
        // mywindow.document.write('</head><body style="height: 215mm; width: 139mm; border:solid grey 1px;">');
        mywindow.document.write('</head><body>');*/
        
        mywindow.document.write(''
                    + '<html>'
                    +   '<head>'
                    +     '<title>' + document.title + '</title>'
                    +   '</head>'
                    +   '<body>'
        )

        /*let custom_style = document.createElement('style')
        custom_style.type = 'text/css';
        // Declare the style element
        let styles = '.header-section { '
                                +   'display: block;'
                                + '}';
        styles += '.header-section p {' 
                                +   'display: inline-block;'
                                +   'margin : 0; '
                                + '}';
        // styles += ' #header { height: 50px; background: green }';
        if (custom_style.styleSheet) {
            custom_style.styleSheet.cssText = styles;
        } 
        else {
            custom_style.appendChild(document.createTextNode(styles));
        }
        // custom_style.styleSheet.cssText = styles
        document.getElementsByTagName("head")[0].appendChild(custom_style);*/


        // this.styleFunction()

        // mywindow.document.write('<h1>' + 'Hello Print' + '</h1>');
        // mywindow.document.write('<h1 style="color: blue;">' + 'Hello Print' + '</h1>');
        // mywindow.document.write('<h1>' + 'Hello Print' + '</h1>');

        // mywindow.document.write(document.getElementById('cont').innerHTML);

        mywindow.document.write(''
                        + '<div>'
                        +   '<p>Customer Code: 154</p>'
                        +   '<p>Invoice No: 155</p>'
                        + '</div>'
                    )

        /*// Table
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
        div.appendChild(table)*/

        mywindow.document.write(''
            + '<table>'
            +   '<thead>'
            +     '<tr>'
            +       '<th>NAME</th>'
            +       '<th>ID NUMBER</th>'
            +       '<th>SISTER CONCERN</th>'
            +       '<th>ACTIVE USER</th>'
            +       '<th>STATUS</th>'
            +     '</tr>'
            +   '</thead>'
            +   '<tbody>'
            +     this.tableData(pera)
            +   '</tbody>'
            + '</table>'
        )




        // mywindow.document.write(div.innerHTML);
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

    tableData(pera) {
        let data = ''
        for(let i=0; i<pera.length; i++) {
            data +=    '<tr>'
                    +   '<td>' + pera[i].name + '</td>'
                    +   '<td>' + pera[i].id_number + '</td>'
                    +   '<td>' + pera[i].sister_concern + '</td>'
                    +   '<td>' + pera[i].active_user + '</td>'
                    +   '<td>' + pera[i].status + '</td>'
                    + '</tr>'
        }
        return data
    }

    styleFunction() {
        console.log('working')
    }

    print_2(el) {
        let printWindow = window.open('', 'PRINT', 'height=600,width=800');

        printWindow.document.write('<html><head><title>' + document.title  + '</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>' + document.title  + '</h1>');
        printWindow.document.write(document.getElementById(el).innerHTML);
        printWindow.document.write('</body></html>');

        printWindow.document.close(); // IE >= 10
        printWindow.focus(); //  IE >= 10*/

        printWindow.print();
        // printWindow.close();

        return true;
    }

    print_3(data) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write(''
                            + '<html>'
                            +   '<head>'
                            +     '<title>' + document.title + '</title>'
                            +     '<style>'
                            +       this.addStylePrint_3()
                            +     '</style>'
                            +   '</head>'
                            +   '<body>'
                )

        mywindow.document.write(''
                            + '<div>'
                            +   '<p>Customer Code: 154</p>'
                            +   '<p>Invoice No: 155</p>'
                            + '</div>'
                )

        mywindow.document.write(''
                            // + '<table border="solid 2px;" style="color:black;font-size:14px; width: 100%; text-align: center;">'
                            + '<table>'
                            // +   '<thead style="border:10px solid red; background:yellow">'
                            +   '<thead>'
                            +     '<tr>'
                            +       '<th>NAME</th>'
                            +       '<th>ID NUMBER</th>'
                            +       '<th>SISTER CONCERN</th>'
                            +       '<th>ACTIVE USER</th>'
                            +       '<th>STATUS</th>'
                            +     '</tr>'
                            +   '</thead>'
                            +   '<tbody>'
                            +     this.create_table_body_data(data)
                            +   '</tbody>'
                            + '</table>'
                )

        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        // mywindow.close();

        return true;
    }

    addStylePrint_3() {
        let style = ''
        style += ''
            //   + '@page {'
            //   +     'size: 7in 9.25in;'
            //   +     'margin: 27mm 16mm 27mm 16mm;'
            //   + '}'
            //      A4 => size: 21cm 29.7cm;
            //      A4 => margin: 30mm 45mm 30mm 45mm;
              +
              + '@media print {'
              +     'body {'
              +         'width: 21cm;'       /*width :210mm;*/
              +         'height: 29.7cm;'    /*height:297mm;*/
              +         'margin: 30mm 45mm 30mm 45mm;' 
              +         '/* change the margins as you want them to be. */'
              +     '}' 
              + '}'
              + 'p {'
              +     'font-size: 14px;'
              +     'margin: 0px;'
              + '}'
              + 'table {'
              +     'border-collapse: collapse;'
              +     'color:black;'
              +     'font-size:14px;'
              +     'width: 100%; text-align: center;'
              +     'text-align: center;'
              + '}'
              + 'thead {'
              +     'border: 1px solid #000000'
              + '}'
              + 'tbody {'
              +     'border: 1px solid #000000'
              + '}'

              + '/*Page break class*/'
              + '/*.page-break {'
              +     'height: 0;'
              +      'page-break-before: always;'
              +     'margin: 0;'
              +     'border-top: none;'
              + '}*/'
        return style
    }
    
    create_table_body_data(data) {
        let result = ''
        for(let i=0; i<data.length; i++) {
            result +=   ''
                    +   '<tr>'
                    +       '<td>' + data[i].name + '</td>'
                    +       '<td>' + data[i].id_number + '</td>'
                    +       '<td>' + data[i].sister_concern + '</td>'
                    +       '<td>' + data[i].active_user + '</td>'
                    +       '<td>' + data[i].status + '</td>'
                    +   '</tr>'
        }
        return result + result + result + result + result + result + result + result + result+ result + result + result + result + result + result + result
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