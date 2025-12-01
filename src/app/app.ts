import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hearder } from './include/hearder/hearder';
import { Footer } from './include/footer/footer';
import { Chatbot } from './include/chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Hearder,Footer,Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cayjaschool';
}
