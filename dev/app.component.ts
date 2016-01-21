import {Component} from 'angular2/core';

@Component({
    selector: 'thing',
    templateUrl: 'dev/app.html',
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public contact = {firstName: "Justin", lastName: "Thielke", phone: "303 582 4807", email: "jethielke@gmail.com"};
    public showDetail = false;

    onSelect() {
        if(this.showDetail){
            this.showDetail = false;
        }
        else {
            this.showDetail = true;
        }
    }
}