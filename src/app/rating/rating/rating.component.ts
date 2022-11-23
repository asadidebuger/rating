import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() stars:number=5;
  @Input() rate:number=0;
  @Input() starWidth:number=25;
  @Output() rateChange = new EventEmitter<number>();
  public states: any[] =[]
  constructor() {
  }
  ngOnInit(): void {
    this.setRate(this.rate);
  }
  setRate(rate:number){
    this.rate=rate;
    for(let i=0;i<this.stars;i++){
      this.states[i]={hover:false, select: i<this.rate };
    }
  }
  changeHandler(rate:number){
    this.setRate(rate);
    this.rateChange.emit(rate);
  }
  handleHover(rate:number){
    for(let i=0;i<this.stars;i++){
      let state=i<=rate;
      if (this.states[i].hover!==state) this.states[i]={hover:state,select:this.states[i].select};
    }

  }
  handleLeave(){
    this.setRate(this.rate);
  }

}
