import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZHeaderComponent } from './z-header.component';

describe('ZHeaderComponent', () => {
  let component: ZHeaderComponent;
  let fixture: ComponentFixture<ZHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
