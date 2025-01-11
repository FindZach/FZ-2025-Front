import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactZachComponent } from './contact-zach.component';

describe('ContactZachComponent', () => {
  let component: ContactZachComponent;
  let fixture: ComponentFixture<ContactZachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactZachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactZachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
