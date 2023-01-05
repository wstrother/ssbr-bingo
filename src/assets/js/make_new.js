const permutationCache = {};

function checkPermutations(perms, p) {
    let match = false;
    perms.forEach(toCheck => {
        if (JSON.stringify(toCheck) === JSON.stringify(p)) match = true;
    });
    return match;
}

//  n = number of elements
//  key = name of elements list 
//  l = length of elements list
function getPremutationList(n, l) {
    let h = JSON.stringify([n, l]);
    let cached = permutationCache[h];
    let output = [];

    if (cached) {
        console.log(`cached was used: ${h}`);
        output = JSON.parse(cached);
    
    } else {
        
        let inner;
        for (let i = 0; i < l; i++) {
            if (n == 1) { 
                // n = 1, return list of single element permutations
                output.push([i]);
            }
            else {
                // n > 1, return permutation list for n - 1 and append i to each permutation
                inner = getPremutationList(n -1, l);
                inner.forEach(perm => {
                    if (!perm.includes(i)) {
                        perm.push(i);
                        perm.sort();
                        if (!checkPermutations(output, perm)) output.push(perm);
                    }
                });
            } 
        }
    }

    permutationCache[h] = JSON.stringify(output);
    return output;
}
