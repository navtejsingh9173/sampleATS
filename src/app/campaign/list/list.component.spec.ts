import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignHomeListComponent } from './list.component';

describe('CampaignHomeListComponent', () => {
  let component: CampaignHomeListComponent;
  let fixture: ComponentFixture<CampaignHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
