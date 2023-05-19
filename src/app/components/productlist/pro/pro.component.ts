import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent {

  @Output() veriyazdir = new EventEmitter<void>();


  sendData(){
    this.veriyazdir.emit();
  }
}
