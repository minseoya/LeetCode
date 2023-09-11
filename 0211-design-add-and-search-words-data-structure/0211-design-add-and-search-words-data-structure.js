var WordDictionary = function() {
    this.trie = {};
};

WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for (const char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isEnd = true;
};

WordDictionary.prototype.search = function(word) {
    const searchInTrie = (node, index) => {
        if (index === word.length) {
            return node.isEnd || false;
        }
        const char = word[index];
        if (char === ".") {
            for (const key in node) {
                if (searchInTrie(node[key], index + 1)) {
                    return true;
                }
            }
            return false;
        } else if (!node[char]) {
            return false;
        }
        return searchInTrie(node[char], index + 1);
    };
    
    return searchInTrie(this.trie, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */