import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css'],
})
export class TableBodyComponent implements OnInit {
  @Input('dataBody') dataBody;
  @Output('delete') delete = new EventEmitter();
  data=[];
  keysList=[];
  dataList:[];
  changeStatusList:boolean[];

  constructor() {}

  ngOnInit(): void {
    this.keysList = Object.keys(this.dataBody[0]);
    console.log(this.keysList);

    this.dataList = this.dataBody.map((item) => Object.values(item));
    this.changeStatusList=this.dataBody.map((item)=>false);
  }

  editData(index)
  {
    this.changeStatusList[index]=!this.changeStatusList[index];
  }

  deleteData(index) {
    this.dataList.splice(index, 1);
    this.changeStatusList.splice(index,1);
    this.delete.emit(index);
  }
}
