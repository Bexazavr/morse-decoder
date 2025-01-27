function decode(expr) {
    const getLetterFromBinaryMorse = (str) =>  {
        switch (str) {
            case '0000001011': return 'a';
            case '0011101010': return 'b';
            case '0011101110': return 'c';
            case '0000111010': return 'd';
            case '0000000010': return 'e';
            case '0010101110': return 'f';
            case '0000111110': return 'g';
            case '0010101010': return 'h';
            case '0000001010': return 'i';
            case '0010111111' : return 'j';
            case '0000111011' : return 'k';
            case '0010111010' : return 'l';
            case '0000001111' : return 'm';
            case '0000001110' : return 'n';
            case '0000111111' : return 'o';
            case '0010111110' : return 'p';
            case '0011111011' : return 'q';
            case '0000101110' : return 'r';
            case '0000101010' : return 's';
            case '0000000011' : return 't';
            case '0000101011' : return 'u';
            case '0010101011' : return 'v';
            case '0000101111' : return 'w';
            case '0011101011' : return 'x';
            case '0011101111' : return 'y';
            case '0011111010' : return 'z';
            case '1011111111' : return '1';
            case '1010111111' : return '2';
            case '1010101111' : return '3';
            case '1010101011' : return '4';
            case '1010101010' : return '5';
            case '1110101010' : return '6';
            case '1111101010' : return '7';
            case '1111111010' : return '8';
            case '1111111110' : return '9';
            case '1111111111' : return '0';
            case '**********' : return ' ';
        }
    }
let result = '';
for (let i = 0; i < expr.length; i += 10) {
    result += getLetterFromBinaryMorse(expr.substr(i, 10));
}
return result
}

module.exports = {
    decode
}