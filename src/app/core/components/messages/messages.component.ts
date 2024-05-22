import { MessagesService } from '../../services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {}
}
