export default class SDR_015 {

    print_invoice(data) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write('' +
                                '<html>' +
                                    '<head>' +
                                        '<title>' + 'Invoice' + '</title>' +
                                        
                                    //----------------------------------------------------------------------------------------------------------------------------------------------
                                    // Style
                                        '<style>' +
                                            '@page {' +
                                                'size: 8.5in 11in;' +
                                                'margin: 25mm 10mm 15mm 15mm;' +
                                            '}' +
                                            '@media print {' +
                                                'body {' +
                                                    'font-family: "Calibri";' +
                                                '}' +
                                                'p {' +
                                                    'margin: 0;' +
                                                    'line-height: 1.7;' +
                                                '}' +
                                                'table {' +
                                                    'border-collapse: collapse;' +
                                                    'font-size:12px;' +
                                                    'width: 100%;' +
                                                    'text-align: center;' +
                                                    'page-break-inside: auto;' +
                                                '}' +
                                                'table thead {' +
                                                    'display: table-header-group;' +
                                                '}' +
                                                'table thead th {' +
                                                    'border: 1px solid #000000;' +
                                                '}' +
                                                'table tbody {' +
                                                    'display: table-header-group;' +
                                                '}' +
                                                'table tbody td {' +
                                                    'border: 1px solid #000000;' +
                                                '}' +
                                                'table thead th, table tbody td {' +
                                                    'padding: 2px;' +
                                                '}' +
                                            '}' +
                                        '</style>' +
                                    '</head>' +
                                    //----------------------------------------------------------------------------------------------------------------------------------------------
                                    // Body
                                    '<body>' +
                                        // Sheet Name
                                        '<div class="sheet-name-section" style="display: block; width: 100%; overflow: hidden; position: relative;">' +
                                            '<p style="margin: 0; line-height: 1.7; text-align: center; font-weight: 600; margin-bottom: 20px;">ORDER # ' + data.order_no + '</p>' +
                                            '' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TOP SECTION
                                        '<div class="summery-section" style="display: block; width: 100%; overflow: hidden; position: relative; margin-bottom: 20px;">' +
                                            '<div class="left-section" style="display: inline-block; width: 60%; float: left;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 90px;">Customer:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block;  margin-left: 10px;">' + data.sbu_customer_info.display_name + '</span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 90px;">Customer ID:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; margin-left: 10px;">' + data.sbu_customer_info.display_code + '</span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 90px;">Address:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; margin-left: 10px;">' + data.sbu_customer_info.customer_info.customer_address + '</span>' +
                                                '</p>' +
                                            '</div>' +
                                            '<div class="right-section" style="display: inline-block; width: 40%; float: right;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 100px; text-align: right;">Order Date:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; margin-left: 10px;">' + data.order_date + '</span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 100px; text-align: right;">Delivery Date:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; margin-left: 10px;">' + (data.est_delivery_date ? (data.est_delivery_date).split(' ')[0] : '') + '</span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 100px; text-align: right;">Territory:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; margin-left: 10px; font-weight: 600;">' + data.sbu_customer_info.customer_area_info.sales_force.get_sales_area.display_code + '</span>' +
                                                '</p>' +
                                            '</div>' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TABLE DATA SECTION
                                        '<div class="data-section" style="">' +
                                            '<table style="">' +
                                                '<thead>' +
                                                    '<tr>' +
                                                        '<th style="">Code</th>' +
                                                        '<th style=" text-align: left;">Brand Name</th>' +
                                                        '<th style="">Pack Size</th>' +
                                                        '<th style="">TP</th>' +
                                                        '<th style=" text-align: right;">TP+VAT</th>' +
                                                        '<th style="">Quantity</th>' +
                                                        '<th style=" text-align: right;">Total</th>' +
                                                    '</tr>' +
                                                '</thead>' +
                                                '<body>' +
                                                    '<tbody>' +
                                                        this.create_table_body_data(data.order_details) +
                                                        this.create_total(data) +
                                                        
                                                        // // Grand Total
                                                        // '<tr>' +
                                                        //     '<td style="border: none;"></td>' +
                                                        //     '<td style="width: 10%; border: none;"></td>' +
                                                        //     '<td style="width: 10%; border: none;"></td>' +
                                                        //     '<td style="width: 10%; border: none;"></td>' +
                                                        //     '<td style="width: 25%; border: none; text-align: left; "></td>' +
                                                        //     '<td style="width: 25%; border: none; border-bottom: 2px solid #000000; text-align: left;">Grand Total</td>' +
                                                        //     '<td style="width: 15%; border: none; border-bottom: 2px solid #000000; text-align: right;">XXXX</td>' +
                                                        // '</tr>' +
                                                    '</tbody>' +
                                                '</body>' +
                                            '</table>' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // BOTTOM SECTION
                                        '<div style="display: block; width: 100%; margin-top: 10px">' +
                                            '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: left;">* We will abide by the terms & conditions of the company</p>' +
                                            '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: left;">* I declear that I have a valid drug Licence.</p>' +
                                            '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: left;">* Excution of the order is subject to availability of stock</p>' +
                                        '</div>' +
                                        '<div class="bottom-section" style="width: 100%; margin-top: 60px;">' +
                                            // Row 1
                                            '<div class="row" style="display: flex; justify-content: space-around; width: 100%;">' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Customer Signature</p>' +
                                                '</div>' +
                                                // '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                //     '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">' + data.created_by_info.name + '</p>' +
                                                // '</div>' +
                                                this.create_bottom_signature_section(data) +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">' + data.verified_by_info.name + '</p>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</body>' +
                                '</html>' 
                )

