var img = new Image();
img.src = 'siksa.JPG';
document.body.appendChild(img);

async function huj() {
	
}

faceapi.loadSsdMobilenetv1Model('https://probloggerplugins.github.io/tst/');
faceapi.loadFaceLandmarkModel('https://probloggerplugins.github.io/tst/');
