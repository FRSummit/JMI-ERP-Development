export default class ComaSeparatedDigits {
    comaSeparate(data) {
        let num_parts = data.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let amount = num_parts.join(".");

        return amount
    }
}