import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjecsComponent } from './home-projecs.component';

describe('HomeProjecsComponent', () => {
  let component: HomeProjecsComponent;
  let fixture: ComponentFixture<HomeProjecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProjecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProjecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
