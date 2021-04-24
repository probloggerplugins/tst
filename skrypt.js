var img = new Image();
img.src = 'siksa.JPG';
document.body.appendChild(img);

async function huj() {
	
}

faceapi.loadSsdMobilenetv1Model('https://probloggerplugins.github.io/tst/').then(() => {
	fullFaceDescriptions = faceapi.detectSingleFace(img).withFaceLandmarks();
});

const detections = faceapi.detectSingleFaces(img)

// resize the detected boxes in case your displayed image has a different size then the original
const detectionsForSize = faceapi.resizeResults(detections, { width: img.width, height: img.height })
// draw them into a canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = input.width
canvas.height = input.height
faceapi.drawDetection(canvas, detectionsForSize, { withScore: true })
