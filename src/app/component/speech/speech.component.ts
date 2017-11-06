import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';

interface RecognitionWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class SpeechRecognitionService {

    constructor(private zone: NgZone) {
    }

    record(language: string): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: RecognitionWindow = <RecognitionWindow> window;
            const recognition =  new webkitSpeechRecognition();
            recognition.continious = true;
            recognition.interimResults = true;

            recognition.onresult = e => this.zone.run(
                () => observer.next(
                    e.results.item( e.results.length - 1)
                        .item(0).transcript
                )
            );

            recognition.onerror = e => observer.error(e);
            recognition.onend = () => observer.complete();
            recognition.lang = language;
            recognition.start();
        });
    }

}

interface SysthesisWindow extends Window {
    speechSynthesisUtterance: any;
    speechSynthesis: any;
}

@Injectable()
export class SpeechSynthesisService {
    constructor(private zone: NgZone){
    }

    checkVoices(): SpeechSynthesisVoice[]{
        const {speechSynthesisUtterance}: SysthesisWindow = <SysthesisWindow>window;
        const {speechSynthesis}: SysthesisWindow = <SysthesisWindow> window;
        var speech = new SpeechSynthesis();

        return window.speechSynthesis.getVoices();
    }

    speak(language: string, input: string){
        if ('speechSynthesis' in window) {
           console.log('Your browser supports speech synthesis.');
        // speak('hi');
        } else {
            alert('Sorry your browser does not support speech synthesis. Try this in <a href="https://www.google.com/chrome/browser/desktop/index.html">Google Chrome</a>.');
        }

        const {speechSynthesisUtterance}: SysthesisWindow = <SysthesisWindow>window;
        const {speechSynthesis}: SysthesisWindow = <SysthesisWindow> window;

        // Create a new instance of SpeechSynthesisUtterance.
        var msg = new SpeechSynthesisUtterance();
        // Set the text.
        msg.text = input;
        // Set the attributes.
        msg.lang = language; //'en-US'
        // msg.voice = 'native'; msg.voice = 'Google US English'; //  'Google UK English Female' 
        // var utterance = new SpeechSynthesisUtterance('Hello Treehouse');
        var voices = window.speechSynthesis.getVoices();
        
        msg.voice = voices.filter(function(voice) { return voice.name == 'Alex'; })[0];
        
        // window.speechSynthesis(utterance);
        msg.volume = 1;
        msg.rate = 1;
        msg.pitch = 1;
        //  msg.onend = function(event) { console.log('Speech complete'); }
        // Queue this utterance.
        // var talk = new SpeechSynthesis();
        // talk.speak(msg);
        window.speechSynthesis.speak(msg);
    }
}
