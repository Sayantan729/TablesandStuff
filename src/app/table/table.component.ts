import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  _data;

  constructor(fetchData: FetchDataService) {
    this._data = fetchData.data;
  }

  deleteData(index) {
    this._data.splice(index, 1);
  }

  ngOnInit(): void {}
}
