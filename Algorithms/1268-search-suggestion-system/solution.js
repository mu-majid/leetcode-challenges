class Node {
  constructor() {
    this.isWord = false;
    this.children = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    this.insertHelper(this.root, word, 0);
  }

  insertHelper(node, word, charIndex) {
    if (node == null) {
      node = new Node();
    }
    if (charIndex == word.length) {
      node.isWord = true;
      return node;
    }

    const index = word.charCodeAt(charIndex) - 97;

    node.children[index] = this.insertHelper(node.children[index], word, charIndex + 1);

    return node;
  }

  insertWords(words) {
    for (const word of words) {
      this.insert(word);
    }
  }

  get(word) {
    return this.getHelper(this.root, word, 0);
  }

  // gets the node that represent last char of prefix, and the dfs from there to all possible words
  // that have the prefix
  getHelper(node, word, charIndex) {
    if (node == null || charIndex === word.length) {
      return node;
    }

    const index = word.charCodeAt(charIndex) - 97;
    return this.getHelper(node.children[index], word, charIndex + 1);
  }

  keysWithPrefix(prefix, limit) {
    const queue = [];
    this.dfs(this.get(prefix), prefix, queue, limit);
    return queue;
  }

  dfs(node, prefix, queue, limit) {

    // queue is sorted, because the nature of preorder traversal of a trie guarantees the sorted results
    if (node == null || queue.length === limit) return;

    if (node.isWord === true) {
      queue.push(prefix);
    }

    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(i + 97); // this guaranteeeing the sorting
      this.dfs(node.children[i], prefix + char, queue, limit);
    }
  }
}


var suggestedProducts = function (products, searchWord) {
  const trie = new Trie();
  trie.insertWords(products);
  const res = [];
  let substr = "";

  for (const char of searchWord) {
    substr += char;
    const words = trie.keysWithPrefix(substr, 3);
    res.push(words);
  }

  return res;
};