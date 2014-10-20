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

var solidWorld = new el.World(plan, { "#": el.Wall,
                               "o": el.BouncingCritter});

var animateWorld = new el.World(
  ["############",
   "#     #    #",
   "#   ~    ~ #",
   "#  ##      #",
   "#  ##  o####",
   "#          #",
   "############"],
  {"#": el.Wall,
   "~": el.WallFollower,
   "o": el.BouncingCritter}
);

cycle();

function cycle(){
 if (true){
   animate(animateWorld);
 };
}

function animate(world){
  setTimeout(function(){
    world.turn();
    clearScreen();
    showWorld(world);
    cycle();
  }, 50);
}

function showWorld(world){
  console.log("ELECTRONIC LIFE\n");
  console.log(world.toString());
}

function clearScreen(){
  for (var i = 0; i < 5; i++){
    console.log("\n\n\n\n\n\n\n\n\n\n");
  };
}
