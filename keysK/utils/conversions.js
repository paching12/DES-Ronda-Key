
const dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
}

const bin2dec = (bin) => {
    return parseInt(bin, 2).toString(10);
}

module.exports = {
    dec2bin,
    bin2dec,
}