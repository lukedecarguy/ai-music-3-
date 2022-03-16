var Tokyo_Drift="";
var Get_lucky="";
leftWristX = 0 ;
leftWristY = 0 ;
rightWristX = 0 ;
rightWristY = 0 ;
function preload(){
    song1 = loadSound("Daft_Punk_ft_Pharrel_Williams_Nile_Rodgers_-_Get_Lucky_Qoret.com.mp3");
    song2 = loadSound("Tokyo-Drift_192(PagalWorld).mp3");
}
function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0 , 600 ,500);
    fill("red");
    stroke("red");
    if(scoreLeftWrist > 0.2) {
    circle(leftWristX, leftWristY, 20);
    song1.play();
    song1.setVolume(1);
    if(song1.isplaying()==true){
    document.getElementById("songName_button").innerHTML = "Get Lucky(daft punk) is playing ";
    }
}
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 20);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose. leftWrist.y;
    console.log("leftWristX" + leftWristX + "leftWristY" + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX" + rightWristX + "rightWristY" + rightWristY);
}
}

