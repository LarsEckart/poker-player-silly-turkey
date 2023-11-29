class Player {
  static get VERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {
    if(gameState.players[gameState.in_action].hole_cards[0].rank === gameState.players[gameState.in_action].hole_cards[1].rank) {
      bet(1000);
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
