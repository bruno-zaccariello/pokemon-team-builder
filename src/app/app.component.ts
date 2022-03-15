import {AfterViewInit, Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'pk-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    title = 'NoSniffOptionTest';

    constructor(private http: HttpClient) {

    }

    ngAfterViewInit() {
        const options = {
            observe: 'response' as 'body',
            headers: new HttpHeaders({
                Authorization: 'Bearer AwdasdsadSomeToken',
                'Content-Type': 'application/json',
                Accept: 'application/json,application/vnd.error+json'
            })
        };

        console.log('Starting http xhr request');
        this.http.get('http://127.0.0.1:8009/data', options).subscribe((data) => {
            console.log('Got data ', data);
        });
    }
}
