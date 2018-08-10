#### Investigate converting data to Blob


#### EXCERPT 1

        var blobBin = atob(dataURL.split(',')[1]);
        var array = [];
        for(var i = 0; i < blobBin.length; i++) {
            array.push(blobBin.charCodeAt(i));
        }
        var file=new Blob([new Uint8Array(array)], {type: 'image/png'});


        var formdata = new FormData();
        formdata.append("myNewFileName", file);
        $.ajax({
           url: "uploadFile.php",
           type: "POST",
           data: formdata,
           processData: false,
           contentType: false,
        }).done(function(respond){
          alert(respond);
        });

#### EXCERPT 2

```The canvas image needs to be converted to base64 and then from base64 in to binary. This is done using .toDataURL() and dataURItoBlob()```

##### https://stackoverflow.com/questions/19032406/convert-html5-canvas-into-file-to-be-uploaded

