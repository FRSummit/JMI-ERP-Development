import ComaSeparatedDigits from '../ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()

export default class PP_InvoiceChallanSummeryTD_Type1 {
    
    print_invoice(table_header, table_data) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write(''
                            + '<html>'
                            +     '<head>'
                            +         '<title>' + 'Invoice' + '</title>'
                            +         '<style>'
                            +               this.addStylePrint_3()
                            +         '</style>'
                            +     '</head>'
                            +     '<body style="">'
                            +         '<div class="print-section" style="page-break-before: always; overflow: hidden; padding-right: 1px;">'
                            +             '<div class="print-section-inner">'
                            +                 '<table style="">'
                            +                     '<thead>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="text-align: left;">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">Depot Name</span><span class="label-value">: ' + 'Dummy Depot Name' + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="text-align: left;">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">DA Name</span><span class="label-value">: ' + 'Dummy DA Name' + '</span></p>'
                            +                                 '<p style="display: inline-block; float: right;"><span class="label">Vehical No</span><span class="label-value">: ' + 'Dummy 123456' + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="text-align: left; padding-bottom: 10px;">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">Schedule Date</span><span class="label-value">: ' + 'Dummy 123456' + '</span></p>'
                            +                                 '<p style="display: inline-block; float: right;"><span class="label">Driver Name</span><span class="label-value">: ' + 'Dummy Driver Name' + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         this.create_table_header(table_header)
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_table_body_data(table_data)
                            +                     '</tbody>'
                            +                 '</table>'
                            +             '</div>'
                            +         '</div>'
                )

        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        // mywindow.close();

        return true;
    }

    printing_Date_Format() {
        var t = new Date();
        return t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() 
    }

    addStylePrint_3() {
        let style = ''
        style += ''
              + '@page {'
              +     'size: 8.5in 11in;'
              +     'margin: 12mm 10mm 15mm 15mm; border: 1px solid #000000'
              + '}'
              +
              + '@media print {'
              +     'body {'
              +         'margin: 0px;'
              +         'font-family: calibri;'
              +         'font-weight: 100;'
              +     '}'
              +     'p {'
              +         'margin: 0px;'
              +         'font-weight: 100;'
              +     '}'
              +     'table {'
              +         'border-collapse: collapse;'
              +         'color:black;'
              +         'font-size: 12px;'
              +         'width: 100%; text-align: center;'
              +         'text-align: center;'
              +         'font-family: calibri;'
              +         'page-break-inside: auto;'
              +     '}'
              +     'thead {'
              +         'display: table-header-group;'
              +     '}'
              +     'thead p {'
              +         'font-size: 12px;'
              +         'line-height: 1;'
              +         'padding: 2px 0;'
              +         'margin: 0;'
              +     '}'
              +     'tr {'
              +     '}'
              +     'thead tr th{'
              +         'font-weight: 100;'
              +     '}'
              +     'tbody {'
              +         'display: table-header-group;'
              +     '}'
              +      'table thead th, table tbody td {'
              +          'font-weight: 100;'
              +      '}'
              + '}'
        return style
    }

    create_table_header(header) {
        let result = ''
        for(let i=0; i< header.length; i++) {
            result +=   ''
                    +       '<th  style="border: 1px solid #000000;">' + header[i] + '</th>'
        }

        return '<tr>' + '<th  style="border: 1px solid #000000;">' + 'Sl No.' + '</th>' + result + '</tr>'
    }
    
    create_table_body_data(table_data) {        
        let result = ''
        for(let i=0; i<table_data.length; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always; border: 1px solid #000000;">'
                    +       '<td style="">' + (i + 1) + '</td>'
                    +       '<td style="">' + table_data[i].invoice_id + '</td>'
                    +       '<td style="">' + table_data[i].customer_type + '</td>'
                    +       '<td style="">' + table_data[i].customer_name + '</td>'
                    +       '<td style=" text-align: right;">' + comaSeparatedDigits.comaSeparate(table_data[i].amount) + '</td>'
                    +   '</tr>'
        }
        
        return result
    }
}