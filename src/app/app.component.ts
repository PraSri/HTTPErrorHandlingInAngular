import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'my-app';
}
