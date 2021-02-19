import jsPDF from 'jspdf'
import 'jspdf-autotable';

export default class PDF_Demo {
    generate_pdf() {
        var doc = new jsPDF('p', 'pt', [612, 792]);
        // let font_roboto = './roboto.ttf'
        // doc.setFontSize(10);
        // doc.setFont(font_roboto, "bold");
        // doc.setFontType("bold");

        this.generate_header(doc)
        this.generate_summery_section(doc)
        this.generate_table_data(doc)
        this.generate_total_section(doc)
        // this.generate_footer(doc)


        // generate pdf name
        this.create_pdf_name(doc)
    }

    generate_header(doc) {
        let logo_title = "NIPRO JMI PHARMA LTD."
        let logo_sbutitle = "First Japanese Joint Venture Pharmaceuticals in Bangladesh"

        // let width_logo_title = doc.getTextWidth(logo_title)
        // let width_logo_subtitle = doc.getTextWidth(logo_sbutitle)

        doc.setFontSize(16);
        doc.text(logo_title, (doc.internal.pageSize.getWidth() / 2), 30, "center")
        doc.setFontSize(7);
        doc.text(logo_sbutitle, (doc.internal.pageSize.getWidth() / 2), 40, "center")
    }

    generate_summery_section(doc) {
        // this.get_doc_width(doc)
        doc.addFont("sans-serif", "bold");
        doc.setFontSize(10);

        // Left Section

        // let left_x = 54
        // let left_x_dynamic = 130

        let left_x = 20
        let left_x_dynamic = 96

        doc.text(left_x, 100, 'Customer Code');
        doc.text(left_x_dynamic, 100, ': DHK34105');

        doc.text(left_x, 115, 'Customer Name');
        doc.text(left_x_dynamic, 115, ': LABAID CARDIAC HOSPITAL');

        doc.text(left_x, 130, 'Address');
        doc.text(left_x_dynamic, 130, ': HOUSE-01, RAOD-04, DHANMONDI');

        doc.text(left_x, 145, 'MIO Name:');
        doc.text(left_x_dynamic, 145, ': SHAHIDUL ISLAM');

        doc.text(left_x, 160, 'S.R Name');
        doc.text(left_x_dynamic, 160, ': RAMJAN ALI');

        // Right Section

        let right_x = doc.internal.pageSize.getWidth() - 160
        let right_x_dynamic = (doc.internal.pageSize.getWidth() - 160) + 60

        doc.text(right_x, 100, 'Invoice No');
        doc.text(right_x_dynamic, 100, ': DHK081920086');

        doc.text(right_x, 115, 'Invoice Date');
        doc.text(right_x_dynamic, 115, ': 30/09/2019');

        doc.text(right_x, 130, 'Depot');
        doc.text(right_x_dynamic, 130, ': Dhaka Depot');

        doc.text(right_x, 145, 'T.Code');
        doc.text(right_x_dynamic, 145, ': DHK341');

        doc.text(right_x, 160, 'Date');
        doc.text(right_x_dynamic, 160, ': 29.09.2019');

        // Order Number
        doc.text((right_x - 130), 160, 'Order No');
        doc.text((right_x_dynamic - 150), 160, ': DHK081920086');
    }

