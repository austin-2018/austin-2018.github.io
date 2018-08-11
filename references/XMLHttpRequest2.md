#####  https://permadi.com/2010/10/html5-saving-canvas-image-data-using-php-and-ajax/

#### EXCERPT 1

```Content-Type should NOT be set to application/x-www-form-urlencoded but something unknown because basically we want the browser to send the data in its raw state.```

        var canvasData = testCanvas.toDataURL("image/png");
        var ajax = new XMLHttpRequest();
        ajax.open("POST",'testSave.php',false);
        ajax.setRequestHeader('Content-Type', 'application/upload');
        ajax.send(canvasData );
        
        
