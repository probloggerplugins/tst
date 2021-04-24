var img = new Image();
img.src = 'siksa.JPG';
document.body.appendChild(img);

async function huj() {
	
}

faceapi.loadSsdMobilenetv1Model('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights/ssd_mobilenetv1_model-weights_manifest.json').then(() => {
	fullFaceDescriptions = faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
});
