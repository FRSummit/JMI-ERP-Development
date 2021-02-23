export default class SDR_018 {

    print_sdr_018(data) {
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
                            +                 this.create_summery_section_data()
                            +                 '<table style="">'
                            +                     '<thead>'
                            // +                         this.create_table_head_data()
                            +                         '<tr>'
                            +                             '<th>SN</th>'
                            +                             '<th>Product Name</th>'
                            +                             '<th>Pack Size</th>'
                            +                             '<th>Batch No</th>'
                            +                             '<th>MFG Date</th>'
                            +                             '<th>EXP Date</th>'
                            +                             '<th>Unit Price TP/SP</th>'
                            +                             '<th>Unit VAT</th>'
                            +                             '<th>Unit Price with VAT</th>'
                            +                             '<th>Qty</th>'
                            +                             '<th>Total VAT</th>'
                            +                             '<th>Total TP/SP</th>'
                            +                         '</tr>'
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_table_body_data(data)
                            //                    Subtotal Section
                            +                         '<tr style="border-top: 1px solid #000000;">'
                            +                             '<td colspan="2" style="text-align: left;">' + 'In Word Tk.' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td style="border: 1px solid #000000;">' + '424.04' + '</td>'
                            +                             '<td style="border: 1px solid #000000;">' + '2,861.08' + '</td>'
                            +                         '</tr>'

                            //                    Gross TP
                            +                         '<tr>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td colspan="2" style="text-align: right;">' + 'Gross TP :' + '</td>'
                            +                             '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                            +                             '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
                            +                         '</tr>'
                            //                    Total VAT on TP
                            +                         '<tr>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td colspan="2" style="text-align: right;">' + 'Total VAT on TP :' + '</td>'
                            +                             '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                            +                             '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
                            +                         '</tr>'
                            //                    Net payable
                            +                         '<tr>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td colspan="2" style="text-align: right; border-bottom: 1px solid #000000;"">' + 'Net Payable :' + '</td>'
                            +                             '<td style="text-align: right; border: 1px solid #000000;">' + '16,806.27' + '</td>'
                            +                             '<td style="text-align: right; border: 1px solid #000000;">' + '96,587.77' + '</td>'
                            +                         '</tr>'

                            // +                         this.create_subtotal_data()
                            // +                         this.create_gross_TP_data()
                            // +                         this.create_discount_data()
                            // +                         this.create_vat_data()
                            // +                         this.create_rounding_adjustment_data()
                            // +                         this.create_net_payable_data()
                            +                     '</tbody>'
                            +                 '</table>'
                            
                            //                Notes, Remarks & Statement Section
                            +                 '<div class="notes-remarks-statement" style="width: 80%;">'
                            +                     '<div class="notes" style="width: 80%;">'
                            +                         '<p style="margin: 0; line-height: 2;">Notes:	Expiry product replacement for total TP Value 3,004.14</p>'
                            +                     '</div>'
                            +                     '<div class="remarks" style="width: 80%;">'
                            +                         '<textarea type="text" style="width: 100%; height: 60px; padding: 10px 20px;" placeholder="Remarks: EID 04851"></textarea>'
                            +                     '</div>'
                            +                     '<div class="statement" style="width: 100%;">'
                            +                         '<p style="margin: 0; line-height: 2;">আমি Expiry/Damaged Products  এর পরিবর্তে উপোরক্ত ঔষধ গুলো বুঝিয়া পাইলাম ।</p>'
                            +                     '</div>'
                            +                 '</div>'
                            
                            //                Signature Section
                            +                 '<div class="signature-section" style="display: block; width: 100%; page-break-after: always; page-break-inside: always; margin-top: 20px; overflow: hidden; height: auto;">'
                            +                     '<div class="signature-section" style="display: inline-block; float: left;">'
                            +                         '<p style="margin: 0; text-align: center;"><span style="border-bottom: 1px solid #000000; width: 300px; display: block; height: 20px;"></span><span style="width: 300px; display: block;">Customer\'s Signature</span></p>'
                            +                     '</div>'
                            +                     '<div class="signature-section" style="display: inline-block; float: right;">'
                            +                         '<p style="margin: 0; text-align: center;"><span style="border-bottom: 1px solid #000000; width: 300px; display: block; height: 20px;">AZAHER</span><span style="width: 300px; display: block;">For NIPRO JMI Pharma Ltd.</span></p>'
                            +                     '</div>'
                            +                 '</div>'
                            +             '</div>'
                            +         '</div>'
                )

        mywindow.document.write('</body></html>');
        mywindow.document.close();
        mywindow.focus();
        mywindow.print();
        // mywindow.close();

        return true;
    }

    addStylePrint_3() {
        let style = ''
        style += ''
              + '@page {'
              +     'size: 8.5in 11in;'
              +     'margin: 25mm 5mm 15mm 5mm; border: 1px solid #000000'
              + '}'
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
              +         'font-size:12px;'
              +         'width: 100%;'
              +         'text-align: center;'
              +         'font-family: sans-serif'
              +         'page-break-inside: auto;'
              +     '}'
              +     'thead {'
              +         'border: 1px solid #000000; display: table-header-group;'
              +     '}'
              +     'tr {'
              // +         'page-break-inside:avoid; page-break-after: auto;'
              +     '}'
              +     'thead tr th{'
              +         'border: 1px solid #000000;'
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
                + '<tr>'
                +     '<th>SN</th>'
                +     '<th>Product Name</th>'
                +     '<th>Pack Size</th>'
                +     '<th>Batch No</th>'
                +     '<th>MFG Date</th>'
                +     '<th>EXP Date</th>'
                +     '<th>Unit Price TP/SP</th>'
                +     '<th>Unit VAT</th>'
                +     '<th>Unit Price with VAT</th>'
                +     '<th>Qty</th>'
                +     '<th>Total VAT</th>'
                +     '<th>Total TP/SP</th>'
                + '</tr>'

        return header
    }
    
    create_table_body_data(data) {
        let result = ''
        for(let i=0; i<data.length; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always;">'
                    +       '<td>' + data[i].sn + '</td>'
                    +       '<td style="width: 20%;">' + data[i].product_name + '</td>'
                    +       '<td>' + data[i].pack_size + '</td>'
                    +       '<td>' + data[i].batch_no + '</td>'
                    +       '<td>' + data[i].mfg_date + '</td>'
                    +       '<td>' + data[i].eXP_date + '</td>'
                    +       '<td>' + data[i].unit_price_TP_SP + '</td>'
                    +       '<td>' + data[i].unit_VAT + '</td>'
                    +       '<td>' + data[i].unit_price_with_VAT + '</td>'
                    +       '<td>' + data[i].qty + '</td>'
                    +       '<td>' + data[i].total_VAT + '</td>'
                    +       '<td>' + data[i].total_TP_SP + '</td>'
                    +   '</tr>'
        }
        return result + result + result + result + result + result + result + result
        // return result
    }

    create_subtotal_data() {
        let subtotal = ''
        subtotal += ''
                    +   '<tr style="border-top: 1px solid #000000;">'
                    +       '<td colspan="2" style="text-align: left;">' + 'In Word Tk.' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + '424.04' + '</td>'
                    +       '<td style="border: 1px solid #000000;">' + '2,861.08' + '</td>'
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
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
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
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="2" style="text-align: right;">' + 'Total VAT on TP :' + '</td>'
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
                    +       '<td>' + '' + '</td>'
                    +       '<td>' + '' + '</td>'
                    +       '<td colspan="2" style="text-align: right;">' + 'Net Payable :' + '</td>'
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