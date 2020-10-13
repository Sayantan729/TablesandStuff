import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from './../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css'],
})
export class TableBodyComponent implements OnInit {
  @Input('dataBody') dataBody;
  @Output('delete') delete = new EventEmitter();
  @Output('edit') edit = new EventEmitter();
  data = [];
  keysList = [];
  dataList: [];
  changeStatusList: boolean[];

  constructor() {}

  ngOnInit(): void {
    this.keysList = Object.keys(new Employee());
    console.log(this.keysList);

    this.dataList = this.dataBody.map((item) => Object.values(item));
    this.changeStatusList = this.dataBody.map((item) => false);
  }

  editData(index) {
    this.changeStatusList[index] = !this.changeStatusList[index];
    if (!this.changeStatusList[index]) {
      let obj = {};
      (this.dataList[index] as string[]).forEach((item, index) => {
        obj[this.keysList[index]] = item;
      });
      this.edit.emit({ index: index, data: obj });
    }
  }

  deleteData(index) {
    this.dataList.splice(index, 1);
    this.changeStatusList.splice(index, 1);
    this.delete.emit(index);
  }

  trackByIndex(index: any, item: any) {
    return index;
  }
}
