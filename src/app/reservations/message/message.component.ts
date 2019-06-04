import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendMessage(formData) {
    alert('Thank you, your opinion is highly valued :/');

  }
}
