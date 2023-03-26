import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAutherComponent } from './seller-auther.component';

describe('SellerAutherComponent', () => {
  let component: SellerAutherComponent;
  let fixture: ComponentFixture<SellerAutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAutherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
