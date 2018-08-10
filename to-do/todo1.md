##### Input type=“file” set base64 image data
##### https://stackoverflow.com/questions/33297858/input-type-file-set-base64-image-data

##### EXCERPT


I have a canvas and retrieve image data from it with help of canvas.toDataURL('image/png').

Problem: <input type="file" /> wants filepath as value instead of base64 data.

Question: How to send base64 image data to server with help of <input type="file" /> WITHOUT saving them to local file system?

My workarounds: Tried hidden input <input type="file" />, but server requires filename property

Maybe that's possible to overcome this with XmlHttpRequest?
