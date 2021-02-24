export default class SDR_024 {

    print_sdr_024(data) {
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
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TOP SECTION
                                        '<div class="summery-section" style="display: block; width: 100%; overflow: hidden; position: relative; margin-bottom: 20px;">' +
                                            '<div class="left-section" style="display: inline-block; width: 50%; float: left;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 120px;">MR. No.</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; border: 1px solid #000000; margin-left: 10px; padding: 2px 4px;">DHK0620117381</span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 4px 0 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 120px;">MIO Code & Name</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; border: 1px solid #000000; margin-left: 10px; padding: 2px 4px;">DHK153, Mamun Al Monsur</span>' +
                                                '</p>' +
                                            '</div>' +
                                            '<div class="right-section" style="display: inline-block; width: 30%; float: right; text-align: right;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block;">Date</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 100px; border: 1px solid #000000; margin-left: 10px; padding: 2px 4px;">30/06/2020</span>' +
                                                '</p>' +
                                                '<p style="display: block; width: 100%; margin: 4px 0 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block;">Pay Mode</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 100px; border: 1px solid #000000; margin-left: 10px; padding: 2px 4px;">Cash</span>' +
                                                '</p>' +
                                            '</div>' +
                                            '<div style="display: block; width: 100%; text-align: left; overflow: hidden; padding-top: 4px;">' +
                                                '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.7;">' +
                                                    '<span class="lvl" style="display: inline-block; width: 120px;">Description</span>' +
                                                    '<span class="lvl-val" style="display: inline-block; width: 624px; border: 1px solid #000000; padding: 2px 4px; float: right;">30/06/2020</span>' +
                                                '</p>' +
                                            '</div>' +
                                        '</div>' +
                                        //----------------------------------------------------------------------------------------------------------------------------------------------
                                        // TABLE DATA SECTION
                                        '<div class="data-section" style="">' +
                                            '<table style="">' +
                                                '<thead>' +
                                                    '<tr>' +
                                                        '<th style="width: 15%;">Invoice No.</th>' +
                                                        '<th style="width: 15%;">Invoice Date</th>' +
                                                        '<th style="width: 40%;">Chemist Name</th>' +
                                                        '<th style="width: 15%;">Invoice Type</th>' +
                                                        '<th style="width: 15%; text-align: right;">Collection Amount</th>' +
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
                                            // Row 1
                                            '<div class="row" style="display: block; width: 100%; overflow: hidden;">' +
                                                '<div style="display: inline-block; width:200px; float: left;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: left; font-weight: 600;">Azaher</p>' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 12px; line-height: 1.2; text-align: left;">For: NIPOR JMI Pharma Ltd.</p>' +
                                                '</div>' +
                                                '<div style="display: inline-block; width:200px; border-top: 1px solid #000000; float: right; margin-top: 14px;">' +
                                                    '<p style="display: block; width: 100%; margin: 0; font-size: 14px; line-height: 1.2; text-align: center;">Receiver Signature</p>' +
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
                                '<td style="width: 15%;">' + data[i].invoice_no + '</td>' +
                                '<td style="width: 15%;">' + data[i].date + '</td>' +
                                '<td style="width: 40%;">' + data[i].chemist_name + '</td>' +
                                '<td style="width: 15%;">' + data[i].invoice_type + '</td>' +
                                '<td style="width: 15%; text-align: right;">' + data[i].collection_amount + '</td>' +
                            '</tr>' 
        }

        let sub_total = ''
        sub_total += '' +
                        '<tr>' +
                            '<td style="width: 15%; border: none; text-align: left;" colspan="3">In Words: BDT Sixteen thousand one hundred forty five only</td>' +
                            '<td style="width: 15%; border: none; border: 1px solid #000000;">Total</td>' +
                            '<td style="width: 15%; border: none; border: 1px solid #000000; text-align: right;"></td>' +
                        '</tr>'
        return table_data + sub_total
    }
}