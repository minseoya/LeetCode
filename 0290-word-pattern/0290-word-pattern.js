/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const patternArr = pattern.split("")
    const sArr = s.split(" ")

    if(patternArr.length !=sArr.length)return false
    const Pmap = new Map()
    const Smap = new Map()

     for (let i = 0; i < patternArr.length; i++) {
        const p = patternArr[i];
        const word = sArr[i];

        if (!Pmap.has(p) && !Smap.has(word)) {
            Pmap.set(p, word);
            Smap.set(word, p);
        } else {
            if (Pmap.get(p) !== word || Smap.get(word) !== p) {
                return false;
            }
        }
    }

    return true;

};