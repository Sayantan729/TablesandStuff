import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  _data;

  constructor(private fetchData: FetchDataService) {
    
  }

  deleteData(index) {
    this._data.splice(index, 1);
  }

  editData(obj: { index: number; data: {} }) {
    this._data.splice(obj.index, 1, obj.data);
  }

  ngOnInit(): void {this._data = this.fetchData.data;}
}
