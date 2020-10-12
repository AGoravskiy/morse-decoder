const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const DOT_DASHE = {
        '.': '10',
        '-': '11',
    };

    const encodingSpace = '**********';
    const dotDasheKeys = Object.keys(DOT_DASHE);
    const dotDasheValues = Object.values(DOT_DASHE);
    const morseTableKeys = Object.keys(MORSE_TABLE);
    const orseTableValues = Object.values(MORSE_TABLE);

    let exprPart;
    let decodingStr = '';
    let binaryEncodingUnit;
    let morseEncodingUnit = '';

    if (!(expr.length % 10)) {
        expr = expr.concat(Array.of(expr.length % 10).fill(0));
    }

    for (let i = 0; i < expr.length; i += 10) {
        exprPart = expr.slice(i, i + 10);
        if (exprPart === encodingSpace) {
            decodingStr += ' ';
        } else {
            for (let j = 0; j < exprPart.length; j += 2) {
                binaryEncodingUnit = exprPart.slice(j, j + 2);
    
                if (dotDasheValues.includes(binaryEncodingUnit)) {
                    morseEncodingUnit += dotDasheKeys[dotDasheValues.indexOf(binaryEncodingUnit)];
                }
            }
        }
        if (morseEncodingUnit) {
            decodingStr += orseTableValues[morseTableKeys.indexOf(morseEncodingUnit)];
        }

        morseEncodingUnit = '';
    }
    return decodingStr;
}

module.exports = {
    decode
}