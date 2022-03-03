let lp;
let rp;
let b;

let bimg;

let score1=0;
let score2=0;


function preload(){
    bimg=loadImage('bimg.jpg')
}
function setup(){
    createCanvas(400,400)
    rectMode(CENTER)
    lp= new Peddle(10)
    rp= new Peddle(390)
    b= new Ball()
}
function draw(){
    background(bimg)
    lp.show();
    rp.show();
    lp.move();
    lp.update();
    rp.move();
    rp.update();
    b.show()
    b.move()
    b.update()

    if(b.x>=380 && b.y<=(rp.y+50) && b.y>=(rp.y-50))
    {
        b.vx=b.vx*-1;
    }

    if(b.x<=10 && b.y<=(lp.y+50) && b.y>=(lp.y-50))
    {
        b.vx=b.vx*-1
    }

    if(b.x>=width){
        score1++;
        b.reset();
    }
    
    if(b.x<=0){
        score2++;
        b.reset();
    }

    textSize(16);
    fill(255)
    text("Insaan1",30,50)
    text(score1,38,30)

    
    text("Insaan2",280,50)
    text(score2,288,30)
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        rp.dir(-3);
    }
    
    if(keyCode===DOWN_ARROW){
        rp.dir(3);
    }

    if(keyCode===65){
        lp.dir(-3);
    }
    
    if(keyCode===90){
        lp.dir(3);
    }
}

