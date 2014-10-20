// index.js

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];


var el = require('./el.js');
var world = new el.World(plan, { "#": el.Wall,
                               "o": el.BouncingCritter});

cycle();

function cycle(){
 if (true){
   animate();
 };
}

function animate(){
  setTimeout(function(){
    world.turn();
    clearScreen();
    showWorld();
    cycle();
  }, 50);
}

function showWorld(){
  console.log("ELECTRONIC LIFE\n");
  console.log(world.toString());
}

function clearScreen(){
  for (var i = 0; i < 5; i++){
    console.log("\n\n\n\n\n\n\n\n\n\n");
  };
}
