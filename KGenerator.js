const { PC1, PC2, ITERATIONS, K } = require('./keysK/constants.js');
const { dec2bin, bin2dec} = require('./keysK/utils/conversions.js');
const rotLeft = require('./keysK/utils/binaryOperations.js');
const permute = require('./keysK/utils/permutations.js');

const generateKeys = () => {
    const KPC1 = permute(PC1, K);
    console.log('KPC1',KPC1);
    const CC = [].concat(KPC1).splice(0, 28).join('');
    const DD = [].concat(KPC1).splice(28, 55).join('');
    
    let Cs = [CC];
    let Ds = [DD];
    let k = [];
    let kLenght = 16;
    
    // Generar las rotaciones para cada ronda para Cs
    for(let i = 0; i < ITERATIONS.length; i++) {
        Cs[i+1] = rotLeft(Cs[i], ITERATIONS[i]);
    }
    
    // Generar las rotaciones para cada ronda para Ds
    for(let i = 0; i < ITERATIONS.length; i++) {

        Ds[i+1] = rotLeft(Ds[i], ITERATIONS[i]);
        console.log(`D[${i+1}] = ${Ds[i+1]}`)
    } 
    
    // Obtener las llaves K's
    for (let n = 0; n < kLenght; n++) {
        k[n] = [];
        const CD = Cs[n+1] + Ds[n+1];
        // console.log(`C${n}D${n}`, CD)
        PC2.forEach( item => {
            const i = item - 1;
            //console.log('indice permutacion con PC-2', item, 'real', i, CD.charAt(i));
            k[n].push(CD.charAt(i));
        }); 
        console.log(`k[${n+1}]`, k[n].join(''));
    }

    return k;
};

generateKeys();