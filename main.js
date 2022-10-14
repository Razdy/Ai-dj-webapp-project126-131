song1 = "ya.mp3"
song2 = "let-her-go.mp3"

function preload() {
    song1 = loadSound("ya.mp3");
    song2 = loadSound("let-her-go.mp3");
}

function setup() {
    canvas = createCanvas( 400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image( video, 0, 0, 500, 500);
}

function play() {
    song1.play("ya.mp3");
    song2.play("let-her-go.mp3");
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " +leftWristX+ "leftWristY =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " +rightWristX+ "rightWristY =" + rightWristY);

    }
