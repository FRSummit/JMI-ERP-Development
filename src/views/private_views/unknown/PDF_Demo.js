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
        doc.text((right_x - 130), 160, 'Order No.');
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
                        halign: "right",
                    },
                    total_TP_SP: {
                        halign: "right",
                    },
                }
            })

        // let finalY = doc.lastAutoTable.finalY;
    }   
    generate_total_section(doc) {
        let finalY = doc.lastAutoTable.finalY
        doc.text(20, (finalY + 10), "Hello!")

        // doc.setLineDash([10, 10], 0);
        doc.setDrawColor(0, 0, 0);
        doc.line((doc.internal.pageSize.getWidth() - 150), finalY, (doc.internal.pageSize.getWidth() - 5), finalY);
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