import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalConfig$:Subject<{title:string,message:string,callback:any}> = new Subject();
  modalState$:Subject<boolean> = new Subject();
  constructor() {

  }
  createModal(data:{title:string,message:string,callback:any}){
    this.modalConfig$.next(data);
  }
  showModal(){
    this.modalState$.next(true);
  }
  hideModal(){
    this.modalState$.next(false);
  }

  getModalConfig(){
    return this.modalConfig$;
  }
  getModalState(){
    return this.modalState$;
  }
  
}
