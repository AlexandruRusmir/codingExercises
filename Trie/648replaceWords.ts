const replaceWords1 = (dictionary: string[], sentence: string): string => {
  const getRootWord = (dictionary: string[], word: string): string => {
    let minLengthRoot = "";
    for (const dictionaryWord of dictionary) {
      if (word.startsWith(dictionaryWord)) {
        if (minLengthRoot) {
          minLengthRoot =
            dictionaryWord.length < minLengthRoot.length
              ? dictionaryWord
              : minLengthRoot;
        } else {
          minLengthRoot = dictionaryWord;
        }
      }
    }

    return minLengthRoot;
  };

  return sentence
    .split(" ")
    .map((word) => {
      const rootWord = getRootWord(dictionary, word);
      if (!rootWord.length) {
        return word;
      }
      return rootWord;
    })
    .join(" ");
};

type TrieNode = {
  children: Map<string, TrieNode>;
  isEnd: boolean;
};

class Trie {
  protected root: TrieNode;

  constructor() {
    this.root = {
      children: new Map<string, TrieNode>(),
      isEnd: false,
    };
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, {
          children: new Map<string, TrieNode>(),
          isEnd: false,
        });
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  search(word: string): string {
    let node = this.root;
    let prefix = "";
    for (const char of word) {
      if (!node.children.has(char)) {
        return word;
      }
      prefix += char;
      if (node.children.get(char)!.isEnd) {
        return prefix;
      }
      node = node.children.get(char)!;
    }
    return word;
  }
}

const replaceWords = (dictionary: string[], sentence: string): string => {
  const trie = new Trie();
  for (const word of dictionary) {
    trie.insert(word);
  }

  const words = sentence.split(" ");
  const result = words.map((word) => trie.search(word));

  return result.join(" ");
};
