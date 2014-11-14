// animator.js


function animate(object, turn, toString){
  setTimeout(function(){
    turn.call(object);//world.turn();
    clearScreen();
    show(object, toString);
    animate(object, turn, toString);
  }, 100);
}

function show(object, toString){
  console.log(toString.call(object));
}

function clearScreen(){
  console.log("\n\n\n\n\n\n\n\n\n\n" +
              "\n\n\n\n\n\n\n\n\n\n" +
              "\n\n\n\n\n\n\n\n\n\n" +
              "\n\n\n\n\n\n\n\n\n\n" +
              "\n\n\n\n\n\n\n\n\n\n");
}

module.exports.animate = animate;
