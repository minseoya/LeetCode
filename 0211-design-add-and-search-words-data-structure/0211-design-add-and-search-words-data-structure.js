var WordDictionary = function() {
    this.words = new Set();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.words.add(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const regex = new RegExp("^" + word + "$");
    
    for (const existingWord of this.words) {
        if (regex.test(existingWord)) {
            return true;
        }
    }
    
    return false;
};
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */