function preload() {
    
}

function setup() {
    canvas = createCanvas(500 , 500 );
    canvas.position( 110 , 300 );
    canvas.center()
    video = createCapture(VIDEO);
    video.hide() ;
    
}

function draw() {
    image(video , 60 , 70 , 370 , 370 ) ;
    fill('rgb(11, 17, 188)');
    circle(50 , 50 , 90 );
    circle(450 , 450 , 90);
    circle(450 , 50 , 90);
    circle(50 , 450 , 90);

    fill('#A251FA');
    rect(90 , 30 , 320 , 40);
    rect(430 , 90 , 40, 320 );
    rect(90 , 430 , 320 , 40);
    rect(30 , 90 , 40 , 320 );
    

}

function ww() {
    save("happy.png") ; 
}

