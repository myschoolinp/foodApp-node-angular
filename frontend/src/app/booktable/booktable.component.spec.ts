/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BooktableComponent } from './booktable.component';

describe('BooktableComponent', () => {
  let component: BooktableComponent;
  let fixture: ComponentFixture<BooktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
