import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'anthonykuong-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  @Input() items;


  constructor() { }

  ngOnInit(): void {
  }

}
