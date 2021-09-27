const permute = (PC, K) => {
    let KPC = [];
    for(let i = 0; i < PC.length; i++) {
        KPC[i] = K[PC[i] - 1];
        // console.log('K: ', K[PC[i]], 'PC', PC[i], KPC);
    }
    return KPC;
};

module.exports = permute;