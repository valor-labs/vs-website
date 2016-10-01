import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

const html = ``;

describe('vs', () => {
  let fixture:ComponentFixture<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    });
    TestBed.overrideComponent(TestComponent, {set: {template: html}});
    fixture = TestBed.createComponent(TestComponent);
  });

  it('fixture should not be null', () => {
    expect(fixture).not.toBeNull();
  });
});

@Component({
  selector: 'test',
  template: ''
})

class TestComponent {
}
