import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() stars:number=5;
  @Input() value:number=0;
  @Input() starWidth:number=25;
  @Output() changed = new EventEmitter<number>();
  public states: any[] =new Array(this.stars).fill({});
  constructor() {
  }

  ngOnInit(): void {
    this.states=new Array(this.stars).fill({});
  }
  setValue(rate:number){
    this.value=rate;
    for(let i=0;i<this.stars;i++){
      this.states[i]={hover:false, select: i<this.value };
    }
  }
  changeHandler(rate:number){
    this.setValue(rate);
    this.changed.emit(rate);
  }
  handleHover(rate:number){
    for(let i=0;i<this.stars;i++){
      let state=i<=rate;
      if (this.states[i].hover!==state) this.states[i]={hover:state,select:this.states[i].select};
    }

  }
  handleLeave(){
    this.setValue(this.value);
  }

}
