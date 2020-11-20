import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCollaboratorsComponent } from './tab-collaborators.component';

describe('TabCollaboratorsComponent', () => {
  let component: TabCollaboratorsComponent;
  let fixture: ComponentFixture<TabCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCollaboratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
