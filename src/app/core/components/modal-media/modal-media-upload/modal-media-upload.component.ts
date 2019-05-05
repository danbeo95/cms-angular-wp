import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ModalMediaService } from '../modal-media.service';

@Component({
  selector: 'app-modal-media-upload',
  templateUrl: './modal-media-upload.component.html',
  styleUrls: ['./modal-media-upload.component.scss']
})
export class ModalMediaUploadComponent implements OnInit {
  mFile:any;
  isLoading:boolean;
  @Output('onChange') onChange:EventEmitter<any> = new EventEmitter();
  constructor(private modalMediaService:ModalMediaService) { }

  ngOnInit() {
  }
  onClickUpload(){
    this.isLoading = true;
    this.modalMediaService.createMedia(this.mFile).subscribe((res)=>{
      this.onChange.emit(res);
      this.isLoading = false;
    })
  }
}
