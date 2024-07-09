let c = 'white'
let c2 = 'white'
let thickness1 = 10
let thickness2 = 10
let cnv

function setup() {
  cnv = createCanvas(windowWidth,windowHeight)
  background(255)
}

function draw(){
  if(mouseIsPressed && mouseX<width - 126 && mouseX>0){
    strokeWeight(thickness1)
    stroke(c)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
  //border
  strokeWeight(0)
  fill('black')
  strokeWeight(2)
  line(width - 126,0,width - 126,height)
  fill(255)
  noStroke()
  rect(width - 125,0,125,height)
  strokeWeight(0)
  noStroke()
//first pallette
  fill(0)
  rect(width - 120,5,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<30 && mouseY>5 && mouseIsPressed){
    c='black'
  }
  fill(195)
  rect(width - 120,35,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<60 && mouseY>35 && mouseIsPressed){
    c = 195
  }
  fill(155)
  rect(width - 90,5,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<30 && mouseY>5 && mouseIsPressed){
    c=155
  }
  fill(235)
  rect(width - 90,35,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<60 && mouseY>35 && mouseIsPressed){
    c=235
  }
  fill('#ff0000')
  rect(width - 120,65,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<90 && mouseY>65 && mouseIsPressed){
    c='#ff0000'
  }
  fill('#fc4e03')
  rect(width - 90,65,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<90 && mouseY>65 && mouseIsPressed){
    c='#fc4e03'
  }
  fill('#fa7e48')
  rect(width - 120,95,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<125 && mouseY>95 && mouseIsPressed){
    c='#fa7e48'
  }
  fill('#fccb9d')
  rect(width - 90,95,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<125 && mouseY>95 && mouseIsPressed){
    c='#fccb9d'
  }
  fill('#ffff00')
  rect(width - 120,125,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<150 && mouseY>125 && mouseIsPressed){
    c='#ffff00'
  }
  fill('#ffff6b')
  rect(width - 90,125,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<150 && mouseY>125 && mouseIsPressed){
    c='#ffff6b'
  }
  fill('#fcfcb1')
  rect(width - 120,155,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<180 && mouseY>155 && mouseIsPressed){
    c='#fcfcb1'
  }
  fill('#ffffd1')
  rect(width - 90,155,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<180 && mouseY>155 && mouseIsPressed){
    c='#ffffd1'
  }
  fill('#00ff00')
  rect(width - 120,185,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<210 && mouseY>185 && mouseIsPressed){
    c='#00ff00'
  }
  fill('#9cf79c')
  rect(width - 90,185,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<210 && mouseY>185 && mouseIsPressed){
    c='#9cf79c'
  }
  fill('#9bd19b')
  rect(width - 120,215,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<240 && mouseY>215 && mouseIsPressed){
    c='#9bd19b'
  }
  fill('#dcf7dc')
  rect(width - 90,215,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<240 && mouseY>215 && mouseIsPressed){
    c='#dcf7dc'
  }
  fill('#034203')
  rect(width - 120,245,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<270 && mouseY>245 && mouseIsPressed){
    c='#034203'
  }
  fill('#1d701d')
  rect(width - 90,245,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<270 && mouseY>245 && mouseIsPressed){
    c='#1d701d'
  }
  fill('#0f910f')
  rect(width - 120,275,25,25,10)
  if(mouseX>width - 120 && mouseX<width - 95 && mouseY<300 && mouseY>275 && mouseIsPressed){
    c='#0f910f'
  }
  fill('#4aa84a')
  rect(width - 90,275,25,25,10)
  if(mouseX>width - 90 && mouseX<width - 65 && mouseY<300 && mouseY>275 && mouseIsPressed){
    c='#4aa84a'
  }
  
//second pallette
  fill('#02a6f7')
  rect(width - 60,5,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<30 && mouseY>5 && mouseIsPressed){
    c='#02a6f7'
  }
  fill('#54a1d1')
  rect(width - 60,35,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<60 && mouseY>35 && mouseIsPressed){
    c='#54a1d1'
  }
  fill('#80c7f2')
  rect(width - 30,5,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<30 && mouseY>5 && mouseIsPressed){
    c='#80c7f2'
  }
  fill('#afe4ed')
  rect(width - 30,35,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<60 && mouseY>35 && mouseIsPressed){
    c='#afe4ed'
  }
  fill('#070769')
  rect(width - 60,65,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<90 && mouseY>65 && mouseIsPressed){
    c='#070769'
  }
  fill('#0000ff')
  rect(width - 30,65,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<90 && mouseY>65 && mouseIsPressed){
    c='#0000ff'
  }
  fill('#4545e6')
  rect(width - 60,95,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<125 && mouseY>95 && mouseIsPressed){
    c='#4545e6'
  }
  fill('#8b8be8')
  rect(width - 30,95,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<125 && mouseY>95 && mouseIsPressed){
    c='#8b8be8'
  }
  fill('#360769')
  rect(width - 60,125,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<150 && mouseY>125 && mouseIsPressed){
    c='#360769'
  }
  fill('#53208a')
  rect(width - 30,125,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<150 && mouseY>125 && mouseIsPressed){
    c='#53208a'
  }
  fill('#7d05fc')
  rect(width - 60,155,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<180 && mouseY>155 && mouseIsPressed){
    c='#7d05fc'
  }
  fill('#a164e3')
  rect(width - 30,155,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<180 && mouseY>155 && mouseIsPressed){
    c='#a164e3'
  }
  fill('#ff00ff')
  rect(width - 60,185,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<210 && mouseY>185 && mouseIsPressed){
    c='#ff00ff'
  }
  fill('#e47be8')
  rect(width - 30,185,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<210 && mouseY>185 && mouseIsPressed){
    c='#e47be8'
  }
  fill('#8f2760')
  rect(width - 60,215,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<240 && mouseY>215 && mouseIsPressed){
    c='#8f2760'
  }
  fill('#f50078')
  rect(width - 30,215,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<240 && mouseY>215 && mouseIsPressed){
    c='#f50078'
  }
  fill('#542603')
  rect(width - 60,245,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<270 && mouseY>245 && mouseIsPressed){
    c='#542603'
  }
  fill('#7d4113')
  rect(width - 30,245,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<270 && mouseY>245 && mouseIsPressed){
    c='#7d4113'
  }
  fill('#bf5708')
  rect(width - 60,275,25,25,10)
  if(mouseX>width - 60 && mouseX<width - 35 && mouseY<300 && mouseY>275 && mouseIsPressed){
    c='#bf5708'
  }
  fill('#b88d6c')
  rect(width - 30,275,25,25,10)
  if(mouseX>width - 30 && mouseX<width - 5 && mouseY<300 && mouseY>275 && mouseIsPressed){
    c='#b88d6c'
  }
  //title- ink
  fill('black')
  textAlign(LEFT)
  textSize(8)
  textAlign(CENTER)
  text('inks',width - 105,325)
  text(thickness1,width - 46,325)
  strokeWeight(1)
  fill(225)
  //adjustment button 1
  rect(width - 84,310,18,18)
  //adjustment button 2
  rect(width - 24,310,18,18)
  fill('black')
  text('+',width - 75,323)
  text('-',width - 15,323)
  //normal pen
  stroke('black')
  fill(190)
  rect(width - 126,335,120,20)
  triangle(width - 30,335,width - 30,355,width - 5,345)
  fill('black')
  rect(width - 15,335,10,20)
  noStroke()
  fill(255)
  triangle(width - 30,335,width - 5,330,width,345)
  triangle(width - 30,355,width - 5,360,width,345)
  //random colour pen
  stroke('black')
  fill(c)
  rect(width - 126,360,120,20)
  triangle(width - 30,360,width - 30,380,width - 5,370)
  fill('black')
  rect(width - 15,360,10,20)
  noStroke()
  fill(255)
  triangle(width - 30,360,width - 5,355,width,370)
  triangle(width - 30,380,width - 5,395,width,370)
  if(mouseX>width - 126 && mouseX<width - 5 && mouseY>360 && mouseY<380 && mouseIsPressed){
    c=color(random(255),random(255),random(255))
  }
  //dotted pen
  stroke('black')
  fill(190)
  rect(width - 126,385,120,20)
  triangle(width - 30,385,width - 30,405,width - 5,395)
  fill('black')
  rect(width - 15,385,10,20)
  noStroke()
  fill(255)
  triangle(width - 30,385,width - 5,380,width,395)
  triangle(width - 30,405,width - 5,408,width,395)
  if(mouseX>width - 126 && mouseX<width - 5 && mouseY>385 && mouseY<405 && mouseIsPressed){
    c=color(random(255),random(255),random(255),100)
  }
  //text- pen labels
  textFont('Playwrite FR Trad')
  fill(0)
  textAlign(LEFT)
  textSize(8)
  text('normal ink',width - 120,350)
  text('random ink',width - 120,375)
  text('translucent ink',width - 120,400)
  //title- eraser
  textAlign(CENTER)
  text(thickness2,width - 45,430)
  text('erase',width - 105,430)
  strokeWeight(1)
  fill(225)
  //adjustment button 3
  rect(width - 84,415,18,18)
  //adjustment button 4
  rect(width - 24,415,18,18)
  fill('black')
  text('+',width - 75,428)
  text('-',width - 15,428)
  stroke('black')
  fill('pink')
  rect(width - 126,438,120,20)
  fill('red')
  noStroke()
  rect(width - 120,470,50,50,10)
  fill('green')
  rect(width - 60,470,50,50,10)
  //title- eraser
  fill(0)
  textAlign(LEFT)
  text('eraser',width - 120,453.5)
  textAlign(CENTER)
  text('CLEAR',width - 95,502)
  text('SAVE',width - 35,502)
  //clear canvas- erasing
  if(mouseX>width - 126 && mouseX<width && mouseY>438 && mouseY<458 && mouseIsPressed){
    c='white'
    fill(c)
    ellipse(mouseX,mouseY,thickness2,thickness2)
  }
  if(mouseX>width - 120 && mouseX<width - 70 && mouseY>463 && mouseY<513 && mouseIsPressed){
    noStroke()
    fill('white')
    rect(0,0,(width-127),height)
  }
  fill(0)
  textAlign(LEFT)
  text('user manual',width - 107.5,535)
  //user manual
  fill(190)
  rect(width - 46,526,20,10,10)
  textAlign(CENTER)
  textSize(5)
  fill(0)
  text('?',width - 36,534)
  textSize(8)
  //user manual- floating platform information
  if(mouseX>width - 46 && mouseX<width - 26 && mouseY>526 && mouseY<536){
    fill(255)
    noStroke()
    rect(0,0,125,225)
    textSize(7)
    fill(0)
    textAlign(LEFT)
    text('36 colours offered;',5,10)
    text('choose colours from basic',5,20)
    text('palettes to fill a colour',5,30)
    text('for normal ink, choose',5,45)
    text('colours from the palette or',5,55)
    text('colour picker to fill a colour',5,65)
    text('random ink generates',5,80)
    text('a computer-randomised colour',5,90)
    text('every time you click on it',5,100)
    text('control the pen and eraser',5,115)
    text('thickness by pressing',5,125)
    text('the "+" and "-" buttons',5,135)
    text('beside the category headers',5,145)
    text('click "clear" to delete',5,160)
    text('your current drawing, and',5,170)
    text('"save" to download your work',5,180)
    text('hold on "random" or',5,195)
    text('"translucent" inks to',5,205)
    text('randomise colours',5,215)
  }
}

function mousePressed(){
  if(mouseX>width - 84 && mouseX<width - 66 && mouseY>310 && mouseY<328){
    thickness1 = thickness1 + 1
  }
  if(mouseX>width - 25 && mouseX<width - 7 && mouseY>310 && mouseY<328 && thickness1>1){
    thickness1 = thickness1 - 1
  }
  if(mouseX>width - 84 && mouseX<width - 66 && mouseY>415 && mouseY<433){
    thickness2 = thickness2 + 1
  }
  if(mouseX>width - 25 && mouseX<width - 7 && mouseY>415 && mouseY<433 && thickness2>1){
    thickness2 = thickness2 - 1
  }
  if(mouseX>width - 60 && mouseX<width - 15 && mouseY>470 && mouseY<520){
    var to_save = get(0,0,(width - 126),height)
    to_save.save('myDrawing.jpg')
  }
}