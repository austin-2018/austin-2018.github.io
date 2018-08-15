1. Investigate XmlHttpRequest as it applies to project (for context, see excerpts 1 and 3)
1. Investigate significance of document.getElementsByName("myHiddenField")[0].setAttribute("value", imageData); in alleviating browser error response of URL too long in form field (for context, see excerpt 2)

##### Input type=“file” set base64 image data
##### https://stackoverflow.com/questions/33297858/input-type-file-set-base64-image-data

##### EXCERPT 1


I have a canvas and retrieve image data from it with help of canvas.toDataURL('image/png').

Problem: <input type="file" /> wants filepath as value instead of base64 data.

Question: How to send base64 image data to server with help of <input type="file" /> WITHOUT saving them to local file system?

My workarounds: Tried hidden input <input type="file" />, but server requires filename property

Maybe that's possible to overcome this with XmlHttpRequest?


##### EXCERPT 2

Just create a hidden input element in your form. (notice the type)

        <input type="hidden" name="myHiddenField"> 
Attach your data to the value of the element before submitting.

        var imageData = canvas.toDataURL('image/png');
        document.getElementsByName("myHiddenField")[0].setAttribute("value", imageData);

##### EXCERPT 3

UPDATE

If your server demands to have the parameter "filename" in the submitted data, then include that string as the name of the input element.

        <input type="hidden" name="filename"/>
This will trick the form to submit your data with the "filename" parameter included in it.

If you want to use XMLHttpRequest for this, following is a sample:

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
