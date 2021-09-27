const rotLeft = (bin, times) => {
    // console.log('string test roat Left', bin, times);
    for (let i = 0; i < times; i++) {
        const first = bin[0];
        bin = bin.substring(1, bin.length);
        bin += first;
    }
    return bin;
}

module.exports = rotLeft;