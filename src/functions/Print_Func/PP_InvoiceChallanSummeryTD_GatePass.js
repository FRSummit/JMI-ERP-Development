// import ComaSeparatedDigits from '../ComaSeparatedDigits'
// const comaSeparatedDigits = new ComaSeparatedDigits()

export default class PP_InvoiceChallanSummeryTD_Type1 {
    
    print_invoice(title, table_header, table_data, summery) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write(''
                            + '<html>'
                            +     '<head>'
                            +         '<title>' + 'Gate Pass' + '</title>'
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
                            +                             '<td colspan="6" style="">'
                            +                                 '<p style="display: inline-block; text-align: center; font-size: 16px; text-decoration: underline;">' + title + '</p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">SR</span><span class="label-value">: ' + (summery ? (summery.gp_for ? (summery.gp_for) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">Vehical No</span><span class="label-value">: ' + (summery ? (summery.vehicale_id ? (summery.vehicale_id) : '') : '') + '</span></p>'
                            +                                 '<p style="display: inline-block; float: right;"><span class="label">Delivery Date</span><span class="label-value">: ' + (summery ? (summery.delivery_date ? (summery.delivery_date).split(' ')[0] : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">Gate Pass Type</span><span class="label-value">: ' + (summery ? (summery.gate_pass_type ? (summery.gate_pass_type) : '') : '') + '</span></p>'
                            +                                 '<p style="display: inline-block; float: right;"><span class="label">Ref. No</span><span class="label-value">: ' + (summery ? (summery.gp_no ? (summery.gp_no) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="5" style="padding-bottom: 10px;">'
                            +                                 '<p style="display: inline-block; text-align: left;">Description: ' + (summery ? (summery.gp_description ? (summery.gp_description) : '') : '') + '</p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         this.create_table_header(table_header)
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_table_body_data(table_data)

                            +                         '<tr style="page-break-inside: avoid; page-break-after: always;">'
                            +                             '<td colspan="5" style="padding-top: 40px;">'
                            +                                 '<p style="display: inline-block; width: 33%; font-size: 14px; text-align: left;"><span class="label">Issued By</span></p>'
                            +                                 '<p style="display: inline-block; width: 33%; font-size: 14px;"><span class="label">Checked By</span></p>'
                            +                                 '<p style="display: inline-block; width: 33%; font-size: 14px; text-align: right;"><span class="label">Received By</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
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
              +     'margin: 30mm 10mm 30mm 15mm; border: 1px solid #000000'
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
              +          'padding: 2px 6px;'
              +      '}'
              + '}'
        return style
    }

    create_table_header(header) {
        let result = ''
        for(let i=0; i< header.length; i++) {
            result +=   ''
                    +       '<th  style="border: 1px solid #000000;' + header[i].style +'">' + header[i].th + '</th>'
        }

        return '<tr>' + '<th  style="border: 1px solid #000000;">' + 'Sl No.' + '</th>' + result + '</tr>'
    }
    
    create_table_body_data(table_data) {        
        let result = ''
        for(let i=0; i<table_data.length; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always;">'
                    +       '<td style="border: 1px solid #000000;">' + (i + 1) + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + table_data[i].code + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: left;">' + table_data[i].prod_name + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + table_data[i].pack_size + '</td>'
                    // +       '<td style=" text-align: right;">' + table_data[i].amount !== null ? comaSeparatedDigits.comaSeparate(table_data[i].amount) : '' + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: right;">' + table_data[i].invoice_qty + '</td>'
                    +   '</tr>'
        }
        
        return result
    }
}