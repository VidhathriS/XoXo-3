class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    //this.title.hide();
  }

  display(){
    //adding title for the game
    this.title.html("XOXO Game");
    this.title.position(displayWidth/2 - 50, 0);

    //adding the input (name)
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    //adding button
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    //adding reset button
    this.reset.position(displayWidth-100,20)

    //adding mousePressed function for the button
    this.button.mousePressed(()=>{
      //hiding input and button
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      //adding greeting
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
    this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
          database.ref("players").remove();
    })

  }
}
