import ComaSeparatedDigits from '../ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()

export default class PP_InvoiceChallanSummeryTD_Type1 {
    
    printReport(header, table_header, table_data, warehouse) {
        console.log(header)
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write(''
                            + '<html>'
                            +     '<head>'
                            +         '<title>' + 'Invoice Summery' + '</title>'
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
                            +                             '<td colspan="10" style="">'
                            +                                 '<p style="display: block; text-align: center; font-size: 20px; font-weight: bold;">' + header.title + '</p>'
                            +                                 '<p style="display: block; text-align: center; font-size: 12px;">' + header.address + '</p>'
                            +                                 '<p style="display: block; text-align: center; padding-bottom: 10px;"><span style=" font-size: 18px; font-weight: bold; text-decoration: underline; margin-right: -160px;">' + header.subtitle + '</span><span style="font-size: 12px; font-weight: 100; float: right; width: 160px;">Printing Date: ' + this.printing_Date_Format_2() + '</span></p>'
                            +                                 '<p style="display: block; text-align: center; padding-bottom: 30px;"></span><span style="font-size: 14px; font-weight: bold; float: right;">' + warehouse + '</span></p>'
                            +                             '</td>'
                            // +                         '</tr>'
                            // // +                         '<tr style="">'
                            // // +                             '<td colspan="6" style="">'
                            // +                                 '<p style="display: inline-block; float: right;"><span class="label">Depot</span><span class="label-value">: ' + (summery ? (summery.depo_name ? (summery.depo_name) : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="">'
                            // +                             '<td colspan="6" style="">'
                            // +                                 '<p style="display: inline-block; float: left;"><span class="label">DS No</span><span class="label-value">: ' + (summery ? (summery.ds_no ? (summery.ds_no) : '') : '') + '</span></p>'
                            // +                                 '<p style="display: inline-block; float: right;"><span class="label">Delivery Date</span><span class="label-value">: ' + (summery ? (summery.delivery_date ? (summery.delivery_date).split(' ')[0] : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="">'
                            // +                             '<td colspan="6" style="padding-bottom: 20px;">'
                            // +                                 '<p style="display: inline-block; float: left;"><span class="label">Territory</span><span class="label-value">: ' + (summery ? (summery.territory_id ? (summery.territory_id) : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            +                         this.create_table_header(table_header)
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_table_body_data(table_data)

                            // +                         '<tr style="page-break-inside: avoid; page-break-after: always;">'
                            // +                             '<td colspan="6" style="padding-top: 40px;">'
                            // +                                 '<p style="display: inline-block; width: 33%; font-size: 14px; text-align: left;"><span class="label" style="text-align: center; display: inline-block; width: 120px; border-bottom: 1px solid #000000;">Issued By</span></p>'
                            // +                                 '<p style="display: inline-block; width: 33%; font-size: 14px;"><span class="label" style="text-align: center; display: inline-block; width: 120px; border-bottom: 1px solid #000000;">Checked By</span></p>'
                            // +                                 '<p style="display: inline-block; width: 33%; font-size: 14px; text-align: right;"><span class="label" style="text-align: center; display: inline-block; width: 120px; border-bottom: 1px solid #000000;">Received By</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
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

    printing_Date_Format_2() {
        var t = new Date();
        return t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() + ' ' + t.getHours() + ':' + t.getMinutes()
    }

    addStylePrint_3() {
        let style = ''
        style += ''
              + '@page {'
              +     'size: 8.5in 11in;'
              +     'margin: 5mm 10mm 5mm 15mm; border: 1px solid #000000'
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
        // for(let i=0; i<table_data.length; i++) {
            result += this.createTableGroup(table_data)
            // result += this.createTableGroup(table_data[i])
        // }
        
        return result


    }

    createTableGroup(data) {
        console.log(Object.keys(data))
        let data_objects = Object.keys(data)
        console.log(data_objects[0])
        console.log(Object.entries(data)[0][1])
        let result = ''
        // // if(data[0] ? (data[0].user_info ? (data[0].user_info.get_adm_user ? (data[0].user_info.get_adm_user.name) : false) : false) : false) {
        //     result += '' +
        //             '<tr>' +
        //                 '<td colspan="6" style="text-align: left;"><p style="display: inline-block;"><span class="label">SPE/MIO</span><span class="label-value">: ' + 'Dummy' + '</span></p></td>' +
        //             '</tr>'

        //     for(let i=0; i<data.length; i++) {
        //         result += '' +
        //                 '<tr>' +
        //                     '<td style="border: 1px solid #000000;">' + (i + 1) + '</td>' +
        //                     '<td style="border: 1px solid #000000;">' + data[i].code + '</td>' +
        //                     '<td style="border: 1px solid #000000; text-align: left;">' + data[i].name + '</td>' +
        //                     '<td style="border: 1px solid #000000;">' + data[i].batch + '</td>' +
        //                     '<td style="border: 1px solid #000000;">' + data[i].mfg_date + '</td>' +
        //                     '<td style="border: 1px solid #000000;">' + data[i].exp_date + '</td>' +
        //                     // '<td style="border: 1px solid #000000;">' + 'DUMMY' + '</td>' +
        //                     // '<td style="border: 1px solid #000000;">' + 'DUMMY' + '</td>' +
        //                 '</tr>'
        //     }
        // // }
        for(let i=0; i<Object.keys(data).length; i++) {
            result += '' +
                            '<tr>' +
                                '<td colspan="10" style="text-align: left; text-decoration: underline; font-weight: bold;">' + Object.entries(data)[i][0] + '</td>' +
                            '</tr>'
            // result += '' +
            //                 '<tr>' +
            //                     '<td>' + Object.entries(data)[i] + '</td>' +
            //                 '</tr>'

            for(let j=0; j<Object.entries(data)[i].length; j++) {
                for(let k=0; k<Object.entries(data)[i][j].length; k++) {
                    if(Object.entries(data)[i][j][k].code) {
                        result += '' +
                                        '<tr>' +
                                            '<td style="text-align: left;">' + (k + 1) + '</td>' +
                                            '<td>' + Object.entries(data)[i][j][k].code + '</td>' +
                                            '<td style="text-align: left;">' + Object.entries(data)[i][j][k].name + '</td>' +
                                            '<td>' + Object.entries(data)[i][j][k].batch + '</td>' +
                                            '<td>' + this.createMFG_EXP_Date(Object.entries(data)[i][j][k].mfg_date) + '</td>' +
                                            '<td>' + this.createMFG_EXP_Date(Object.entries(data)[i][j][k].exp_date) + '</td>' +
                                            '<td>' + Object.entries(data)[i][j][k].pack_size + '</td>' +
                                            '<td style="text-align: right;">' + Object.entries(data)[i][j][k].unit_price + '</td>' +
                                            '<td>' + Object.entries(data)[i][j][k].stock + '</td>' +
                                            '<td style="text-align: right;">' + comaSeparatedDigits.comaSeparateLakh(Math.round(Object.entries(data)[i][j][k].value)) + '</td>' +
                                        '</tr>'
                    }
                }
            }
        }

        return result
    }
    
    dateFormat2(d) {
        var t = new Date(d);
        var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString().slice(-2);
    }

    createMFG_EXP_Date(dt) {
        return this.dateFormat2(dt)
    }
}