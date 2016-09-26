import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var io;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    socket: any;
    chat_input: string;
    chats: any;
    user: string;
    data: any;
    id: number;

    constructor(public navCtrl: NavController, params: NavParams) {

        this.user = params.get("user");
        this.id = new Date().getMilliseconds();
        this.chats = [];
        this.chat_input ='';
        this.socket = io.connect('http://localhost:3000');
        //this.socket = io.connect('http://iosocketserver-diegolayout.rhcloud.com:8000');
        this.socket.on('data', (data) => {
            this.chats.push(data);
        });
    }

    send(msg) {
        if(msg != ''){
            this.data = {
                id: this.id,
                user: this.user,
                message: msg
            }
            this.socket.emit('data', this.data);
        }
        this.chat_input = '';
    }
}
