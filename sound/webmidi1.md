#### https://www.smashingmagazine.com/2018/03/web-midi-api/

### STUDY NOTES AND EXCERPTS
First, there’s the navigator.requestMIDIAccess() method. It does exactly what it sounds like—it will request access to any MIDI devices (inputs or outputs) connected to your computer. You can confirm the browser supports the API by checking for the existence of this method.
        if (navigator.requestMIDIAccess) {
            console.log('This browser supports WebMIDI!');
        } else {
            console.log('WebMIDI is not supported in this browser.');
        }


