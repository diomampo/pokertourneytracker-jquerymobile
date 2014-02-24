var PokerTourneyModel = (function(){
var currentPlayer = null;
var players = [
  {fullname: 'Doyle Brunson', chipstack: 2500, description: 'Author of Super System and two-time WSOP champion.'}, 
  {fullname: 'Chip Reese', chipstack: 5000, description: 'Best cash game player ever and amazing tournament player. '}, 
  {fullname: 'Phil Hellmuth', chipstack: 7500, description: 'One of the biggest names in the game and one of the youngest WSOP champions.'}
];

var addPlayer = function(playerObj) {
  players.push(playerObj);
};

var removePlayerByName = function(fullname) {
  for( var i = 0; i < players.length; i++ ) {
    if( fullname == players[i].fullname ) {
      players.splice(i, 1);
      return;
    }
  }
};

var getPlayers = function() {
  function orderByChipstack(a,b) {
    if (a.chipstack < b.chipstack)
       return 1;
    if (a.chipstack > b.chipstack)
      return -1;
    return 0;
  }

  players.sort(orderByChipstack);
  return players;
};

var getPlayerByName = function(fullname) {
  for( var i = 0; i < players.length; i++ ) {
    if( fullname == players[i].fullname ) {
      return players[i];
    }
  }
};

var getCurrentPlayer = function() {
  return currentPlayer;
};
var setCurrentPlayer = function(playerObj) {
  currentPlayer = playerObj;
};

return {
  addPlayer: addPlayer,
  removePlayerByName: removePlayerByName,
  getPlayerByName: getPlayerByName,
  getPlayers: getPlayers,
  getCurrentPlayer: getCurrentPlayer,
  setCurrentPlayer: setCurrentPlayer
}
})();