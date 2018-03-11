function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    window.addEventListener("compassneedscalibration", function(event) {
        event.preventDefault();
    }, true);
    detectMotion();
    window.removeEventListener("devicemotion", processEvent);
}

function detectMotion() {
    window.addEventListener("devicemotion", processEvent, true);
}

function processEvent(event) {
    document.getElementById('x').innerHTML = 'Acceleration X: ' + event.acceleration.x;
    document.getElementById('y').innerHTML = 'Acceleration Y: ' + event.acceleration.y;
    document.getElementById('z').innerHTML = 'Acceleration Z: ' + event.acceleration.z;
}