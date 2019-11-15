import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `<p> {{title}} </p>`,
  styles: ['p {color:red; font-weight: 600}']
})

export class TwoComponent implements OnInit {
  title: string ='Danger!'
  constructor() { }

  ngOnInit() {
  }

}