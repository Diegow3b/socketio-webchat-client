import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    socket: any;
    chat_input: string;
    chats: any;
    zone: any;
    user: string;

    constructor(public navCtrl: NavController, params: NavParams) {

        this.user = params.get("user");
        this.chats = [];
        this.chat_input ='';
        this.socket = io('http://localhost:3000');
        this.socket.on('message', (msg) => {
            this.chats.push(msg);
        });
    }

    send(msg) {
        if(msg != ''){
            this.socket.emit('message', msg);
        }
        this.chat_input = '';
    }
}