##### https://stackoverflow.com/questions/33297858/input-type-file-set-base64-image-data

#### EXCERPT 1

        //Prepare data to be sent
        var imageData = canvas.toDataURL('image/png');
        var params = "filename=" + imageData;

        //Initiate the request
        var httpRequest = new XMLHttpRequest();            
        httpRequest.open('POST', 'test.php', true);

        //Send proper headers
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpRequest.setRequestHeader("Content-length", params.length);
        httpRequest.setRequestHeader("Connection", "close");

        //Send your data
        httpRequest.send(params);
