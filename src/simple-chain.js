const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === 'number' && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
