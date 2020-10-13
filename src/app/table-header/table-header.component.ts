import { Component, Input, OnInit } from '@angular/core';

import { Employee } from './../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css'],
})
export class TableHeaderComponent implements OnInit {
  @Input('dataHeader') dataHeader;
  data;

  constructor() {}

  ngOnInit(): void {
    this.data = Object.keys(new Employee());
    
    
    
    
    
    
    
    
    
  }
}
