import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignHomeComponent } from './home.component';

describe('CampaignHomeComponent', () => {
  let component: CampaignHomeComponent;
  let fixture: ComponentFixture<CampaignHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
