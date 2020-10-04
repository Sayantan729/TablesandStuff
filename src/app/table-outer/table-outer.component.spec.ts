import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOuterComponent } from './table-outer.component';

describe('TableOuterComponent', () => {
  let component: TableOuterComponent;
  let fixture: ComponentFixture<TableOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOuterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
