const openStream = require("./openStream");

// openStream();

const Peer = require('simple-peer');

const p = new Peer({ initiator: location.hash === "#1", trickle: false });

p.on('signal', function(token){
    $('#txtMySignal').val(JSON.stringify(token));
});

p.on('connect', function(){
    setInterval(function(){
        p.send(Math.random());
    }, 2000);
});

p.on('data', function(data){
    console.log(data);
});

$("#btnConnect").click(function(){
    const friendSignal = JSON.parse($('#txtFriendSignal').val());
    p.signal(friendSignal);
});