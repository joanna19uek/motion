function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    window.addEventListener("compassneedscalibration", function(event) {
        event.preventDefault();
    }, true);
    detectMotion();
}

function detectMotion() {
    window.addEventListener("devicemotion", processEvent, true);
}

function processEvent(event) {
    document.getElementById('x').innerHTML = 'Acceleration X: ' + Math.round(event.acceleration.x);
    document.getElementById('y').innerHTML = 'Acceleration Y: ' + Math.round(event.acceleration.y);
    document.getElementById('z').innerHTML = 'Acceleration Z: ' + Math.round(event.acceleration.z);
}