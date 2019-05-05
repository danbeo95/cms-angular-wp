import { Component, OnInit } from '@angular/core';
import { ModalMediaService } from './modal-media.service';
declare var jQuery: any;

@Component({
  selector: 'app-modal-media',
  templateUrl: './modal-media.component.html',
  styleUrls: ['./modal-media.component.scss']
})
export class ModalMediaComponent implements OnInit {

  constructor(private modalMediaService:ModalMediaService) { }
  tabSelected:number = 2;
  mImageFromUpLoad:any;
  ngOnInit() {
    this.onStateChange();
  }

  onStateChange(){
    this.modalMediaService.onStateChange().subscribe((state)=>{
      if(state){
        this.showModal();
      }
      else{
        this.hideModal();
      }
    })
  }
  onSelectTab(tabIndex:number){
    this.tabSelected = tabIndex;
  }
  onClickApply(){
    this.modalMediaService.doApply();
  }
  onUpLoadChange(event){
    this.mImageFromUpLoad = event;
    this.tabSelected = 2;
  }

  showModal() {
    jQuery('#media-modal').modal('show');
  }
  hideModal() {
    jQuery('#media-modal').modal('hide');
  }

}
