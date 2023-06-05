import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


fdescribe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

beforeEach(fakeAsync(()=>{
  TestBed.configureTestingModule({
    declarations:[PaginationComponent],
    imports:  [
      CommonModule,
    ],
  })
  .compileComponents();
}));
beforeEach(()=>{
  fixture = TestBed.createComponent(PaginationComponent);
  component = fixture.componentInstance;
  component.pages=5
  component.currentIndex=2;

});
it('should create', () => {
  expect(component).toBeTruthy();
});
it('CheckPages check whether pages value is what given',()=>{
  expect(component.pages).toBe(5);
})  
it('Generate indexs based on pages',()=>{
  component.checkForPages()
 expect(component.indexs).toEqual(['1', '2', '3',  '...', '5'])
})
it('Check if pagination index button is working',()=>{
  fixture.detectChanges()
  spyOn(component,'onTapIndex')
let selectedIndexHtml= fixture.debugElement.query(By.css('.current-index p'))
expect(selectedIndexHtml.nativeElement.innerHTML).toBe('2')
let indexHtml =fixture.debugElement.queryAll(By.css ('.index'))
indexHtml[0].triggerEventHandler('click',)
fixture.detectChanges()
expect(component.onTapIndex).toHaveBeenCalledWith('1')
});
it('Check if pagination next button is working',()=>{
fixture.detectChanges()
spyOn(component ,'onTapNext')
let prevHtml = fixture.debugElement.queryAll(By.css('.nxt-prev-icon'))
prevHtml[1].triggerEventHandler('click',)
fixture.detectChanges()
expect(component.onTapNext).toHaveBeenCalledWith(component.currentIndex)
})
it('Check if pagination prev button is working',()=>{
  fixture.detectChanges()
  spyOn(component ,'onTapPrev')
  let prevHtml = fixture.debugElement.queryAll(By.css('.nxt-prev-icon'))
  prevHtml[0].triggerEventHandler('click',)
  fixture.detectChanges()
  expect(component.onTapPrev).toHaveBeenCalledWith(component.currentIndex)
  })
});
