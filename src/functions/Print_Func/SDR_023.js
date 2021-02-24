export default class SDR_023 {

    print_sdr_023(data) {
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
                                            '<div class="left-section" style="display: inline-block; width: 40%; float: left;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 120px;">Mode of Transport:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 120px;">Delivery Man:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                            '</div>' +
                                            '<div class="right-section" style="display: inline-block; width: 40%; float: right;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 100px;">Delivery Date:</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 150px; border-bottom: 1px solid #000000; margin-left: 10px;"></span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 100px;">No/s of Carton:</span>' +
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
                                                        '<th>S/N</th>' +
                                                        '<th style="width: 10%;">Invoice No.</th>' +
                                                        '<th style="width: 10%;">Date</th>' +
                                                        '<th style="width: 10%;">Cust Code</th>' +
                                                        '<th style="width: 25%; text-align: left;">Customer Name</th>' +
                                                        '<th style="width: 25%; text-align: left;">Address</th>' +
                                                        '<th style="width: 15%; text-align: right;">Invoice Amount</th>' +
                                                    '</tr>' +
                                                '</thead>' +
                                                '<body>' +
                                                    '<tbody>' +
                                                        this.create_table_body_data(data) +
                                                        
                                                        // Grand Total
                                                        '<tr>' +
                                                            '<td style="border: none;"></td>' +
                                                            '<td style="width: 10%; border: none;"></td>' +
                                                            '<td style="width: 10%; border: none;"></td>' +
                                                            '<td style="width: 10%; border: none;"></td>' +
                                                            '<td style="width: 25%; border: none; text-align: left; "></td>' +
                                                            '<td style="width: 25%; border: none; border-bottom: 2px solid #000000; text-align: left;">Grand Total</td>' +
                                                            '<td style="width: 15%; border: none; border-bottom: 2px solid #000000; text-align: right;">XXXX</td>' +
                                                        '</tr>' +
                                                    '</tbody>' +
                                                '</body>' +
                                            '</table>' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // BOTTOM SECTION
                                        '<div class="bottom-section" style="width: 100%; margin-top: 60px;">' +
                                            // Row 1
                                            '<div class="row" style="display: flex; justify-content: space-around; width: 100%;">' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Prepared by</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Computer operator</p>' +
                                                '</div>' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Checked by</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">ADIC / Distribution Officer</p>' +
                                                '</div>' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Authorissed by</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">DIC / Executive Distribution</p>' +
                                                '</div>' +
                                            '</div>' +
                                            // Row 2
                                            '<div class="row" style="display: flex; justify-content: space-around; width: 100%; margin-top: 40px;">' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Goods Issued by</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Store In-Charge/Store Officer</p>' +
                                                '</div>' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Goods Delivered by</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Name....................</p>' +
                                                '</div>' +
                                                '<div style="display: inline; width:200px; border-top: 1px solid #000000;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Signature of Security</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: center;">Name....................</p>' +
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
        let user_details = ''
        user_details += '' +
                        '<tr>' +
                            '<th colspan="7">' +
                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7; text-align: left;">DHK202, Shohidul Islam, Territory: North Badda, Number of Invoice: 6</p>' +
                            '</th>' +
                        '</tr>'

        let table_data = ''
        for(let i=0; i < data.length; i++) {
            table_data += '' +
                            '<tr>' +
                                '<td>' + (i + 1) + '</td>' +
                                '<td style="width: 10%;">' + data[i].invoice_no + '</td>' +
                                '<td style="width: 10%;">' + data[i].date + '</td>' +
                                '<td style="width: 10%;">' + data[i].cust_code + '</td>' +
                                '<td style="width: 25%; text-align: left;">' + data[i].custoemrName + '</td>' +
                                '<td style="width: 25%; text-align: left;">' + data[i].address + '</td>' +
                                '<td style="width: 15%; text-align: right;">' + data[i].invoice_amount + '</td>' +
                            '</tr>' 
        }

        let sub_total = ''
        sub_total += '' +
                        '<tr>' +
                            '<td style="border: none;"></td>' +
                            '<td style="width: 10%; border: none;"></td>' +
                            '<td style="width: 10%; border: none;"></td>' +
                            '<td style="width: 10%; border: none;"></td>' +
                            '<td style="width: 25%; border: none; text-align: left; "></td>' +
                            '<td style="width: 25%; border: none; border-bottom: 1px solid #000000; text-align: left;">Sub Total</td>' +
                            '<td style="width: 15%; border: none; border-bottom: 1px solid #000000; text-align: right;">XXXX</td>' +
                        '</tr>'
        return (user_details + table_data + sub_total) + (user_details + table_data + sub_total) + (user_details + table_data + sub_total) + (user_details + table_data + sub_total)
        // return (user_details + table_data + sub_total)
    }
}