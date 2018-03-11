function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

var options = {frequency: 1000};

function onDeviceReady() {
    navigator.accelerometr.watchAcceleration(onSuccess, onError, options);
}

function onError() {
    alert('Error!');
}

function onSuccess(acceleration) {
    document.getElementById('x').innerHTML = 'Acceleration X: ' + acceleration.x;
    document.getElementById('y').innerHTML = 'Acceleration Y: ' + acceleration.y;
    document.getElementById('z').innerHTML = 'Acceleration Z: ' + acceleration.z;
}