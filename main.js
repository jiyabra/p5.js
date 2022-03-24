function preload(){
   
   };
   
   function setup(){
       canvas = createCanvas(640,480);
       canvas.position(110,250);
       video = createCapture(VIDEO);
       video.hide();
   
       tint_color = "";
   }
   
   function draw(){
       image(video,70,70,500,380);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,100,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,150,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,200,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,250,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,300,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,350,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,400,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,450,70);
       fill(0,255,0);
       stroke(255,0,0);
       circle(31,500,70);
       fill(255,0,0);
       stroke(0,0,255);
       circle(10,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(50,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(100,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(150,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(200,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(250,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(300,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(350,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(400,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(450,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(500,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(550,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(600,35,60);
       fill(255,0,0);
       stroke(0,0,255);
       circle(650,35,60);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,100,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,150,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,200,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,250,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,300,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,350,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,400,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,450,70);
       fill(0,0,255);
       stroke(255,0,0);
       circle(610,500,70);
       tint(tint_color);
   }
   
   function take_snapshot(){
       save('Filter_app.png');
   }
   
   function Filter_tint(){
       tint_color = document.getElementById("color_name").value;
   }