music=""

LeftWristX = ""
RightWristX = ""
ScoreLeftWrist = ""
ScoreRightWrist = ""
LeftWristY = ""
RightWristY = ""
function setup(){
canvas = createCanvas(700,500)
camera = createCapture(VIDEO)
camera.hide()
canvas.center()
Model= ml5.poseNet(camera,modelLoaded)
Model.on("pose",getResults)
}
function draw(){
    image(camera,0,0,700,500);
    if(ScoreRightWrist > 0.2){
    fill("Blue")
    circle(RightWristX,RightWristY,45)
}
 if(ScoreLeftWrist > 0.2){
    fill("Red")
    circle(LeftWristX,LeftWristY,45)
}
}
function preload(){
    music=loadSound("ActualMusic.mp3")
}
function modelLoaded(){
    console.log("MODEL IS LOADED");
}
function getResults(results){
if(results.length > 0){
    console.log(results)
    LeftWristX = results[0].pose.leftWrist.x
    console.log("LeftWristX - " + LeftWristX);
    LeftWristY = results[0].pose.leftWrist.y
    console.log("LeftWristY - " + LeftWristY);
    RightWristX = results[0].pose.rightWrist.x
    console.log("RightWristX - " + RightWristX);
    RightWristY = results[0].pose.rightWrist.y
    console.log("RighttWristY - " + RightWristY);
    ScoreLeftWrist = results[0].pose.keypoints[9].score
    console.log("Left Wrist Score - " + ScoreLeftWrist);
    ScoreRightWrist = results[0].pose.keypoints[10].score
    console.log("Right Wrist Score - " + ScoreRightWrist);
}
}
function PlayTheMusic(){
    music.play()
    music.setVolume(0.1)
    music.rate(1)
}
function StopMusic(){
    music.pause()
}
