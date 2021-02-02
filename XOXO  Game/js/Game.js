class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
       
       //Creating table for this game using lines
       line(displayWidth-850,displayHeight-200,displayWidth-850,displayHeight-550)
       line(displayWidth-700,displayHeight-200,displayWidth-700,displayHeight-550)
       line(displayWidth-550,displayHeight-200,displayWidth-550,displayHeight-550)
       line(displayWidth-400,displayHeight-200,displayWidth-400,displayHeight-550)

       line(displayWidth-850,displayHeight-550,displayWidth-400,displayHeight-550)
       line(displayWidth-850,displayHeight-430,displayWidth-400,displayHeight-430)
       line(displayWidth-850,displayHeight-310,displayWidth-400,displayHeight-310)
       line(displayWidth-850,displayHeight-200,displayWidth-400,displayHeight-200)

       //creating sprites for the mousePressedOver thing..
       var y1 = createSprite(displayWidth-775,displayHeight-490,150,120)
       var y2 = createSprite(displayWidth-625,displayHeight-490,150,120)
       var y3 = createSprite(displayWidth-475,displayHeight-490,150,120)
       var y4 = createSprite(displayWidth-775,displayHeight-370,150,120)
       var y5 = createSprite(displayWidth-625,displayHeight-370,150,120)
       var y6 = createSprite(displayWidth-475,displayHeight-370,150,120)
       var y7 = createSprite(displayWidth-775,displayHeight-255,150,110)
       var y8 = createSprite(displayWidth-625,displayHeight-255,150,110)
       var y9 = createSprite(displayWidth-475,displayHeight-255,150,110)

       //diagonal lines for the correct pattern
       line(displayWidth-850,displayHeight-200,displayWidth-400,displayHeight-550)
       line(displayWidth-400,displayHeight-200,displayWidth-850,displayHeight-550)

       //vertical lines for correct pattern
       line(displayWidth-775,displayHeight-200,displayWidth-775,displayHeight-550)
       line(displayWidth-625,displayHeight-200,displayWidth-625,displayHeight-550)
       line(displayWidth-475,displayHeight-200,displayWidth-475,displayHeight-550)

       //horizontal lines for correct pattern
       line(displayWidth-850,displayHeight-490,displayWidth-400,displayHeight-490)
       line(displayWidth-850,displayHeight-370,displayWidth-400,displayHeight-370)
       line(displayWidth-850,displayHeight-250,displayWidth-400,displayHeight-250)

       //drawSprites();

       for(var plr in allPlayers){
        //creating variable for index
        var index ;
        //add 1 to the index for every loop
        index = index + 1 ;

          //writing if condition for player.index
          if (index === player.index){
            
            //writing if condition for index = 1
            if(index = 1){

            //writing if condition for mousePressedOver and for adding images
            if(mousePressedOver(y1)||mousePressedOver(y2)||mousePressedOver(y3)||mousePressedOver(y4)||mousePressedOver(y5)||mousePressedOver(y6)||mousePressedOver(y7)||mousePressedOver(y8)||mousePressedOver(y9)){
              loadImage = "images/X Image.png"
            }
            }

            //writing if condition for index = 2
            if(index = 2){

              //writing if condition for mousePressedOver and for adding images
              if(mousePressedover(y1)||mousePressedOver(y2)||mousePressedOver(y3)||mousePressedOver(y4)||mousePressedOver(y5)||mousePressedOver(y6)||mousePressedOver(y7)||mousePressedOver(y8)||mousePressedOver(y9)){
              loadImage = "images/oo.png"
            }
       }
      }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      //}
      drawSprites();
    }
  
  }

    //endState()
      //console.log("GameEnded")
      //console.log(player.rank)
   }
  }
