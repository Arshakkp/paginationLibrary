import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
// Pagination componet is used to pagination effect to your view it 
// Require no pages and current index as input 
// Emits pagination index as output
@Component({
  selector: 'lib-pagination',
  templateUrl:"./view/pagination.component.html",
  styleUrls:["./view/pagination.component.scss"]
})

export class PaginationComponent implements OnInit,OnChanges {

  @Input() pages:number=0 ; 
  @Input() currentIndex:number=1;
  @Output() selectedIndex =new EventEmitter<number>();
  error:boolean=true;
  indexs:string[]=[];
  constructor() { }
  ngOnInit(): void {
    this.checkForPages()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.generateIndexs();
  }
  //To generate indexs based on pages
  generateIndexs(){
    this.indexs=[];
  for (let i = 1;i<=this.pages ;i++){
  if(i<=2||i===this.currentIndex-1||i===this.currentIndex||i===this.currentIndex+1||i===this.pages){
    this.indexs.push(i.toString());
  }
 else if(i===3&&i!=this.currentIndex&&this.currentIndex||i===this.currentIndex+2){
    this.indexs.push("...");
  }
  }
  }
  
  checkForCurrentIndex(){
    if(this.currentIndex>this.pages){
      this.currentIndex=this.pages
    }
  }
  checkForPages(){
    if(this.pages===0){
      throw console.error("Pages Must be  Specified And Greater Than Zero");
    }
    else{
      this.error=false;
      this.generateIndexs()
    }
  }
 onTapIndex(indexAsString:string){
  if(indexAsString!=="..."){
    this.selectedIndex.emit(Number(indexAsString))
    }
  }
  onTapNext(index:number){
   
    if(index<this.pages){
      this.selectedIndex.emit(index+1)
      }
  }
  onTapPrev(index:number){
    if(index>1){
      this.selectedIndex.emit(index-1)
      }
  }

  }
  
