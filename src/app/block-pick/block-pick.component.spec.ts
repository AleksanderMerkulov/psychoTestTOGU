import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPickComponent } from './block-pick.component';

describe('BlockPickComponent', () => {
  let component: BlockPickComponent;
  let fixture: ComponentFixture<BlockPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockPickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
