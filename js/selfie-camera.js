(function() {

    // Camera initial size
    var width = 1920;
    var height = 0;

    var streaming = false;

    var video = null;
    var canvas = null;
    var photo = null;
    var startbutton = null;

    function startup() {
        video = document.getElementById('selfie-stream');
        canvas = document.getElementById('selfie-canvas');
        photo = document.getElementById('selfie-rendered');
        startbutton = document.getElementById('capture-selfie-btn');

        navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("An error occurred: " + err);
            });

        video.setAttribute("playsinline", true); // Fix for iOS rendering issue
        video.addEventListener('canplay', function(ev) {
            if (!streaming) {
                height = video.videoHeight / (video.videoWidth / width);

                if (isNaN(height)) {
                    height = width / (4 / 3);
                }

                video.setAttribute('width', width);
                video.setAttribute('height', height);
                canvas.setAttribute('width', width);
                canvas.setAttribute('height', height);
                streaming = true;
            }
        }, false);

        startbutton.addEventListener('click', function(ev) {
            takepicture();
            ev.preventDefault();
        }, false);

        clearphoto();
    }

    function clearphoto() {
        var context = canvas.getContext('2d');
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    // Capture selfie
    function takepicture() {
        var context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.translate(video.width, 0);
            context.scale(-1, 1);
            context.drawImage(video, 0, 0, width, height);

            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);

            document.getElementById("retake-selfie").disabled = false;

        } else {
            document.getElementById("retake-selfie").disabled = true;
            clearphoto();
        }
    }

    window.addEventListener('load', startup, false);
})();

// Open camera modal
$('#selfie-camera-modal').on('show.bs.modal', function(event) {
    $('#selfie-guide-modal').modal('hide');
})