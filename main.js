nose_x=0;
nose_y=0;
right_wrist_x=0;
left_wrist_x=0;
difference=0;

function setup(){
canvas= createCanvas(550,550);
canvas.position(560,150);

video= createCapture(VIDEO);
video.size(550,550);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("Posenet is intialized");
}

function gotPoses(results){
if(results.length >0){
console.log(results);
}
}