        mywindow.document.close();
        mywindow.focus();
        mywindow.print();
        // mywindow.close();

        return true;
    }

    create_table_body_data(data) {

        let table_data = ''
        for(let i=0; i < data.length; i++) {
            table_data += '' +
                            '<tr>' +
                                '<td style="">' + data[i].product_info.prod_code + '</td>' +
                                '<td style="text-align: left;">' + data[i].product_info.prod_name + '</td>' +
                                '<td style="">' + '20s' + '</td>' +
                                '<td style="">' + Number(data[i].unit_tp).toFixed(2) + '</td>' +
                                '<td style=" text-align: right;">' + Number(parseFloat(data[i].unit_tp) + parseFloat(data[i].unit_vat)).toFixed(2) + '</td>' +
                                '<td style="">' + data[i].qty + '</td>' +
                                '<td style=" text-align: right;">' + Number(parseFloat(data[i].tp) + parseFloat(data[i].vat)).toFixed(2) + '</td>' +
                            '</tr>'
        }

        return (table_data)
        // console.log(sub_total)
        // return (table_data)
        // return (user_details + table_data + sub_total)
    }

    create_total(data) {
        let sub_total = ''
        sub_total += '' +
                    '<tr>' +
                        '<td style="text-align: right;" colspan="6"><p style="margin: 0; padding: 0px; font-weight: 400;">' + '<span style="margin-right: 6px;">Subtotal</span>' + '</p></td>' +
                        // '<td style="">' + '' + '</td>' +
                        // '<td style="">' + this.total_tp(data) + '</td>' +
                        // '<td style=" text-align: right;">' + this.total_tp_vat(data) + '</td>' +
                        // '<td style="">' + this.total_quantity(data) + '</td>' +
                        '<td style=" text-align: right;">' + Number(data.gross_total).toFixed(2) + '</td>' +
                    '</tr>'  +
                    '<tr>' +
                        '<td style="text-align: right;" colspan="6"><p style="margin: 0; padding: 0px; font-weight: 400;">' + '<span style="margin-right: 6px;">Discount</span>' + '</p></td>' +
                        // '<td style="">' + '' + '</td>' +
                        // '<td style="">' + this.total_tp(data) + '</td>' +
                        // '<td style=" text-align: right;">' + this.total_tp_vat(data) + '</td>' +
                        // '<td style="">' + this.total_quantity(data) + '</td>' +
                        '<td style=" text-align: right;">' + Number(data.total_discount).toFixed(2) + '</td>' +
                    '</tr>'  +
                    '<tr>' +
                        '<td style="text-align: right;" colspan="6"><p style="margin: 0; padding: 0px; font-weight: 600;">' + '<span style="margin-right: 6px;">Grand Total</span>' + '</p></td>' +
                        // '<td style="">' + '' + '</td>' +
                        // '<td style="">' + this.total_tp(data) + '</td>' +
                        // '<td style=" text-align: right;">' + this.total_tp_vat(data) + '</td>' +
                        // '<td style="">' + this.total_quantity(data) + '</td>' +
                        '<td style=" text-align: right;">' + Number(data.net_total).toFixed(2) + '</td>' +
                    '</tr>' 

        return sub_total
    }

    create_bottom_signature_section(data) {
        let btm_sec = ''
        if(data.created_by_info.id !== data.verified_by_info.id) {
            btm_sec += '' +
            '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">' + data.created_by_info.name + '</p>' +
            '</div>'
        } else {
            btm_sec += '' +
            '<div style="display: inline; width:200px;">' +
                '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">' + '' + '</p>' +
            '</div>'
        }

        return btm_sec
    }

    total_tp(data) {
        let unit_tp = 0
        for(let i=0; i<data.length; i++) {
            unit_tp += parseFloat(data[i].unit_tp)
        }
        return Number(unit_tp).toFixed(2)
    }

    total_tp_vat(data) {
        let tp_vat = 0
        let unit_tp = null
        let vat = null
        for(let i=0; i<data.length; i++) {
            unit_tp = parseFloat(data[i].unit_tp)
            vat = parseFloat(data[i].vat)
            tp_vat += ( unit_tp + vat )
        }
        return Number(tp_vat).toFixed(2)
    }

    total_quantity(data) {
        let qty = 0
        for(let i=0; i<data.length; i++) {
            qty += parseInt(data[i].qty)
        }
        return qty
    }

    total_amount(data) {
        let net_amount = 0
        for(let i=0; i<data.length; i++) {
            net_amount += parseFloat(data[i].net_amount)
        }
        return Number(net_amount).toFixed(2)
    }
}