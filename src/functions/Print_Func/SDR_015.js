export default class SDR_015 {

    print_sdr_015(data) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write(''
                            + '<html>'
                            +     '<head>'
                            +         '<title>' + 'Invoice' + '</title>'
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
        let result = ''
        for(let i=0; i<data.length; i++) {
            result +=   ''
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
                    +       '<td colspan="9">' + '<p style="text-align: right;">In Word : Taka One Lac Eight Thousand Five Hundred Sixty Five only.</p>' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    +       '<td colspan="2" style="text-align: right;">' + 'Gross TP :' + '</td>'
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

    // absolute_position_tests() {
    //     let result = ''
    //                 + '<div class="amount-in-word">'
    //                 +   '<p>In Word : Taka One Lac Eight Thousand Five Hundred Sixty Five only.</p>'
    //                 + '</div>'
    //     return result
    // }
}