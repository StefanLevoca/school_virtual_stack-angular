import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectorEditComponent } from './projector-edit.component';

describe('ProjectorEditComponent', () => {
  let component: ProjectorEditComponent;
  let fixture: ComponentFixture<ProjectorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
