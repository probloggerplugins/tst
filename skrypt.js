var img = new Image();
img.src = 'siksa.JPG';
document.body.appendChild(img);

async function huj() {
	
}

faceapi.loadSsdMobilenetv1Model('https://probloggerplugins.github.io/tst/').then(() => {
	const detections = faceapi.detectAllFaces(img)

// resize the detected boxes in case your displayed image has a different size then the original
const detectionsForSize = faceapi.resizeResults(detections, { width: img.width, height: img.height })
// draw them into a canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = img.width
canvas.height = img.height
faceapi.drawDetection(canvas, detectionsForSize, { withScore: true })
});
