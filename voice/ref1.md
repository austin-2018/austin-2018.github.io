#### https://stackoverflow.com/questions/23720254/html5-record-voice-audio-and-send-it-via-form
### EXCERPT

##### First, you need the function to convert a dataURI to a blob object.

        var dataURItoBlob = function(dataURI) {
            var binary = atob(dataURI.split(',')[1]);
            var array = [];
            for(var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)]);
        };
##### Then, you need a FormData.

        var fd = new FormData();
        fd.append('filename_you_want_to_post', dataURItoBlob($('a').attr('href')));
        Last, send it with jQuery Aajx:

        $.ajax({
          url: "/where/you/post/to",
          type: "POST",
          data: fd,
          processData: false,
          contentType: false
        });


