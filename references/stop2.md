## References used to stop the camera

##### https://stackoverflow.com/questions/11642926/stop-close-webcam-which-is-opened-by-navigator-getusermedia/12436772

#### EXCERPT 1

````Since this answer has been originally posted the browser API has changed. .stop() is no longer available on the stream that gets passed to the callback. The developer will have to access the tracks that make up the stream (audio or video) and stop each of them individually.```

```More info here:```

##### https://developers.google.com/web/updates/2015/07/mediastream-deprecations?hl=en#stop-ended-and-active

#### EXCERPT 2

```I think stream.stop() doen't work for chrome, mediaRecorder.stop() stops the recording , whereas it doesn't stop the stream provided by browser. Can you look on to this stackoverflow.com/questions/34715357/… – Muthu Jan 11 '16 at 7:03 ```

##### https://stackoverflow.com/questions/34715357/how-to-stop-the-capturing-mediastream-that-is-started-by-chrome-tabcapture-api-i

#### EXCERPT 3
```Using .stop() on the stream works on chrome when connected via http. It does not work when using ssl (https).```
