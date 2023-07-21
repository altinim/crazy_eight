"use strict";

function Card(aSuit, aValue) {
  this.suit = aSuit;
  this.value = aValue;
}
Card.prototype = {
  // Some constants used for displaying cards
  width: 71,
  height: 96,
  pixelOffset: 15,

  getSuit: function () {
    return this.suit;
  },
  getValue: function () {
    return this.value;
  },
  /**
   * Return a string representation of this card.
   */
  toString: function () {
    return this.value + this.suit;
  },

  getURL: function () {
    //relative url used for source. assumes HTML file is in a folder
    return "../images/PlayingCards/" + this.toString() + ".png";
  },
  getBackURL: function () {
    //
    return "../images/PlayingCards/back.png";
  },
};
