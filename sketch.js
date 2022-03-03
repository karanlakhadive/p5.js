function setup()
{
    createCanvas(windowWidth,windowHeight);
    background(0);
    
}
function draw()
{
    let x=random(windowWidth);
    let y=random(windowHeight);
    let r=random(255),b=random(255),g=random(255);
    fill(r,g,b,100);
    noStroke();
    frameRate(10);
    ellipse(x,y,25,25); 
   
}