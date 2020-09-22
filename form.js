function form() {
        title = createElement("h2");
        title.html("Dueling Game");
        title.position(100,0);

        input = createInput("Name");
        input.position(100,160);

        button = createButton("Play");
        button.position(165,200);

        if(playerCount < 2){
            button.mousePressed(chooseName);
        } else{
            button.mousePressed(sorry);
        }
}

function chooseName(){
    input.hide();
    button.hide();

    greeting = createElement("h3");
    greeting1 = createElement("h3");

    player.name = input.value();

    playerCount++;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    greeting.html("Hello "+player.name);
    greeting.position(130,80);
    
    greeting1.html("Choose Your House");
    greeting1.position(100, 140);

    gryfbutton = createButton("Gryffindor");
    gryfbutton.position(10,350);
    gryfbutton.mousePressed(gryffindor);

    slybutton = createButton("Slytherin")
    slybutton.position(100, 350);
    slybutton.mousePressed(slytherin);

    ravbutton = createButton("Ravenclaw");
    ravbutton.position(190, 350);
    ravbutton.mousePressed(ravenclaw);

    hufbutton = createButton("Hufflepuff");
    hufbutton.position(290, 350);
    hufbutton.mousePressed(hufflepuff);
}

function gryffindor(){
    greeting.hide();
    greeting1.hide();
    gryfbutton.hide();
    slybutton.hide();
    ravbutton.hide();
    hufbutton.hide();

    greet = createElement("h3");
    greet.html("You belong to Gryffindor!");
    greet.position(90,150);

    if(playerCount != 2){
        greet1 = createElement("h3");
        greet1.html("Waiting for Player to join");
        greet1.position(90, 250);
    }
}

function slytherin(){
    greeting.hide();
    greeting1.hide();
    gryfbutton.hide();
    slybutton.hide();
    ravbutton.hide();
    hufbutton.hide();

    greet = createElement("h3");
    greet.html("You belong to Slytherin!");
    greet.position(90,150);

    if(playerCount != 2){
        greet1 = createElement("h3");
        greet1.html("Waiting for Player to join");
        greet1.position(90, 250);
    }
}

function ravenclaw(){
    greeting.hide();
    greeting1.hide();
    gryfbutton.hide();
    slybutton.hide();
    ravbutton.hide();
    hufbutton.hide();

    greet = createElement("h3");
    greet.html("You belong to Ravenclaw!");
    greet.position(90,150);

    if(playerCount != 2){
        greet1 = createElement("h3");
        greet1.html("Waiting for Player to join");
        greet1.position(90, 250);
    }
}

function hufflepuff(){
    greeting.hide();
    greeting1.hide();
    gryfbutton.hide();
    slybutton.hide();
    ravbutton.hide();
    hufbutton.hide();

    greet = createElement("h3");
    greet.html("You belong to Hufflepuff!");
    greet.position(90,150);

    if(playerCount != 2){
        greet1 = createElement("h3");
        greet1.html("Waiting for Player to join");
        greet1.position(90, 250);
    }
}

function sorry(){
        title.hide();
        input.hide();
        button.hide();
  
        error = createElement("h2");
        error.html("Sorry, there is no more room");
        error.position(50,200);
  }