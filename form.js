class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement("h2")
        title.html("Parshwa Car Racing Game")
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(120,160);
        this.button.position(120,180);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(120, 170); 
        })
    }
}