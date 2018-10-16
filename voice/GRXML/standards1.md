#### https://www.w3.org/TR/speech-grammar/
### Speech Recognition Grammar Specification Version 1.0 W3C Recommendation 16 March 2004
### EXCERPT 1 as of October 2018

##### 1.1 Grammar Processors and User Agents
A grammar processor is any entity that accepts as input grammars as described in this specification.

##### A user agent is a grammar processor that accepts user input and matches that input against a grammar to produce a recognition result that represents the detected input.

##### As the specification title implies, speech recognizers are an important class of grammar processor. Another class of grammar processor anticipated by this specification is a Dual-Tone Multi-Frequency (DTMF) detector. The type of input accepted by a user agent is determined by the mode or modes of grammars it can process: e.g. speech input for "voice" mode grammars and DTMF input for "dtmf" mode grammars.

##### For simplicity, throughout this document references to a speech recognizer apply to other types of grammar processor unless explicitly stated otherwise.

##### A speech recognizer is a user agent with the following inputs and outputs:

##### Input: A grammar or multiple grammars as defined by this specification. These grammars inform the recognizer of the words and patterns of words to listen for.
##### Input: An audio stream that may contain speech content that matches the grammar(s).
##### Output: Descriptions of results that indicate details about the speech content detected by the speech recognizer. The format and details of the content of the result are outside the scope of this specification. For informative purposes, most practical recognizers will include at least a transcription of any detected words.
##### Output: Error and other performance information may be provided to the host environment: e.g. to a voice browser that incorporates a grammar processor. The method of interaction with the host environment is outside the scope of this document. The specification does, however, require that a conformant grammar processor inform the environment of errors in parsing and other processing of grammar documents.
