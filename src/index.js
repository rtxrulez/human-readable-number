let one = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

let ten = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];

const HUNDRED = "hundred";

// для чисел до 100
function toTwenty(number) {
    number = parseInt(number);
    let str = "";

    let num1 = parseInt(number.toString().split("")[0]);
    let num2 = parseInt(number.toString().split("")[1]);

    if (number < 20) {
        str = one[number];
    } else if (number < 100 && number > 19) {
        if (num2 === 0) {
            str = ten[num1];
        } else {
            str = ten[num1] + " " + one[num2];
        }
    }
    return str;
}

module.exports = function toReadable(number) {
    number = parseInt(number);
    let str = "";

    let num1 = parseInt(number.toString().split("")[0]);
    let num2 = parseInt(number.toString().split("")[1]);
    let num3 = parseInt(number.toString().split("")[2]);

    if (number < 100) {
        str = toTwenty(number);
    } else if (num2 === 0 && num3 === 0) {
        str = one[num1] + " " + HUNDRED;
    } else if (number > 100) {
        str =
            one[num1] +
            " " +
            HUNDRED +
            " " +
            toTwenty(String(num2) + String(num3));
    }

    return str;
};
