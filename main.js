
//Draw a red circle on the nose with the circle function. Load a clown nose image in p5.js. Draw clown nose image on the nose


 noseX=0;
 noseY=0;
function preload()
{
clown_nose = loadImage('https://i.postimg.cc/y8476VpR/techno.png');
}
function setup()
{
canvas = createCanvas(400,400);
canvas.center(); 
video = createCapture(VIDEO);
video.size(400, 400);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log("The model is loaded");
}

function gotPoses(results)
{
if (results.length > 0) 
{
console.log(results);  
noseX = results[0].pose.nose.x - 120;
noseY = results[0].pose.nose.y - 140;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
}
}

function draw()
{
image(video, 0, 0, 400, 400);
image(clown_nose, noseX, noseY, 250, 250);
}
function take_snapshot()
{
save('clownimage.png')
}