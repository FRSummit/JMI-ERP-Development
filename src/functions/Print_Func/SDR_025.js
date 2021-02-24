export default class SDR_025 {

    print_sdr_025(data) {
        var mywindow = window.open('', 'PRINT'); 
        mywindow.document.write('' +
                                '<html>' +
                                    '<head>' +
                                        '<title>' + 'Collection Memo' + '</title>' +
                                        
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
                                        '<div class="sheet-name-section" style="display: block; width: 100%; overflow: hidden; position: relative; margin-bottom: 10px;">' +
                                            '<p style="margin: 0; line-height: 1.7; text-align: center; font-weight: 600;">Collection Memo</p>' +
                                            '' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TOP SECTION
                                        '<div class="summery-section" style="display: block; width: 100%; padding: 0 2px; overflow: hidden; position: relative; margin-bottom: 20px;">' +
                                            '<div style="display: block; width: 98%; margin: 0 auto 20px; padding: 0 2px; border: 1px solid #000000;">' +
                                                '<div style="display: block; width: 100%;">' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 100px; line-height: 1.2;">Remit No.</span>:</div>' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 130px; line-height: 1.2;">MIO ID & Name</span>:</div>' +
                                                '</div>' +
                                                '<div style="display: block; width: 100%;">' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 100px; line-height: 1.2;">Remit Date.</span>:</div>' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 130px; line-height: 1.2;">AM ID & Name</span>:</div>' +
                                                '</div>' +
                                                '<div style="display: block; width: 100%;">' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 100px; line-height: 1.2;">Depot</span>:</div>' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 130px; line-height: 1.2;">RSM ID & Name</span>:</div>' +
                                                '</div>' +
                                                '<div style="display: block; width: 100%;">' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 100px; line-height: 1.2;">Terrytory</span>:</div>' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 130px; line-height: 1.2;">ASM ID & Name</span>:</div>' +
                                                '</div>' +
                                                '<div style="display: block; width: 100%;">' +
                                                    '<div style="display: inline-block; width: 50%;"><span style="width: 100px; line-height: 1.2;">Collection By</span>:</div>' +
                                                '</div>' +
                                            '</div>' +
                                            
                                            // COLLECTION BANK TABLE
                                            '<table>' +
                                                '<thead>' +
                                                    '<tr>' +
                                                        '<th rowspan="2" style="width: 10%;">Collection type</th>' +
                                                        '<th rowspan="2" style="width: 15%;">Bank/Voucher Document No.</th>' +
                                                        '<th rowspan="2" style="width: 10%;">Date</th>' +
                                                        '<th rowspan="2" style="width: 30%;">Bank Name</th>' +
                                                        '<th colspan="2" style="width: 20%;">Branch Name</th>' +
                                                        '<th rowspan="2" style="width: 15%;">Collection Amount</th>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<th>Issuing</th>' +
                                                        '<th>Reciving</th>' +
                                                    '</tr>' +
                                                '</thead>' +
                                                '<tbody>' +
                                                    '<tr>' +
                                                        '<td style="width: 10%;">Cash/Cheque</td>' +
                                                        '<td style="width: 15%;">DD3245</td>' +
                                                        '<td style="width: 10%;">10/8/2020</td>' +
                                                        '<td style="width: 30%;">Dutch Bangla Bank Ltd</td>' +
                                                        '<td style="width: 10%;">Bogura</td>' +
                                                        '<td style="width: 10%;">Dhaka</td>' +
                                                        '<td style="width: 15%;">36649.47</td>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                        '<td style="text-align: left;" colspan="6">Total: BDT Thirty six thousand five hundred twenty only</td>' +
                                                        '<td style="width: 15%;">36649.47</td>' +
                                                    '</tr>' +
                                                '</tbody>' +
                                            '</table>' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TABLE DATA SECTION
                                        '<div class="data-section" style="">' +
                                            '<table style="">' +
                                                '<thead>' +
                                                    '<tr>' +
                                                        '<th style="">Invoice No.</th>' +
                                                        '<th style="">Dispatch Date</th>' +
                                                        '<th style=" text-align: right;">Net Sale</th>' +
                                                        '<th style="">Type</th>' +
                                                        '<th style="text-align: right;">Prev Collection</th>' +
                                                        '<th style="text-align: right;">Collection Amnt</th>' +
                                                        '<th style="">Return Amnt</th>' +
                                                        '<th style="text-align: right;">Balance Amnt</th>' +
                                                    '</tr>' +
                                                '</thead>' +
                                                '<body>' +
                                                    '<tbody>' +
                                                        this.create_table_body_data(data) +
                                                    '</tbody>' +
                                                '</body>' +
                                            '</table>' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // BOTTOM SECTION
                                        '<div class="bottom-section" style="width: 100%; margin-top: 60px;">' +
                                            '' +
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
                                '<td style="">' + data[i].invoice_no + '</td>' +
                                '<td style="">' + data[i].dispatch_date + '</td>' +
                                '<td style="text-align: right;">' + data[i].net_sale + '</td>' +
                                '<td style="">' + data[i].type + '</td>' +
                                '<td style="text-align: right;">' + data[i].prev_collection + '</td>' +
                                '<td style="text-align: right;">' + data[i].collection_amnt + '</td>' +
                                '<td style="">' + data[i].return_amnt + '</td>' +
                                '<td style="text-align: right;">' + data[i].balance_amnt + '</td>' +
                            '</tr>' 
        }

        let sub_total = ''
        sub_total += '' +
                    '<tr>' +
                        '<td style="text-align: right;" colspan="2">Total :</td>' +
                        '<td style="text-align: right;">206,600.65</td>' +
                        '<td style=""></td>' +
                        '<td style="text-align: right;">17,407.47</td>' +
                        '<td style="text-align: right;">36,520.00</td>' +
                        '<td style=""></td>' +
                        '<td style="text-align: right;">152,673.18</td>' +
                    '</tr>' 
        return table_data + sub_total
    }
}