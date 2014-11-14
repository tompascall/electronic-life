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
var animate = require('./animator.js').animate;

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

var valley = new el.LifelikeWorld(
  ["############################",
   "#####       ****      ######",
   "##   ***     **        ***##",
   "#   *##**         **  O **##",
   "#    ***     O   *##**    *#",
   "#       O        *##***    #",
   "#                *##**     #",
   "#   O      *#*             #",
   "#*        **#**       O   *#",
   "#***       *##**    O   ***#",
   "##****     ###***      **###",
   "############################"],
  {"#": el.Wall,
   "O": el.PlantEater,
   "*": el.Plant}
);

animate(valley, valley.turn, valley.toString);

