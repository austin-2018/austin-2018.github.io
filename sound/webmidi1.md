#### https://www.smashingmagazine.com/2018/03/web-midi-api/

### STUDY NOTES AND EXCERPTS
#### First, there’s the navigator.requestMIDIAccess() method. It does exactly what it sounds like—it will request access to any MIDI devices (inputs or outputs) connected to your computer. You can confirm the browser supports the API by checking for the existence of this method.


                                if (navigator.requestMIDIAccess) {
                                    console.log('This browser supports WebMIDI!');
                                } else {
                                    console.log('WebMIDI is not supported in this browser.');
                                }


#### Second, there’s the MIDIAccess object which contains references to all available inputs (such as piano keyboards) and outputs (such as synthesizers). The requestMIDIAccess() method returns a promise, so we need to establish success and failure callbacks. And if the browser is successful in connecting to your MIDI devices, it will return a MIDIAccess object as an argument to the success callback.

                                navigator.requestMIDIAccess()
                                    .then(onMIDISuccess, onMIDIFailure);

                                function onMIDISuccess(midiAccess) {
                                    console.log(midiAccess);

                                    var inputs = midiAccess.inputs;
                                    var outputs = midiAccess.outputs;
                                }

                                function onMIDIFailure() {
                                    console.log('Could not access your MIDI devices.');
                                }
