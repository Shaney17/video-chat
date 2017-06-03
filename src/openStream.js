function openStream(callback){
    navigator.mediaDevices.getUserMedia({audio : false, video : true})
    .then(stream => callback(stream))
    .catch(err => console.log(stream));
}

module.exports = openStream;


