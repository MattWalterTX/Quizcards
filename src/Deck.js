class Deck {
  constructor(cards) {
    this.contents = cards;
    this.count = this.contents.length;
  }
  countCards() {
    return this.count
  }
}

module.exports = Deck