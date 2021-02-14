import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardContentComponent } from './wildcard-content.component';

describe('WildcardContentComponent', () => {
  let component: WildcardContentComponent;
  let fixture: ComponentFixture<WildcardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
