import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss']
})
export class BtnLoadingComponent implements OnInit {
  @Input('loading') isLoading:boolean;
  @Input('text') text:string;

  @Output('onClick') onClick:EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.onClick.emit();
  }
}
