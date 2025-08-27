import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcsComponent } from './produtcs.component';

describe('ProdutcsComponent', () => {
  let component: ProdutcsComponent;
  let fixture: ComponentFixture<ProdutcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
