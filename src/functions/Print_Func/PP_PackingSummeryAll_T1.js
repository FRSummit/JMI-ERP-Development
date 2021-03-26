// import ComaSeparatedDigits from '../ComaSeparatedDigits'
// const comaSeparatedDigits = new ComaSeparatedDigits()

export default class PP_InvoiceChallanSummeryTD_Type1 {
    
    print_invoice(table_header, table_data, summery) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write(''
                            + '<html>'
                            +     '<head>'
                            +         '<title>' + 'Invoice Summary' + '</title>'
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
                            +                                 '<p style="display: inline-block; text-align: center; font-size: 16px; text-decoration: underline;">' + 'Packing Summary' + '</p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">No. of Invoices</span><span class="label-value">: ' + (summery ? (summery.invoice_count ? (summery.invoice_count) : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="">'
                            // +                             '<td colspan="6" style="">'
                            +                                 '<p style="display: inline-block; float: right;"><span class="label">Depot</span><span class="label-value">: ' + (summery ? (summery.depo_name ? (summery.depo_name) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">DS No</span><span class="label-value">: ' + (summery ? (summery.ds_no ? (summery.ds_no) : '') : '') + '</span></p>'
                            +                                 '<p style="display: inline-block; float: right;"><span class="label">Delivery Date</span><span class="label-value">: ' + (summery ? (summery.delivery_date ? (summery.delivery_date).split(' ')[0] : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="padding-bottom: 20px;">'
                            +                                 '<p style="display: inline-block; float: left;"><span class="label">Territory</span><span class="label-value">: ' + (summery ? (summery.territory_id ? (summery.territory_id) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         this.create_table_header(table_header)
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_table_body_data(table_data)

                            +                         '<tr style="page-break-inside: avoid; page-break-after: always;">'
                            +                             '<td colspan="6" style="padding-top: 40px;">'
                            +                                 '<p style="display: inline-block; width: 33%; font-size: 14px; text-align: left;"><span class="label" style="text-align: center; display: inline-block; width: 120px; border-bottom: 1px solid #000000;">Issued By</span></p>'
                            +                                 '<p style="display: inline-block; width: 33%; font-size: 14px;"><span class="label" style="text-align: center; display: inline-block; width: 120px; border-bottom: 1px solid #000000;">Checked By</span></p>'
                            +                                 '<p style="display: inline-block; width: 33%; font-size: 14px; text-align: right;"><span class="label" style="text-align: center; display: inline-block; width: 120px; border-bottom: 1px solid #000000;">Received By</span></p>'
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
            result += this.createTableGroup(table_data[i])
            // result += this.createTableGroup(table_data[i])
        }
        
        return result


    }

    createTableGroup(data) {
        let result = ''
        if(data[0] ? (data[0].user_info ? (data[0].user_info.get_adm_user ? (data[0].user_info.get_adm_user.name) : false) : false) : false) {
            result += '' +
                    '<tr>' +
                        '<td colspan="6" style="text-align: left;"><p style="display: inline-block;"><span class="label">SPE/MIO</span><span class="label-value">: ' + data[0].user_info.get_adm_user.name + '</span></p></td>' +
                    '</tr>'

            for(let i=0; i<data.length; i++) {
                result += '' +
                        '<tr>' +
                            '<td style="border: 1px solid #000000;">' + (i + 1) + '</td>' +
                            '<td style="border: 1px solid #000000;">' + data[i].product_info.prod_code + '</td>' +
                            '<td style="border: 1px solid #000000; text-align: left;">' + data[i].product_info.prod_name + '</td>' +
                            '<td style="border: 1px solid #000000;">' + data[i].product_info.com_pack_size + '</td>' +
                            '<td style="border: 1px solid #000000;">' + data[i].batch_no + '</td>' +
                            '<td style="border: 1px solid #000000;">' + data[i].inv_qty + '</td>' +
                            // '<td style="border: 1px solid #000000;">' + 'DUMMY' + '</td>' +
                            // '<td style="border: 1px solid #000000;">' + 'DUMMY' + '</td>' +
                        '</tr>'
            }
        }

        return result
    }
}