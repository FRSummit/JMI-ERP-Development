export default class SDR_015 {

    print_invoice(data) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write('' +
                                '<html>' +
                                    '<head>' +
                                        '<title>' + 'Distribution / Dispatch Sheet' + '</title>' +
                                        
                                    //----------------------------------------------------------------------------------------------------------------------------------------------
                                    // Style
                                        '<style>' +
                                            '@page {' +
                                                'size: 8.5in 11in;' +
                                                'margin: 25mm 5mm 15mm 5mm;' +
                                            '}' +
                                            '@media print {' +
                                                'body {' +
                                                    'font-family: sans-serif;' +
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
                                            '}' +
                                        '</style>' +
                                    '</head>' +
                                    //----------------------------------------------------------------------------------------------------------------------------------------------
                                    // Body
                                    '<body>' +
                                        // Sheet Name
                                        '<div class="sheet-name-section" style="display: block; width: 100%; overflow: hidden; position: relative;">' +
                                            '<p style="margin: 0; line-height: 1.7; text-align: center; font-weight: 600;">Distribution / Dispatch Sheet</p>' +
                                            '' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TOP SECTION
                                        '<div class="summery-section" style="display: block; width: 100%; overflow: hidden; position: relative; margin-bottom: 20px;">' +
                                            '<div class="left-section" style="display: inline-block; width: 50%; float: left;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 130px;">Name of Customer:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 130px;">Customer ID:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 130px;">Address:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                            '</div>' +
                                            '<div class="right-section" style="display: inline-block; width: 50%; float: right;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 160px;">Order Date:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 160px;">Delivery Date:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 160px;">Territory & Territory Code:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
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
                                                        '<th style=" text-align: right;">TP</th>' +
                                                        '<th style=" text-align: right;">TP+VAT</th>' +
                                                        '<th style="">Quantity</th>' +
                                                        '<th style=" text-align: right;">Line Total</th>' +
                                                    '</tr>' +
                                                '</thead>' +
                                                '<body>' +
                                                    '<tbody>' +
                                                        this.create_table_body_data(data) +
                                                        
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
                                            '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: left;">* Excution of order is subject to ability of stock</p>' +
                                        '</div>' +
                                        '<div class="bottom-section" style="width: 100%; margin-top: 60px;">' +
                                            // Row 1
                                            '<div class="row" style="display: flex; justify-content: space-around; width: 100%;">' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Customer Signature</p>' +
                                                '</div>' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Signature of MIO</p>' +
                                                '</div>' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Signature of Area Manager</p>' +
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
                                '<td style="">' + 'ABC01' + '</td>' +
                                '<td style="text-align: left;">' + 'Name Something' + '</td>' +
                                '<td style="">' + '20s' + '</td>' +
                                '<td style=" text-align: right;">' + '170.00' + '</td>' +
                                '<td style=" text-align: right;">' + '211.00' + '</td>' +
                                '<td style="">' + '15' + '</td>' +
                                '<td style=" text-align: right;">' + '700.00' + '</td>' +
                            '</tr>'
        }

        let sub_total = ''
        sub_total += '' +
                    '<tr>' +
                        '<td style="text-align: left;" colspan="2">' + 'Order Value        Taka' + '</td>' +
                        '<td style="">' + '' + '</td>' +
                        '<td style=" text-align: right;">' + '' + '</td>' +
                        '<td style=" text-align: right;">' + '' + '</td>' +
                        '<td style="">' + '' + '</td>' +
                        '<td style=" text-align: right;">' + '' + '</td>' +
                    '</tr>' 
        return (table_data + sub_total)
        // return (user_details + table_data + sub_total)
    }
}