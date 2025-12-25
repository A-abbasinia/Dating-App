import {Component, inject, OnInit, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Nav} from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav,],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  http= inject(HttpClient);
  protected readonly title = signal('DatingApp');
  users : any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response  => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed"),
    })
  }

}
