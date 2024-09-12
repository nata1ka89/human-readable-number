module.exports = function toReadable(number) {
    const arrayOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrayTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number <= 19) {
        return arrayOne[number];
    } else if (number <= 99) {
        return (arrayTwo[Math.floor(number / 10)] + (number % 10 === 0 ? '' : ' ' + arrayOne[number % 10]));
    } else {
        const hundreds = arrayOne[Math.floor(number / 100)] + ' hundred';
        const rest = number % 100;
        if (rest === 0) {
            return hundreds;
        } else if (rest < 20) {
            return hundreds + ' ' + arrayOne[rest];
        } else {
            return hundreds + ' ' + arrayTwo[Math.floor(rest / 10)] + (rest % 10 === 0 ? '' : ' ' + arrayOne[rest % 10]);
        }
    }
}
