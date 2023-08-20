import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposModalComponent } from './repos-modal.component';

describe('ReposModalComponent', () => {
  let component: ReposModalComponent;
  let fixture: ComponentFixture<ReposModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposModalComponent]
    });
    fixture = TestBed.createComponent(ReposModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
