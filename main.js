
nosex=0;
nosey=0; 

function preload(){

}

function setup(){
    canvas = createCanvas(480,320);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,320);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
classifer = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log("Pose net is initialized");
}


function draw(){
    image(video,0,0,480,320);
    fill(255, 26, 117);
    stroke(255, 179, 209);
    circle(nosex,nosey,30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    nosex =results[0].pose.nose.x;
    nosey =results[0].pose.nose.y;
    console.log("nosex ="+nosex);
    console.log("nosey ="+nosey);
}
}
