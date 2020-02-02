import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSiderComponent } from './layout-sider.component';

describe('LayoutSiderComponent', () => {
  let component: LayoutSiderComponent;
  let fixture: ComponentFixture<LayoutSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
