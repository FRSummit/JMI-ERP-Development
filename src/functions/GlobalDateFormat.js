let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class GlobalDateFormat {
    
    dateFormatT1() {
        var t = new Date();
        return t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() 
    }

    dateFormatT2(d) {
        var t = new Date(d);
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString().slice(-2);
    }

    dateFormatT3(d) {
        var t = new Date(d);
        return monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString();
    }

    dateFormatT4(d) {
        var t = new Date(d);
        return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ' ' + t.getFullYear().toString();
    }
}