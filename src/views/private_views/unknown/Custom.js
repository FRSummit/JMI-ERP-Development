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
                            +     '<head>'
                            +         '<title>' + document.title + '</title>'
                            +         '<style>'
                            +               this.addStylePrint_3()
                            +         '</style>'
                            +     '</head>'
                            +     '<body>'
                            +         this.create_summery_section_data()
                            +         '<table>'
                            +             '<thead>'
                            +                 this.create_table_head_data()
                            +             '</thead>'
                            +             '<tbody>'
                            +                 this.create_table_body_data(data)
                            +                 this.create_subtotal_data()
                            +                 this.create_gross_TP_data()
                            +                 this.create_discount_data()
                            +                 this.create_vat_data()
                            +                 this.create_rounding_adjustment_data()
                            +                 this.create_net_payable_data()
                            +             '</tbody>'
                            +         '</table>'
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
              +     'p {'
              +         'margin: 0px;'
              +         'font-family: sans-serif'
              +     '}'
                    /*--- initial-data-section ---*/
              +     '.initial-data-section {'
              +         'display: block;'
              +         'width: 100%;'
              +         'overflow: hidden;'
              +         'position: relative;'
              +         'padding-bottom: 20px;'
              +         'margin-bottom: 10px;'
              +     '}'
              +     '.left-section {'
              +         'display: inline-block;'
              +         'width: 50%;'
              +         'float: left'
              +     '}'
              +     '.right-section {'
              +         'display: inline-block;'
              +         'width: 30%;'
              +         'float: right'
              +     '}'
              +     '.initial-data-section p {'
              +         'font-size: 14px;'
              +         'line-height: 1;'
              +         'font-weight: 600;'
              +         'padding: 2px 0;'
              +         'margin: 2px 0;'
              +     '}'
              +     '.initial-data-section p span.label {'
              +     '}'
              +     '.initial-data-section p span.label-value {'
              +     '}'
              +     '.initial-data-section p.order-no {'
              +         'margin: 0 auto;'
              +         'position: absolute;'
              +         'bottom: 0;'
              +         'right: 35%;'
              +     '}'
                    /*--- initial-data-section ---*/
              +     'table {'
              +         'border-collapse: collapse;'
              +         'color:black;'
              +         'font-size:14px;'
              +         'width: 100%; text-align: center;'
              +         'text-align: center;'
              +         'font-family: sans-serif'
              +     '}'
              +     'thead {'
              +         'border: 1px solid #000000'
              +     '}'
              +     'thead tr th{'
              +         'border: 1px solid #000000'
              +     '}'
              +     'tbody {'
            //   +         'border: 1px solid #000000'
              +     '}'

            //   +     'thead tr th, tbody tr td {'
            //   +         'width: 5%'
            //   +     '}'
              +     'thead tr th:nth-child(2),'
              +     'tbody tr td:nth-child(2) {'
              +         'width: 20%'
              +     '}'
            //   +     'thead tr th:nth-child(7),'
            //   +     'tbody tr td:nth-child(7) {'
            //   +         'width: 10%'
            //   +     '}'
            //   +     'thead tr th:nth-child(9),'
            //   +     'tbody tr td:nth-child(9) {'
            //   +         'width: 10%'
            //   +     '}'
            //   +     'thead tr th:nth-child(12),'
              +     'tbody tr td:nth-child(12) {'
            //   +         'width: 10%'
              +         'text-align: right;'
              +     '}'
            //   +     'thead tr th:nth-child(13),'
              +     'tbody tr td:nth-child(13) {'
            //   +         'width: 10%'
              +         'text-align: right;'
              +     '}'
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

    create_summery_section_data() {
        let custoemrCode = 'DHK34105'
        let custoemrName = 'LABAID CARDIAC HOSPITAL'
        let address      = 'HOUSE-01, RAOD-04, DHANMONDI'
        let moi_name     = 'SHAHIDUL ISLAM'
        let sr_name      = 'RAMJAN ALI'

        let invoice_number = 'DHK081920086'
        let invoice_date   = '30/09/2019'
        let depot          = 'Dhaka Depot'
        let t_code         = 'DHK341'
        let date           = '29.09.2019'

        let order_no = '000380864-0601'

        let result = ''
                    + '<div class="initial-data-section">'
                    +     '<div class="left-section">'
                    +         '<p>'
                    +             '<span class="label">Customer Code</span>'
                    +             '<span class="label-value">: ' + custoemrCode + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Customer Name</span>'
                    +             '<span class="label-value">: ' + custoemrName + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Address</span>'
                    +             '<span class="label-value">: ' + address + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">MIO Name</span>'
                    +             '<span class="label-value">: ' + moi_name + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">S.R Name</span>'
                    +             '<span class="label-value">: ' + sr_name + '</span>'
                    +         '</p>'
                    +     '</div>'
                    +     '<div class="right-section">'
                    +         '<p>'
                    +             '<span class="label">Invoice No</span>'
                    +             '<span class="label-value">: ' + invoice_number + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Invoice Date</span>'
                    +             '<span class="label-value">: ' + invoice_date + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Depot</span>'
                    +             '<span class="label-value">: ' + depot + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">T. Code</span>'
                    +             '<span class="label-value">: ' + t_code + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Date</span>'
                    +             '<span class="label-value">: ' + date + '</span>'
                    +         '</p>'
                    +     '</div>'
                    +     '<p class="order-no">'
                    +         '<span class="label">Order No:</span>'
                    +         '<span class="label-value">' + order_no + '</span>'
                    +     '</p>'
                    + '</div>'
        return result
    }
    
    create_table_head_data() {
        let header = ''
        header += ''
                // +     '<tr>'
                // +       '<th>NAME</th>'
                // +       '<th>ID NUMBER</th>'
                // +       '<th>SISTER CONCERN</th>'
                // +       '<th>ACTIVE USER</th>'
                // +       '<th>STATUS</th>'
                // +     '</tr>'
                +     '<tr>'
                +       '<th>SN</th>'
                +       '<th>Product Name</th>'
                +       '<th>Pack Size</th>'
                +       '<th>Batch No</th>'
                +       '<th>MFG Date</th>'
                +       '<th>EXP Date</th>'
                +       '<th>Unit Price TP/SP</th>'
                +       '<th>Unit VAT</th>'
                +       '<th>Unit Price with VAT</th>'
                +       '<th>Qty</th>'
                +       '<th>Bonus</th>'
                +       '<th>Total VAT</th>'
                +       '<th>Total TP/SP</th>'
                +     '</tr>'
        return header
    }
    
    create_table_body_data(data) {
        // let product_type = 'Regular'
        // let p_type = ''  
        // p_type += ''
        //         +   '<p>'
        //         +       '<span class="label">Product Type:</span>'
        //         +       '<span class="label-value">' + product_type + '</span>'
        //         +   '</p>'
        let result = ''
        for(let i=0; i<data.length; i++) {
            result +=   ''
                    // +   '<tr>'
                    // +       '<td>' + data[i].name + '</td>'
                    // +       '<td>' + data[i].id_number + '</td>'
                    // +       '<td>' + data[i].sister_concern + '</td>'
                    // +       '<td>' + data[i].active_user + '</td>'
                    // +       '<td>' + data[i].status + '</td>'
                    // +   '</tr>'
                    +   '<tr>'
                    +       '<td>' + data[i].sn + '</td>'
                    +       '<td>' + data[i].product_name + '</td>'
                    +       '<td>' + data[i].pack_size + '</td>'
                    +       '<td>' + data[i].batch_no + '</td>'
                    +       '<td>' + data[i].mfg_date + '</td>'
                    +       '<td>' + data[i].eXP_date + '</td>'
                    +       '<td>' + data[i].unit_price_TP_SP + '</td>'
                    +       '<td>' + data[i].unit_VAT + '</td>'
                    +       '<td>' + data[i].unit_price_with_VAT + '</td>'
                    +       '<td>' + data[i].qty + '</td>'
                    +       '<td>' + data[i].bonus + '</td>'
                    +       '<td>' + data[i].total_VAT + '</td>'
                    +       '<td>' + data[i].total_TP_SP + '</td>'
                    +   '</tr>'
        }
        // return result + result + result + result + result + result + result + result + result+ result + result + result + result + result + result + result
        return result
    }

    create_subtotal_data() {
        let subtotal = ''
        subtotal += ''
                    +   '<tr>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="5" style="text-align: center;">' + 'Sub Total :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return subtotal
    }

    create_gross_TP_data() {
        let gross_tp = ''
        gross_tp += ''
                    +   '<tr>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="5" style="text-align: right;">' + 'Gross TP :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return gross_tp
    }

    create_discount_data() {
        let discount = ''
        discount += ''
                    +   '<tr>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="5" style="text-align: right;">' + 'Less discount 5% on TP :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return discount
    }

    create_vat_data() {
        let vat = ''
        vat += ''
                    +   '<tr>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="5" style="text-align: right;">' + 'Add VAT on TP :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return vat
    }

    create_rounding_adjustment_data() {
        let rounding_adjustment = ''
        rounding_adjustment += ''
                    +   '<tr>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="5" style="text-align: right;">' + 'Rounding Adjustment :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return rounding_adjustment
    }

    create_net_payable_data() {
        let net_payable = ''
        net_payable += ''
                    +   '<tr>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="5" style="text-align: right;">' + 'Net Payable :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000; border-bottom: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return net_payable
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