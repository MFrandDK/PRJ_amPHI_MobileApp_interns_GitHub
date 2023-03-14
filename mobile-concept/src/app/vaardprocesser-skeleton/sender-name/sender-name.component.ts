import { Component, OnInit } from '@angular/core';
import { ISenders } from '../../isenders';
import { SENDERS } from '../../mock-senders';
@Component({
  selector: 'app-sender-name',
  templateUrl: './sender-name.component.html',
  styleUrls: ['./sender-name.component.css']
})
export class SenderNameComponent implements OnInit {
  constructor() {}
// sender: Senders[] = [];
senders = SENDERS;
// getSenders(): void {
// this.senderService.getSenders()
// .subscribe(senders => this.sender = senders);
// }
ngOnInit(): void {
  // this.getSenders();
}
}
