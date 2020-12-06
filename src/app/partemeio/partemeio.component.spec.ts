import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartemeioComponent } from './partemeio.component';

describe('PartemeioComponent', () => {
  let component: PartemeioComponent;
  let fixture: ComponentFixture<PartemeioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartemeioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartemeioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
