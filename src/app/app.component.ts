import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hello World!';
  intervalSub;
  showText = false;

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log("Hello from ngOnInit");
    }, 1000);
  };

  ngOnDestroy() {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  };

  getMin(a,b) {
    if(a < b) {
      return a;
    }

    return b;
  }

  toggleText(event) : void {
    this.showText = !this.showText;
    console.log(event);
  }
}
