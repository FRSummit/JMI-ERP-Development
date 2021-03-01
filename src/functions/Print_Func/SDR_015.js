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
                            +     '<body style="font-family: sans-serif;">'
                            +         '<div class="print-section" style="">'
                            +             '<div class="print-section-inner">'
                            +                 this.create_apendix(data.doc_apendix[0])
                            +                 this.create_summery_section_data(data.invoice_header_data[0])
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
                            // +                         this.create_table_body_data(data.table_data)
                            +                         this.create_multiple_person_table_body_data(data.table_data)
                            +                         this.create_subtotal_data()
                            +                         this.create_gross_TP_data()
                            +                         this.create_discount_data()
                            +                         this.create_vat_data()
                            +                         this.create_rounding_adjustment_data()
                            +                         this.create_net_payable_data()
                            +                     '</tbody>'
                            +                 '</table>'
                            +                 '<div class="status-section" style=" margin-top: 20px;">'
                            +                     '<table style="width: 50%; margin-left: 0%;">'
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
                            +                 '<div class="signature-section" style="float: right; page-break-after: always; page-break-inside: always; margin-top: 20px;">'
                            +                     '<p style="margin: 0; text-align: center;"><span style="border-bottom: 1px solid #000000; width: 300px; display: block;">AZAHER</span><span style="width: 300px; display: block;">For NIPRO JMI Pharma Ltd.</span></p>'
                            +                 '</div>'
                            +             '</div>'
                            +         '</div>'
                            // +         '<div class="print-footer-section" style="position: fixed; bottom: 0; height: 60px;">'
                            // +             '<p style="margin: 0;">Footer Section</p>'
                            // +             '<p style="margin: 0;">Footer Section</p>'
                            // +             '<p style="margin: 0;">Footer Section</p>'
                            // +         '</div>'
                            // +         this.create_footer()
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
              + '@page {'
              +     'size: 8.5in 11in;'
              +     'margin: 25mm 10mm 15mm 15mm; border: 1px solid #000000'
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
              +         'font-family: sans-serif'
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
              +         'font-size:14px;'
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
              + '}'
        return style
    }

    create_header() {
      let header = ''
      header += ''
              + '<div class="header" style="width: 100%; margin-bottom: 20px; background: #dedede;">'
              +     '<p style="text-align: center; font-size: 20px; line-height: 1.7; font-weight: 800; margin: 0;">NIPRO JMI PHARMA LTD.</p>'
              +     '<p style="text-align: center; font-size: 14px; line-height: 1.7; margin: 0;">First Japanese Joint Venture Pharmaceuticals in Bangladesh</p>'
              +     '<p style="text-align: center; font-size: 14px; line-height: 1.7; margin: 0;">First Japanese Joint Venture Pharmaceuticals in Bangladesh</p>'
              +     '<style style="border-bottom: 1px solid #000000; display: block; width: 100%; height: 1px;"></style>'
              +     '<style style="border-bottom: 1px solid #000000; display: block; width: 100%; height: 1px;"></style>'
              + '</div>'
      return header
    }

    create_apendix(apendix_data) {
        let apendix = ''
        apendix += ''
                + '<div style="width: 100%;">'
                +     '<p style="text-align: left; font-size: 12px; line-height: 1.7; margin: 0;"><span style="display: inline-block; width: 50px;">Apendix</span><span>: ' + apendix_data.apendix + '</span></p>'
                +     '<p style="text-align: left; font-size: 12px; line-height: 1.7; margin: 0;"><span style="display: inline-block; width: 50px;">Doc. No</span><span>: ' + apendix_data.doc_no + '</p>'
                +     '<p style="text-align: left; font-size: 12px; line-height: 1.7; margin: 0;"><span style="display: inline-block; width: 50px;">Form No</span><span>: ' + apendix_data.form_no + '</p>'
                + '</div>'
        return apendix
    }

    create_summery_section_data(header_data) {
        // let custoemrCode = 'DHK34105'
        // let custoemrName = 'LABAID CARDIAC HOSPITAL'
        // let address      = 'HOUSE-01, RAOD-04, DHANMONDI'
        // let moi_name     = 'SHAHIDUL ISLAM'
        // let sr_name      = 'RAMJAN ALI'

        // let invoice_number = 'DHK081920086'
        // let invoice_date   = '30/09/2019'
        // let depot          = 'Dhaka Depot'
        // let t_code         = 'DHK341'
        // let date           = '29.09.2019'

        // let order_no = '000380864-0601'

        let result = ''
                    + '<div class="initial-data-section">'
                    +     '<div class="left-section">'
                    +         '<p>'
                    +             '<span class="label">Customer Code</span>'
                    +             '<span class="label-value">: ' + header_data.customer_code + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Customer Name</span>'
                    +             '<span class="label-value">: ' + header_data.customer_name + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Address</span>'
                    +             '<span class="label-value">: ' + header_data.address + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">MIO Name</span>'
                    +             '<span class="label-value">: ' + header_data.MIO_name + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">S.R Name</span>'
                    +             '<span class="label-value">: ' + header_data.SR_name + '</span>'
                    +         '</p>'
                    +     '</div>'
                    +     '<div class="right-section">'
                    +         '<p>'
                    +             '<span class="label">Invoice No</span>'
                    +             '<span class="label-value">: ' + header_data.invoice_no + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Invoice Date</span>'
                    +             '<span class="label-value">: ' + header_data.invoice_date + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Depot</span>'
                    +             '<span class="label-value">: ' + header_data.depot + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">T. Code</span>'
                    +             '<span class="label-value">: ' + header_data.t_code + '</span>'
                    +         '</p>'
                    +         '<p>'
                    +             '<span class="label">Date</span>'
                    +             '<span class="label-value">: ' + header_data.date + '</span>'
                    +         '</p>'
                    +     '</div>'
                    +     '<p class="order-no">'
                    +         '<span class="label">Order No:</span>'
                    +         '<span class="label-value">' + header_data.order_no + '</span>'
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

    create_multiple_person_table_body_data(data) {
        let multiple_person_data = ''
        for(let i=0; i<10; i++) {
            multiple_person_data += this.create_table_body_data(data)
        }
        return multiple_person_data
    }
    
    create_table_body_data(data) {
        let deal_type = ''
            deal_type += '' +
                            '<tr>' +
                                '<td colspan="13">' +
                                    '<p style="font-size: 12px; font-weight: 600; line-height: 1.5; text-align: left; border-bottom: 1px solid #000000; margin: 0; width: 150px;">Product Type: ' + 'Regular' + '</p>' +
                                '</td>' +
                            '</tr>'
        
        let result = ''
        for(let i=0; i<data.length; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always;">'
                    +       '<td style="border: 1px solid #000000;">' + (i + 1) + '</td>'
                    +       '<td style="border: 1px solid #000000; width: 20%; text-align: left;">' + data[i].product_name + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + data[i].pack_size + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + data[i].batch_no + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + data[i].mfg_date + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + data[i].eXP_date + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: right;">' + data[i].unit_price_TP_SP + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: right;">' + data[i].unit_VAT + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: right;">' + data[i].unit_price_with_VAT + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + data[i].qty + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + data[i].bonus + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: right;">' + data[i].total_VAT + '</td>'
                    +       '<td style="border: 1px solid #000000; text-align: right;">' + data[i].total_TP_SP + '</td>'
                    +   '</tr>'
        }
        // return result + result + result + result + result + result + result + result + result+ result + result + result + result + result + result + result
        // return deal_type + result + deal_type + result +deal_type + result
        return deal_type + result
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
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
                    +   '</tr>'
        return subtotal
    }

    create_gross_TP_data() {
        let gross_tp = ''
        gross_tp += ''
                    +   '<tr>'
                    +       '<td colspan="9">' + '<p style="text-align: left;">In Word : Taka One Lac Eight Thousand Five Hundred Sixty Five only.</p>' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    // +       '<td>' + '' + '</td>'
                    +       '<td colspan="2" style="text-align: right;">' + 'Gross TP :' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
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
                    +       '<td style="text-align: right; border: 1px solid #000000; border-bottom: 1px solid #000000;">' + '16,806.27' + '</td>'
                    +       '<td style="text-align: right; border: 1px solid #000000; border-bottom: 1px solid #000000;">' + '96,587.77' + '</td>'
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
}