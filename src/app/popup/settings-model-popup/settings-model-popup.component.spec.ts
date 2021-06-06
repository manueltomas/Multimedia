import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsModelPopupComponent } from './settings-model-popup.component';

describe('SettingsModelPopupComponent', () => {
  let component: SettingsModelPopupComponent;
  let fixture: ComponentFixture<SettingsModelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsModelPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
