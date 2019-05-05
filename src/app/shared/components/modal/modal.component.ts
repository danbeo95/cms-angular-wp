import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-1',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @ViewChild('template') mTemplate: TemplateRef<any>;
  config:{title:string,message:string,callback:any};
  modalRef: BsModalRef;
  constructor(private modalBsService: BsModalService, private modalService: ModalService) {

  }
  ngOnInit() {
    this.onCreateModal();
    this.onStateModalChange();
  }
  onStateModalChange(){
    this.modalService.getModalState().subscribe((isShow)=>{
      if(isShow){
        this.openModal();
      }
    })
  }
  onCreateModal(){
    this.modalService.getModalConfig().subscribe((config)=>{
      this.config = config;
    })
  }
  onClickOk(){
    this.modalRef.hide();
    this.config.callback(1)
  }
  onClickCancel(){
    this.modalRef.hide();
    this.config.callback(0)
  }
  private openModal() {
    this.modalRef = this.modalBsService.show(this.mTemplate);

  }
}