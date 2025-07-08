import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foo } from './foo';

describe('Foo', () => {
  let component: Foo;
  let fixture: ComponentFixture<Foo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Foo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
