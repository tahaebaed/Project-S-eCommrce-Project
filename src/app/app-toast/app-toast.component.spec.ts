import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToastComponent } from './app-toast.component';

describe('AppToastComponent', () => {
  let component: AppToastComponent;
  let fixture: ComponentFixture<AppToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