    generate_table_data(doc) {
        let data = this.data_list()
        let rows = [];
        let columnHeader = [
            {title: "SN", dataKey: "sn"},
            {title: "Product Name", dataKey: "product_name"},
            {title: "Pack Size", dataKey: "pack_size"},
            {title: "Batch No", dataKey: "batch_no"},
            {title: "MFG Date", dataKey: "mfg_date"},
            {title: "EXP Date", dataKey: "eXP_date"},
            {title: "Unit Price TP/SP", dataKey: "unit_price_TP_SP"},
            {title: "Unit VAT", dataKey: "unit_VAT"},
            {title: "Unit Price with VAT", dataKey: "unit_price_with_VAT"},
            {title: "Qty", dataKey: "qty"},
            {title: "Bonus", dataKey: "bonus"},
            {title: "Total VAT", dataKey: "total_VAT"},
            {title: "Total TP/SP", dataKey: "total_TP_SP"},
        ]

        data.forEach(element => {
        var temp = [
                element.sn || '',
                element.product_name || '',
                element.pack_size || '',
                element.batch_no || '',
                element.mfg_date || '',
                element.eXP_date || '',
                element.unit_price_TP_SP || '',
                element.unit_VAT || '',
                element.unit_price_with_VAT || '',
                element.qty || '',
                element.bonus || '',
                element.total_VAT || '',
                element.total_TP_SP || '',
            ];
            rows.push(temp);
        });

        // doc.autoTable({html: '#table'});
        // doc.autoTable(columnHeader, rows, { startY: 180 })
        // doc.autoTable(columnHeader, rows, {margin: { top: 180, left: 10, right: 10, bottom: 100 }})
        doc.autoTable(columnHeader, rows, {
                startY: 180,
                // theme: "grid",
                // addPageContent: pageContent,
                // tableWidth: 200,
                // tableLineColor: [189, 195, 199],
                // tableLineWidth: 0.75,
                theme: "plain",
                margin: {
                    // right: 20,
                    // left: 20,
                    horizontal: 5
                },
                // tableWidth: 'auto',
                styles: {
                    // fontSize: fontSize,
                    // columnWidth: "wrap"
                    overflow: 'linebreak'
                },
                headerStyles: { 
                    // fillColor: 120, 
                    fillColor: 255, 
                    textColor: 0, 
                    halign: "center",
                    lineWidth: 1,
                    lineColor: [0, 0, 0]
                },
                columnStyles: {
                    textColor: 0,
                    halign: "center",
                    valign: "middle",
                    lineWidth: 0,
                    sn: {
                        columnWidth: 25
                    },
                    product_name: {
                        columnWidth: 100
                    },
                    unit_VAT: {
                        columnWidth: 50
                    },
                    total_VAT: {
                        columnWidth: 50,
                        halign: "right",
                    },
                    total_TP_SP: {
                        columnWidth: 50,
                        halign: "right",
                    },
                }
            })

        // let finalY = doc.lastAutoTable.finalY;
    }   
    generate_total_section(doc) {

        doc.setFontSize(10);
        let finalY = doc.lastAutoTable.finalY


        if((finalY + 120 + 50) > 792) {
            doc.addPage()
            finalY = 60
        }

        /* -------------------- Left Section -------------------- */
        // Gross TP
        doc.text(5, (finalY + 44), 'In Word :', "left");
        doc.text(50, (finalY + 44), 'Taka One Lac Eight Thousand Five Hundred Sixty Five only.', "left");



        /* -------------------- Right Section -------------------- */
        // doc.setLineDash([10, 10], 0);
        doc.setDrawColor(0, 0, 0);
        doc.line((doc.internal.pageSize.getWidth() - 150), finalY, (doc.internal.pageSize.getWidth() - 5), finalY);

        // Subtotal
        doc.text((doc.internal.pageSize.getWidth() - 120), (finalY + 10), 'Sub Total :', "right");
        doc.text((doc.internal.pageSize.getWidth() - 60), (finalY + 10), '16,806.27', "right");
        doc.text((doc.internal.pageSize.getWidth() - 10), (finalY + 10), '96,587.77', "right");

        doc.line((doc.internal.pageSize.getWidth() - 150), (finalY + 30), (doc.internal.pageSize.getWidth() - 5), (finalY + 30));
        // Gross TP
        doc.text((doc.internal.pageSize.getWidth() - 120), (finalY + 44), 'Gross TP :', "right");
        doc.text((doc.internal.pageSize.getWidth() - 10), (finalY + 44), '96,587.77', "right");

        doc.line((doc.internal.pageSize.getWidth() - 150), (finalY + 50), (doc.internal.pageSize.getWidth() - 5), (finalY + 50));
        // Discount
        doc.text((doc.internal.pageSize.getWidth() - 120), (finalY + 64), 'Less discount 5% on TP :', "right");
        doc.text((doc.internal.pageSize.getWidth() - 10), (finalY + 64), '4,829.39', "right");

        doc.line((doc.internal.pageSize.getWidth() - 150), (finalY + 70), (doc.internal.pageSize.getWidth() - 5), (finalY + 70));
        // Add VAT on TP
        doc.text((doc.internal.pageSize.getWidth() - 120), (finalY + 84), 'Add VAT on TP :', "right");
        doc.text((doc.internal.pageSize.getWidth() - 10), (finalY + 84), '16,806.27', "right");

        doc.line((doc.internal.pageSize.getWidth() - 150), (finalY + 90), (doc.internal.pageSize.getWidth() - 5), (finalY + 90));
        // Rounding Adjustment
        doc.text((doc.internal.pageSize.getWidth() - 120), (finalY + 104), 'Rounding Adjustment :', "right");
        doc.text((doc.internal.pageSize.getWidth() - 10), (finalY + 104), '0.35', "right");

        doc.line((doc.internal.pageSize.getWidth() - 150), (finalY + 110), (doc.internal.pageSize.getWidth() - 5), (finalY + 110));
        // Net Payable
        doc.text((doc.internal.pageSize.getWidth() - 120), (finalY + 124), 'Net Payable :', "right");
        doc.text((doc.internal.pageSize.getWidth() - 10), (finalY + 124), '108,565.00', "right");



        /* -------------------- Present Credit Status -------------------- */
        doc.text(50, (finalY + 80), 'Present Credit Status:', "left");
        doc.text(50, (finalY + 90), 'Invoice', "left");
        doc.text(110, (finalY + 90), 'Inv_Date', "left");
        doc.text(180, (finalY + 90), 'Pay Mode', "left");
        doc.text(250, (finalY + 90), 'Outstanding', "left");

        
        /* -------------------- Total -------------------- */
        doc.text(200, (finalY + 120), 'Total:', "left");
        // 7mm of line, 3mm of space, 1mm of line, 3mm of space and then repeats, however, it will start the pattern 10mm in so the first part of the dash to be drawn is the 1mm section
        doc.setLineDash([1, 1, 1, 1], 30);
        doc.line(230, (finalY + 110), 300, (finalY + 110));

        // 10mm of line drawn, followed by 10mm of space repeating along the way from left to right.
        doc.setLineDash([10, 10], 0);
        doc.line(230, (finalY + 124), 300, (finalY + 124));
        // doc.text(230, (finalY + 130), 'Total:', "left");

        // let pageInfo = doc.internal.getCurrentPageInfo();
        // doc.text(250, (finalY + 160), ('dd  ' + pageInfo.pageNumber), "left");


        // doc.text(250, (doc.internal.pageSize.height - 50), ('dd  ' + pageInfo.pageNumber), "left");



        /* -------------------- Signature and Company name -------------------- */	
        if((finalY + 120 + 50 + 80) > 792) {
            doc.addPage()
            // finalY = 60
        }
        doc.text((doc.internal.pageSize.getWidth() - 120), (doc.internal.pageSize.height - 94), 'AZAHER', "center");
        doc.line((doc.internal.pageSize.getWidth() - 50), (doc.internal.pageSize.height - 90), (doc.internal.pageSize.getWidth() - 200), (doc.internal.pageSize.height - 90));
        doc.text((doc.internal.pageSize.getWidth() - 120), (doc.internal.pageSize.height - 80), 'For NIPRO JMI Pharma Ltd.	', "center");

    }
    // generate_footer(doc) {}

    get_doc_width(doc) {
        return doc.internal.pageSize.getWidth()
    }

    get_doc_height(doc) {
        return doc.internal.pageSize.getHeight()
    }

    create_pdf_name(doc) {
        let pdfName = 'Schedule';
        const date = new Date();
        const filename =
            "timechart_" +
            date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2) +
            ".pdf";

        doc.save(pdfName + '_' + filename + '.pdf');
    }

    data_list() {
        let data = [
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
            {
                sn: "1",
                product_name: "Adarbi 40 Tablet",
                pack_size: "20's",
                batch_no: "111119",
                mfg_date: "Jan'19",
                eXP_date: "Dec.'20",
                unit_price_TP_SP: "179.91",
                unit_VAT: "  31.30",
                unit_price_with_VAT: "211.21",
                qty: "2",
                bonus: "0",
                total_VAT: "62.61",
                total_TP_SP: "359.82"
            },
        ]
        return data
    }
}