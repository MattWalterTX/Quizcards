class Deck {
  constructor(cards) {
    this.contents = cards;
  }
  countCards() {
    return this.contents.length
  };
}

module.exports = Deck