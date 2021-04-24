var img = new Image();
img.src = 'siksa.JPG';
document.body.appendChild(img);

async function huj() {
	
}

faceapi.loadSsdMobilenetv1Model('/tst').then(() => {
	fullFaceDescriptions = faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();
});
