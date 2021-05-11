import Service from '../../service/ERPSidebarService'
const service = new Service()

let data = []
service.getDICWiseUsers_MonthlyDeliveryPlan()
    .then(res => {
        console.log(res.data.users.da)
        data = res.data.users.da
    })

export default class PP_Invoice_Type_2 {
    
    print_invoice() {
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
                            +         this.createBody()
                )

        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        mywindow.print();
        // mywindow.close();

        return true;
    }

    createBody() {
        let inner_body = ''
        for(let i=0; i<data.length; i++) {
                inner_body += ''
                            +         '<div class="print-section" style="page-break-before: always; overflow: hidden;">'
                            +             '<div class="print-section-inner">'
                            +                 this.create_summery_section_data()
                            +                 '<table style="">'
                            +                     '<thead>'
                            // +                         this.create_table_head_data()
                            +                         '<tr>'
                            +                             '<th>SN</th>'
                            +                             '<th style="width: 20%;">Product Name</th>'
                            +                             '<th>Pack Size</th>'
                            +                             '<th>Batch No</th>'
                            +                             '<th>MFG Date</th>'
                            +                             '<th>EXP Date</th>'
                            +                             '<th>Unit Price TP/SP</th>'
                            +                             '<th>Unit VAT</th>'
                            +                             '<th>Unit Price with VAT</th>'
                            +                             '<th>Qty</th>'
                            +                             '<th>Bonus</th>'
                            +                             '<th>Total VAT</th>'
                            +                             '<th>Total TP/SP</th>'
                            +                         '</tr>'
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_multiple_person_table_body_data()
                            +                     '</tbody>'
                            +                 '</table>'

                            +                 '<table style="margin-top: 10px; page-break-inside: avoid;">'
                            +                     '<tbody>'
                            +                         this.create_gross_TP_data()
                            +                         this.create_discount_data()
                            +                         this.create_vat_data()
                            +                         this.create_rounding_adjustment_data()
                            +                         this.create_net_payable_data()
                            +                     '</tbody>'
                            +                 '</table>'

                            +                 '<div class="status-section" style=" margin-top: 20px;">'
                            +                     '<table style="width: 50%; margin-left: 0%; page-break-inside: avoid;">'
                            +                         '<tr>'
                            +                             '<td colspan="4"><p style="text-align: left; font-size: 16px; font-weight: 500;">Present Credit Status:</p></td>'
                            +                         '</tr>'
                            +                         '<tr  style="border-bottom: 1px solid #000000;">'
                            +                             '<td>Invoice No</td>'
                            +                             '<td>Inv Date</td>'
                            +                             '<td>Pay Mode</td>'
                            +                             '<td>Outstanding</td>'
                            +                         '</tr>'
                            +                         '<tr>'
                            +                             '<td>DHK012030651</td>'
                            +                             '<td>31/01/2020</td>'
                            +                             '<td>CREDIT</td>'
                            +                             '<td>176,088.00</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="4">'
                            +                                 '<p style="text-align: right; font-size: 16px; font-weight: 500; margin: 8px 20px 0 0;">Total: <span style="border-top: 1px dotted #000000; border-bottom: 2px double #000000; font-weight: 600;">176,088.00</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                     '</table>'
                            +                 '</div>'
                            +                 '<div class="signature-section" style="float: right; page-break-after: always; page-break-inside: avoid; margin-top: 20px;">'
                            +                     '<p style="margin: 0; text-align: center;"><span style="border-bottom: 1px solid #000000; width: 300px; display: block;">AZAHER</span><span style="width: 300px; display: block;">For NIPRO JMI Pharma Ltd.</span></p>'
                            +                 '</div>'
                            +             '</div>'
                            +         '</div>'
        }

        return inner_body
    }

    addStylePrint_3() {
        let style = ''
        style += ''
              + '@page {'
              +     'size: 8.5in 11in;'
              +     'margin: 25mm 10mm 30mm 15mm; border: 1px solid #000000'
              + '}'
              // + '@page:last {'
              // +     '.footer {'
              // +         'position: fixed;'
              // +         'bottom: 0;'
              // +     '}'
              // + '}'
              // +     'size: 7in 9.25in;'
              // +     'margin: 27mm 16mm 27mm 16mm;'
              // +     'size: 8.5in 11.0in'
              // +     'margin: 96px 72px 72px 72px'
            //      A4 => size: 21cm 29.7cm;
            //      A4 => margin: 30mm 45mm 30mm 45mm;
              +
              + '@media print {'
              +     'p {'
              +         'margin: 0px;'
              +         'font-family: "Calibri";'
              +     '}'
              /*--- initial-data-section ---*/
              +     '.initial-data-section {'
              +         'display: block;'
              +         'width: 100%;'
              +         'overflow: hidden;'
              +         'position: relative;'
            //   +         'padding-bottom: 20px;'
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
              +         'font-size: 12px;'
              +         'line-height: 1;'
              +         'font-weight: 600;'
              +         'padding: 2px 0;'
              +         'margin: 2px 0;'
              +     '}'
              +     '.initial-data-section p span.label {'
              +         'display: inline-block;'
              +         'width: 95px;'
              +     '}'
              +     '.initial-data-section p span.label-value {'
              +         'display: inline-block;'
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
              +         'font-size:12px;'
              +         'width: 100%; text-align: center;'
              +         'text-align: center;'
              +         'font-family: sans-serif'
              +         'page-break-inside: auto;'
              +     '}'
              +     'thead {'
              +         'border: 1px solid #000000; display: table-header-group;'
              +     '}'
              +     'tr {'
              +     '}'
              +     'thead tr th{'
              +         'border: 1px solid #000000'
              +     '}'
              +     'tbody {'
              +         'display: table-header-group;'
              +     '}'
              +      'table thead th, table tbody td {'
            //   +          'padding: 2px;'
              +      '}'
              + '}'
        return style
    }

    create_summery_section_data() {

        let result = ''
                    + '<div class="initial-data-section">'
                    +     '<div class="left-section">'
                    +         '<p>'
                    +             '<span class="label">Customer Code</span>'
                    +             '<span class="label-value">: ' + 'DHK34105' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Customer Name</span>'
                    +             '<span class="label-value">: ' + 'LABAID CARDIAC HOSPITAL' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Address</span>'
                    +             '<span class="label-value">: ' + 'HOUSE-01, RAOD-04, DHANMONDI' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">MIO Name</span>'
                    +             '<span class="label-value">: ' + 'RAMJAN ALI' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">S.R Name</span>'
                    +             '<span class="label-value">: ' + 'RAMJAN ALI' + '</span>'
                    +         '</p>'
                    +     '</div>'
                    +     '<div class="right-section">'
                    +         '<p>'
                    +             '<span class="label">Invoice No</span>'
                    +             '<span class="label-value">: ' + 'DHK0123456789' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Invoice Date</span>'
                    +             '<span class="label-value">: ' + '30/09/2019' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Depot</span>'
                    +             '<span class="label-value">: ' + 'Dhaka Depot' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">T. Code</span>'
                    +             '<span class="label-value">: ' + 'DHK341' + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Date</span>'
                    +             '<span class="label-value">: ' + '29/09/2019' + '</span>'
                    +         '</p>'
                    +     '</div>'
                    +     '<p class="order-no">'
                    +         '<span class="label">Order No:</span>'
                    +         '<span class="label-value">' + '000380864-0601' + '</span>'
                    +     '</p>'
                    + '</div>'
        return result
    }
    
    create_table_head_data() {
        let header = ''
        header += ''
                +     '<tr>'
                +       '<th>SN</th>'
                +       '<th style="width: 20%;">Product Name</th>'
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

    create_multiple_person_table_body_data() {
        let multiple_person_data = ''
        for(let i=0; i<4; i++) {
            multiple_person_data += this.create_table_body_data()
        }
        return multiple_person_data
    }
    
    create_table_body_data() {
        let deal_type = ''
            deal_type += '' +
                            '<tr>' +
                                '<td colspan="13">' +
                                    '<p style="font-size: 12px; font-weight: 600; line-height: 1.5; text-align: left; border-bottom: 1px solid #000000; margin: 0; width: 150px;">Product Type: ' + 'Regular' + '</p>' +
                                '</td>' +
                            '</tr>'
        
        let result = ''
        for(let i=0; i<8; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always;">'
                    +       '<td style="">' + (i + 1) + '</td>'
                    +       '<td style=" width: 20%; text-align: left;">' + 'data[i].product_name' + '</td>'
                    +       '<td style="">' + '15' + '</td>'
                    +       '<td style="">' + '159' + '</td>'
                    +       '<td style="">' + '1456' + '</td>'
                    +       '<td style="">' + '1456' + '</td>'
                    +       '<td style=" text-align: right;">' + '159.33' + '</td>'
                    +       '<td style=" text-align: right;">' + '159.33' + '</td>'
                    +       '<td style=" text-align: right;">' + '159.33' + '</td>'
                    +       '<td style="">' + '159' + '</td>'
                    +       '<td style="">' + '33' + '</td>'
                    +       '<td style=" text-align: right;">' + '159.33' + '</td>'
                    +       '<td style=" text-align: right;">' + '159.33' + '</td>'
                    +   '</tr>'
        }

        
        // return result + result + result + result + result + result + result + result + result+ result + result + result + result + result + result + result
        // return deal_type + result + deal_type + result +deal_type + result
        return deal_type + result + this.create_subtotal_data()
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
                    +       '<td colspan="5" style="text-align: right;">' + 'Sub Total :' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '' + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return subtotal
    }

    create_gross_TP_data() {
        let gross_tp = ''
        gross_tp += ''
                    +   '<tr style=" border-top: 1px solid #000000;">'
                    +       '<td colspan="9" style="margin-top: 10px;">' + '<p style="text-align: left; margin: 0;">In Word : ' + this.convert_number_to_word(176088) + '.</p>' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    +       '<td colspan="2" style="text-align: right; margin-top: 10px;">' + 'Gross TP :' + '</td>'
                    +       '<td style="text-align: right; margin-top: 10px; border-bottom: 1px solid #000000;">' + '' + '</td>'
                    +       '<td style="text-align: right; margin-top: 10px; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '' + '</td>'
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '' + '</td>'
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '' + '</td>'
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '' + '</td>'
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return net_payable
    }

    create_credit_status() {
        let result = ''
            result += ''
                    +   '<div class="status-section" style=" margin-top: 20px;">'
                    +       '<table style="width: 50%; margin-left: 0%; page-break-inside: avoid;">'
                    +           '<tr>'
                    +               '<td colspan="4"><p style="text-align: left; font-size: 14px;">Present Credit Status:</p></td>'
                    +           '</tr>'
                    +           '<tr  style="border-bottom: 1px solid #000000;">'
                    +               '<td>Invoice No</td>'
                    +               '<td>Inv Date</td>'
                    +               '<td>Pay Mode</td>'
                    +               '<td>Outstanding</td>'
                    +           '</tr>'
                    +           '<tr>'
                    +               '<td>' + '' + '</td>'
                    +               '<td>' + '' + '</td>'
                    +               '<td>' + '' + '</td>'
                    +               '<td>' + '' + '</td>'
                    +           '</tr>'
                    +           '<tr style="">'
                    +               '<td colspan="4">'
                    +                   '<p style="text-align: right; font-size: 12px; margin: 8px 20px 0 0;">Total: <span style="border-top: 1px dotted #000000; border-bottom: 2px double #000000;">' + '' + '</span></p>'
                    +               '</td>'
                    +           '</tr>'
                    +       '</table>'
                    +   '</div>'

        return result
    }

    create_footer() {
      let footer_text = ''
      footer_text += ''
                  + '<div class="footer" style="">'
                  +     '<p>'
                  +         'This is footer'
                  +     '</p>'
                  + '</div>'
      
      return footer_text
    }

    convert_number_to_word(num) {
        var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
        var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
        
        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; 
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;
    }
}