var createButton = red;
var createButton = purple;

var r = 0;
var p = 0;

function setup() {
  createCanvas(400,400); 
  
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_purple = createButton("PURPLE");
  btn_purple.position(200,50);
  btn_purple.mousePressed(purple_bg);
}


function draw() {
background(r,p)

  function red_bg();
{
  r = 225;
  p = 0;
}

function purple_bg()
{
  r = 0;
  p =225;
}
}

drawSprites();