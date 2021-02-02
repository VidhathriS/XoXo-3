class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    if(this.index === 1){
    database.ref(playerIndex).set({
      name:this.name,
      element:"X",
    });
  }

     else if(this.index === 2){
      database.ref(playerIndex).set({
        name:this.name,
        element:"O",
    });
  }
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
