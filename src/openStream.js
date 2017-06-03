const playVideo = require("./playVideo");

function openStream(){
    navigator.mediaDevices.getUserMedia({audio : false, video : true})
    .then(stream => playVideo(stream, 'localStream'))
    .catch(err => console.log(stream));
}

module.exports = openStream;


