import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Amigos', url: '/folder/Amigos', icon: 'people' },
    { title: 'Viagens', url: '/folder/Viagens', icon: 'bus' },
    //{ title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
