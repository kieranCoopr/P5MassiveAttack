var mySong, amplitude, play;

function preload(){
    mySong = loadSound('assets/massiveAttackAngel 2.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    rectMode(CENTER);

    amplitude = new p5.Amplitude();
    play= false;
    button = createButton("Play")
    button.center(); 
    button.addClass('btn');   
    button.mousePressed(()=>{
        play = true;
        mySong.play();
        button.hide();
        

    });

}

function draw() {

    console.log(play)
    if(play == true){
         //console.log(amplitude.getlevel())
    var level = amplitude.getLevel();
    var vol = map(level,0, 1, 0, 1000);
    var col = map(level,0, 1, 0, 225);

    background(col);

    //console.log(vol)
    noStroke()

    if(vol>200){
        console.log('kick peak');
        fill(col+10);
    ellipse(width/2, height/2, vol + 100);
    }
    

    fill(col, 255, 255);
    ellipse(width/2, height/2, vol);

    fill(100, col, 255);
    ellipse(width/2, height/2, vol/2);
        

    }
   

}
