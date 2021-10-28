song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes)
}

function gotposes(results){
    if (results.length > 0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("the value of left wrist x = " + leftWristX);
        console.log("the value of left wrist y = " + leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("the value of right wrist y = " + rightWristY);
    }  
}

function modelloaded(){
    console.log("posenet has been initialized")
}

function draw() {
    image(video,0,0,600,500);
}

function play_btn() {
    song.play();
    song.setVolume(1)
    song.rate(1)
}

function stop_btn() {
    song.stop()
}