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

const dotOrDashes = (substr) => substr === "11" ? "-" : substr === "10" ? "." : "";

function decode(expr) {
    let result = "";
    let preResult = "";
    for (let i = 0; i < (expr.length / 10); i++)
    {
        let sliceStr = expr.slice(i * 10, (i + 1) * 10);
        let checksStars = /[*]{10}/.test(sliceStr);
        if (checksStars) {
            result += " ";
        }
        else 
        {
            for (let j = 0; j < (sliceStr.length / 2); j++)
            {
                preResult += dotOrDashes(sliceStr.slice(j * 2, (j + 1) * 2));
            }
            result += MORSE_TABLE[preResult];
            preResult = "";
        }
    }
    return result;
}

module.exports = {
    decode
}