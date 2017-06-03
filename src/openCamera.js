function openCamera(){
    navigator.mediaDevices.getUserMedia({audio : false, video : true})
    .then(stream => {
        const video = document.getElementById('localStream');
        video.srcObject = stream;
        video.onloadedmetadata = function(e){
            video.play()
        };
    })
    .catch(err => console.log(stream));
}

module.exports = openCamera;


