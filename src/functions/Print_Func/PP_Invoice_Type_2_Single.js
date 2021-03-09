import ComaSeparatedDigits from '../ComaSeparatedDigits'
const comaSeparatedDigits = new ComaSeparatedDigits()

let NET_PAYABLE_AFTER_ADJ = 0
let ROUNDING_ADJ = 0
let PRODUCT_SERIAL_NO = 1

var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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
                            +     '<body style="">'
                            +         '<div class="print-section" style="page-break-before: always; overflow: hidden;">'
                            +             '<div class="print-section-inner">'
                            // +                 this.create_summery_section_data()
                            // +                 '<table class="initial-data-section" style="">'
                            // +                     '<thead style="display: list-item;">'
                            // +                         '<tr style="display: list-item;">'
                            // +                             '<td style="display: inline-block; width: 50%; text-align: left;">'
                            // +                                 '<p><span class="label">Customer Code</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.display_code ? (data.sbu_customer_info.display_code) : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                             '<td style="display: inline-block; width: 49%; text-align: right;">'
                            // +                                 '<p><span class="label">Invoice No</span><span class="label-value">: ' + (data.invoice_no ? data.invoice_no : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="display: list-item;">'
                            // +                             '<td style="display: inline-block; width: 50%; text-align: left;">'
                            // +                                 '<p><span class="label">Customer Name</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.display_name ? (data.sbu_customer_info.display_name) : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                             '<td style="display: inline-block; width: 49%; text-align: right;">'
                            // +                                 '<p><span class="label">Invoice Date</span><span class="label-value">: ' + (data.invoice_date ? (data.invoice_date).split(' ')[0] : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="display: list-item;">'
                            // +                             '<td style="display: inline-block; width: 50%; text-align: left;">'
                            // +                                 '<p><span class="label">Address</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_info ? (data.sbu_customer_info.customer_info.customer_address ? (data.sbu_customer_info.customer_info.customer_address) : '') : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                             '<td style="display: inline-block; width: 49%; text-align: right;">'
                            // +                                 '<p><span class="label">Depot</span><span class="label-value">: ' + (data.area_info ? (data.area_info.area_name ? (data.area_info.area_name) : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="display: list-item;">'
                            // +                             '<td style="display: inline-block; width: 50%; text-align: left;">'
                            // +                                 '<p><span class="label">MIO Name</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_area_info ? (data.sbu_customer_info.customer_area_info.sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.name ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.name) : '') : '') : '') : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                             '<td style="display: inline-block; width: 49%; text-align: right;">'
                            // +                                 '<p><span class="label">T.Code</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_area_info ? (data.sbu_customer_info.customer_area_info.sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.get_sales_area ? (data.sbu_customer_info.customer_area_info.sales_force.get_sales_area.display_code) : '') : '') : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                         '<tr style="display: list-item;">'
                            // +                             '<td style="display: inline-block; width: 50%; text-align: left;">'
                            // +                                 '<p><span class="label">S.R Name</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_area_info ? (data.sbu_customer_info.customer_area_info.sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name) : '') : '') : '') : '') : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                             '<td style="display: inline-block; width: 49%; text-align: right;">'
                            // +                                 '<p style="display: inline-block;"><span class="label">Order No</span><span class="label-value">: ' + (data.order_info ? (data.order_info.order_no ? (data.order_info.order_no) : '') : '') + '</span></p>'
                            // +                                 '<p style="display: inline-block;"><span class="label">Order Date</span><span class="label-value">: ' + (data.order_info ? (data.order_info.order_date ? (data.order_info.order_date).split(' ')[0] : '') : '') + '</span></p>'
                            // +                             '</td>'
                            // +                         '</tr>'
                            // +                     '</thead>'
                            // +                 '</table>'
                            +                 '<table style="">'
                            +                     '<thead>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="text-align: left;">'
                            +                                 '<p style=""></p>'
                            +                             '</td>'
                            +                             '<td colspan="7" style="text-align: right;">'
                            +                                 '<p style="display: inline-block; padding: 10px 0 30px 0;"><span class="label" style="border: 1px solid #000000; border-radius: 4px; padding: 4px 4px;">' + (data.sbu_customer_info ? (data.sbu_customer_info.credit_flag === 'Y' ? 'CREDIT' : 'CASH') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="text-align: left;">'
                            +                                 '<p style="padding-bottom: 30px;"><span class="label">Printing Date</span><span class="label-value">: ' + '15 Mar, 2021' + '</span></p>'
                            +                             '</td>'
                            +                             '<td colspan="7" style="text-align: right;">'
                            +                                 '<p><span class="label"></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="text-align: left;">'
                            +                                 '<p><span class="label">Customer Code</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.display_code ? (data.sbu_customer_info.display_code) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                             '<td colspan="7" style="text-align: right;">'
                            +                                 '<p><span class="label">Invoice No :</span><span class="label-value" style="display: inline-block; min-width: 90px;">' + (data.invoice_no ? data.invoice_no : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="text-align: left;">'
                            +                                 '<p><span class="label">Customer Name</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.display_name ? (data.sbu_customer_info.display_name) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                             '<td colspan="7" style="text-align: right;">'
                            +                                 '<p><span class="label">Invoice Date :</span><span class="label-value" style="display: inline-block; min-width: 90px;">' + (data.invoice_date ? (data.invoice_date).split(' ')[0] : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="text-align: left;">'
                            +                                 '<p><span class="label">Address</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_info ? (data.sbu_customer_info.customer_info.customer_address ? (data.sbu_customer_info.customer_info.customer_address) : '') : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                             '<td colspan="7" style="text-align: right;">'
                            +                                 '<p><span class="label">Depot :</span><span class="label-value" style="display: inline-block; min-width: 90px;">' + (data.area_info ? (data.area_info.area_name ? (data.area_info.area_name) : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="6" style="text-align: left;">'
                            +                                 '<p><span class="label">MIO Name</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_area_info ? (data.sbu_customer_info.customer_area_info.sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.name ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.name) : '') : '') : '') : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                             '<td colspan="7" style="text-align: right;">'
                            +                                 '<p><span class="label">T.Code :</span><span class="label-value" style="display: inline-block; min-width: 90px;">' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_area_info ? (data.sbu_customer_info.customer_area_info.sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.get_sales_area ? (data.sbu_customer_info.customer_area_info.sales_force.get_sales_area.display_code) : '') : '') : '') : '') + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<th colspan="6" style="text-align: left;">'
                            +                                 '<p><span class="label">S.R Name</span><span class="label-value">: ' + (data.sbu_customer_info ? (data.sbu_customer_info.customer_area_info ? (data.sbu_customer_info.customer_area_info.sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info ? (data.sbu_customer_info.customer_area_info.sales_force.manager_info.rsm_sales_force.manager_info.name) : '') : '') : '') : '') : '') : '') + '</span></p>'
                            +                             '</th>'
                            +                             '<th colspan="7" style="text-align: right;">'
                            +                                 '<p style="display: inline-block; margin-right: 20px;"><span class="label">Order No :</span><span class="label-value" style="">' + (data.order_info ? (data.order_info.order_no ? (data.order_info.order_no) : '') : '') + '</span></p>'
                            +                                 '<p style="display: inline-block;"><span class="label">Order Date :</span><span class="label-value" style="">' + (data.order_info ? (data.order_info.order_date ? (data.order_info.order_date).split(' ')[0] : '') : '') + '</span></p>'
                            // +                                 '<p style="display: inline-block; padding: 10px;"><span class="label" style="border: 1px solid #000000; border-radius: 4px; padding: 4px 4px;">' + (data.sbu_customer_info ? (data.sbu_customer_info.credit_flag === 'Y' ? 'CREDIT' : 'CASH') : '') + '</span></p>'
                            +                             '</th>'
                            +                         '</tr>'
                            +                         '<tr>'
                            +                             '<th style="border: 1px solid #000000;">SN</th>'
                            +                             '<th style="border: 1px solid #000000; width: 20%;">Product Name</th>'
                            +                             '<th style="border: 1px solid #000000;">Pack Size</th>'
                            +                             '<th style="border: 1px solid #000000;">Batch No</th>'
                            +                             '<th style="border: 1px solid #000000;">MFG Date</th>'
                            +                             '<th style="border: 1px solid #000000;">EXP Date</th>'
                            +                             '<th style="border: 1px solid #000000; width: 8%;">Unit Price TP/SP</th>'
                            +                             '<th style="border: 1px solid #000000;">Unit VAT</th>'
                            +                             '<th style="border: 1px solid #000000; width: 8%;">Unit Price with VAT</th>'
                            +                             '<th style="border: 1px solid #000000;">Quantity</th>'
                            +                             '<th style="border: 1px solid #000000;">Bonus</th>'
                            +                             '<th style="border: 1px solid #000000;">Total VAT</th>'
                            +                             '<th style="border: 1px solid #000000;">Total TP/SP</th>'
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
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                             '<td>' + '' + '</td>'
                            +                         '</tr>'
                            +                         '<tr style="">'
                            +                             '<td colspan="4">'
                            +                                 '<p style="text-align: right; font-size: 12px; font-weight: 500; margin: 8px 20px 0 0;">Total: <span style="border-top: 1px dotted #000000; border-bottom: 2px double #000000; font-weight: 600;">' + '' + '</span></p>'
                            +                             '</td>'
                            +                         '</tr>'
                            +                     '</table>'
                            +                 '</div>'
                            +                 '<div class="signature-section" style="float: right; page-break-after: always; page-break-inside: avoid; margin-top: 20px; font-size: 12px;">'
                            +                     '<p style="margin: 0; text-align: center;"><span style="border-bottom: 1px solid #000000; width: 300px; display: block;">' + '' + '</span><span style="width: 300px; display: block;">For NIPRO JMI Pharma Ltd.</span></p>'
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
            //   +     'margin: 25mm 10mm 15mm 15mm; border: 1px solid #000000'
              +     'margin: 10mm 10mm 15mm 15mm; border: 1px solid #000000'
              + '}'
              +
              + '@media print {'
              +     'body {'
              +         'margin: 0px;'
              +         'font-family: "Calibri";'
              +     '}'
              +     'p {'
              +         'margin: 0px;'
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
              +         'margin: 0;'
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
              +         'font-family: "Calibri";'
              +         'page-break-inside: auto;'
              +     '}'
              +     'thead {'
            //   +         'border: 1px solid #000000;'
              +         'display: table-header-group;'
              +     '}'
              +     'thead p {'
              +         'font-size: 10px;'
              +         'line-height: 1;'
              +         'font-weight: 600;'
              +         'padding: 2px 0;'
              +         'margin: 0;'
              +     '}'
              +     'tr {'
              +     '}'
              +     'thead tr th{'
            //   +         'border: 1px solid #000000'
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

        let product_details = data.invoice_details
        let multiple_person_data = ''
        let products = {
            product_bonus: [],
            product_flat: [],
            product_free: [],
            product_regular: [],
        }
        for(let i=0; i<product_details.length; i++) {
            if(product_details[i].deal_type === "B") {
                products.product_bonus.push(product_details[i])
            }
            else if(product_details[i].deal_type === "D") {
                products.product_flat.push(product_details[i])
            }
            else if(product_details[i].deal_type === "F") {
                products.product_free.push(product_details[i])
            }
            else if(product_details[i].deal_type === "R") {
                products.product_regular.push(product_details[i])
            }
        }
        
        multiple_person_data += products.product_bonus.length > 0 ? this.create_table_body_data(products.product_bonus, 'Bonus') : ''
        multiple_person_data += products.product_flat.length > 0 ? this.create_table_body_data(products.product_flat, 'Flat') : ''
        multiple_person_data += products.product_free.length > 0 ? this.create_table_body_data(products.product_free, 'Free') : ''
        multiple_person_data += products.product_regular.length > 0 ? this.create_table_body_data(products.product_regular, 'Regular') : ''
        
        return multiple_person_data
    }
    
    create_table_body_data(products, product_deal_type) {
        let product_details = products
        let deal_type = ''
            deal_type += '' +
                            '<tr>' +
                                '<td colspan="13">' +
                                    '<p style="font-size: 10px; font-weight: 600; line-height: 1.5; text-align: left; border-bottom: 1px solid #000000; margin: 0; width: 100px;">Offer Type: ' + product_deal_type + '</p>' +
                                '</td>' +
                            '</tr>'
        
        let result = ''
        for(let i=0; i<product_details.length; i++) {
            result +=   ''
                    +   '<tr style="page-break-before: always;">'
                    +       '<td style="">' + (PRODUCT_SERIAL_NO) + '.</td>'
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
                    PRODUCT_SERIAL_NO++
        }
        
        return deal_type + result + this.create_subtotal_data(product_details)
    }

    dateFormat2(d) {
        var t = new Date(d);
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString().slice(-2);
    }

    createMFG_EXP_Date(dt) {
        return this.dateFormat2(dt)
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
                    +   '<tr style="page-break-after: always; page-break-inside: avoid;  page-break-before: avoid;">'
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
        let total = data.inv_total
        let round_total = Math.round(total);
        ROUNDING_ADJ = (total - round_total).toFixed(2);
        NET_PAYABLE_AFTER_ADJ = round_total

        let gross_tp = ''
        gross_tp += ''
                    +   '<tr style=" border-top: 1px solid #000000;">'
                    +       '<td colspan="9" style="margin-top: 10px;">' + '<p style="text-align: left; margin: 0;">In Word : ' + this.convert_number_to_word(Number(NET_PAYABLE_AFTER_ADJ).toFixed(0)) + '.</p>' + '</td>'
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
                    +       '<td style="text-align: right; border-bottom: 1px solid #000000;">' + ROUNDING_ADJ + '</td>'
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
        var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
        var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
        
        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; 
        var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;
    }
}