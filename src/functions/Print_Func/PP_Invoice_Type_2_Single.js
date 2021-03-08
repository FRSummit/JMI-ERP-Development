// import Service from '../../service/ERPSidebarService'
// const service = new Service()

// let data = []
// service.getDICWiseUsers_MonthlyDeliveryPlan()
//     .then(res => {
//         console.log(res.data.users.da)
//         data = res.data.users.da
//     })

import ComaSeparatedDigits from '../ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()

let NET_PAYABLE_AFTER_ADJ = 0

export default class PP_Invoice_Type_2_Single {
    
    print_invoice(data) {
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
                            +         '<div class="print-section" style="page-break-before: always; overflow: hidden;">'
                            +             '<div class="print-section-inner">'
                            +                 this.create_summery_section_data()
                            +                 '<table style="">'
                            +                     '<thead>'
                            +                         '<tr>'
                            +                             '<th>SN</th>'
                            +                             '<th style="width: 20%;">Product Name</th>'
                            +                             '<th>Pack Size</th>'
                            +                             '<th>Batch No</th>'
                            +                             '<th>MFG Date</th>'
                            +                             '<th>EXP Date</th>'
                            +                             '<th style="width: 8%;">Unit Price TP/SP</th>'
                            +                             '<th>Unit VAT</th>'
                            +                             '<th style="width: 8%;">Unit Price with VAT</th>'
                            +                             '<th>Quantity</th>'
                            +                             '<th>Bonus</th>'
                            +                             '<th>Total VAT</th>'
                            +                             '<th>Total TP/SP</th>'
                            +                         '</tr>'
                            +                     '</thead>'
                            +                     '<tbody>'
                            +                         this.create_multiple_person_table_body_data(data)
                            +                     '</tbody>'
                            +                 '</table>'

                            +                 '<table style="margin-top: 10px; page-break-inside: avoid;">'
                            +                     '<tbody>'
                            +                         this.create_gross_TP_data(data)
                            +                         this.create_discount_data(data)
                            +                         this.create_vat_data(data)
                            +                         this.create_rounding_adjustment_data(data)
                            +                         this.create_net_payable_data(data)
                            +                     '</tbody>'
                            +                 '</table>'

                            +                 '<div class="status-section" style=" margin-top: 20px;">'
                            +                     '<table style="width: 50%; margin-left: 0%; page-break-inside: avoid;">'
                            +                         '<tr>'
                            +                             '<td colspan="4"><p style="text-align: left; font-size: 14px; font-weight: 500;">Present Credit Status:</p></td>'
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
                            +                                 '<p style="text-align: right; font-size: 12px; font-weight: 500; margin: 8px 20px 0 0;">Total: <span style="border-top: 1px dotted #000000; border-bottom: 2px double #000000; font-weight: 600;">176,088.00</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                     '</table>'
                            +                 '</div>'
                            +                 '<div class="signature-section" style="float: right; page-break-after: always; page-break-inside: avoid; margin-top: 20px; font-size: 12px;">'
                            +                     '<p style="margin: 0; text-align: center;"><span style="border-bottom: 1px solid #000000; width: 300px; display: block;">AZAHER</span><span style="width: 300px; display: block;">For NIPRO JMI Pharma Ltd.</span></p>'
                            +                 '</div>'
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

    addStylePrint_3() {
        let style = ''
        style += ''
              + '@page {'
              +     'size: 8.5in 11in;'
              +     'margin: 25mm 10mm 15mm 15mm; border: 1px solid #000000'
              + '}'
              +
              + '@media print {'
              +     'p {'
              +         'margin: 0px;'
              +         'font-family: sans-serif'
              +     '}'
              +     '.initial-data-section {'
              +         'display: block;'
              +         'width: 100%;'
              +         'overflow: hidden;'
              +         'position: relative;'
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
              +         'font-size: 10px;'
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
              +     'table {'
              +         'border-collapse: collapse;'
              +         'color:black;'
              +         'font-size:10px;'
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

    create_multiple_person_table_body_data(data) {
        let multiple_person_data = ''
        for(let i=0; i<1; i++) {
            multiple_person_data += this.create_table_body_data(data)
        }
        return multiple_person_data
    }
    
    create_table_body_data(data) {
        let deal_type = ''
            deal_type += '' +
                            '<tr>' +
                                '<td colspan="13">' +
                                    '<p style="font-size: 10px; font-weight: 600; line-height: 1.5; text-align: left; border-bottom: 1px solid #000000; margin: 0; width: 150px;">Product Type: ' + 'Regular' + '</p>' +
                                '</td>' +
                            '</tr>'
        
        let result = ''
        let product_details = data.invoice_details
        for(let i=0; i<product_details.length; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always;">'
                    +       '<td style="">' + (i + 1) + '.</td>'
                    +       '<td style=" width: 20%; text-align: left;">' + (product_details[i].product_info ? (product_details[i].product_info.prod_name ? (product_details[i].product_info.prod_name) : '') : '') + '</td>'
                    +       '<td style="">' + (product_details[i].product_info ? (product_details[i].product_info.com_pack_size ? (product_details[i].product_info.com_pack_size) : '') : '') + '</td>'
                    +       '<td style="">' + (product_details[i].batch_no ? (product_details[i].batch_no) : '') + '</td>'
                    +       '<td style="">' + this.createMFG_EXP_Date((product_details[i].whss_batch ? (product_details[i].whss_batch.mfg_date ? (product_details[i].whss_batch.mfg_date).split(' ')[0] : '') : '')) + '</td>'
                    +       '<td style="">' + this.createMFG_EXP_Date((product_details[i].whss_batch ? (product_details[i].whss_batch.exp_date ? (product_details[i].whss_batch.exp_date).split(' ')[0] : '') : '')) + '</td>'
                    +       '<td style=" text-align: right;">' + comaSeparatedDigits.comaSeparate(product_details[i].unit_tp ? (product_details[i].unit_tp) : '') + '</td>'
                    +       '<td style=" text-align: right;">' + comaSeparatedDigits.comaSeparate(product_details[i].unit_vat ? (product_details[i].unit_vat) : '') + '</td>'
                    +       '<td style=" text-align: right;">' + comaSeparatedDigits.comaSeparate(this.createUnitPriceVat((product_details[i].unit_tp ? (product_details[i].unit_tp) : 0), (product_details[i].unit_vat ? (product_details[i].unit_vat) : 0))) + '</td>'
                    +       '<td style="">' + (product_details[i].qty ? (product_details[i].qty) : '') + '</td>'
                    +       '<td style="">' + (product_details[i].bonus_qty ? (product_details[i].bonus_qty) : '') + '</td>'
                    +       '<td style=" text-align: right;">' + comaSeparatedDigits.comaSeparate(product_details[i].inv_vat ? (product_details[i].inv_vat) : '') + '</td>'
                    +       '<td style=" text-align: right;">' + comaSeparatedDigits.comaSeparate(product_details[i].inv_tp ? (product_details[i].inv_tp) : '') + '</td>'
                    +   '</tr>'
        }

        
        // return result + result + result + result + result + result + result + result + result+ result + result + result + result + result + result + result
        // return deal_type + result + deal_type + result +deal_type + result
        return deal_type + result + this.create_subtotal_data(product_details)
    }

    createMFG_EXP_Date(dt) {
        return dt.split('-')[2] + '' + dt.split('-')[0].slice(-2)
    }

    createUnitPriceVat(tp, vat) {
        let result = parseFloat(tp) + parseFloat(vat)
        return Number(result).toFixed(2)
    }

    create_subtotal_data(product_details) {
        let total_tp_sp = 0
        let total_vat = 0
        for(let i=0; i<product_details.length; i++) {
            total_vat += (product_details[i].inv_vat ? parseFloat(product_details[i].inv_vat) : 0)
            total_tp_sp += (product_details[i].inv_tp ? parseFloat(product_details[i].inv_tp) : 0)
        }
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
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + comaSeparatedDigits.comaSeparate(Number(total_vat).toFixed(2)) + '</td>'
                    +       '<td style="text-align: right; border-top: 1px solid #000000;">' + comaSeparatedDigits.comaSeparate(Number(total_tp_sp).toFixed(2)) + '</td>'
                    +   '</tr>'
        return subtotal
    }

    create_gross_TP_data(data) {
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
                    +       '<td style="text-align: right; margin-top: 10px; border-bottom: 1px solid #000000;">' + comaSeparatedDigits.comaSeparate(data.inv_tp) + '</td>'
                    +   '</tr>'
        return gross_tp
    }

    create_discount_data(data) {
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + comaSeparatedDigits.comaSeparate(data.inv_discount) + '</td>'
                    +   '</tr>'
        return discount
    }

    create_vat_data(data) {
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + comaSeparatedDigits.comaSeparate(data.inv_vat) + '</td>'
                    +   '</tr>'
        return vat
    }

    create_rounding_adjustment_data(data) {
        let total = data.inv_total
        let round_total = Math.round(total);
        let adjustment = (total - round_total).toFixed(2);
        NET_PAYABLE_AFTER_ADJ = round_total

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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + adjustment + '</td>'
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + comaSeparatedDigits.comaSeparate(NET_PAYABLE_AFTER_ADJ) + '.00</td>'
                    +   '</tr>'
        return net_payable
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