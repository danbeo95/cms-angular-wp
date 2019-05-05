import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ModalMediaService } from '../../../../core/components/modal-media/modal-media.service';

@Component({
  selector: 'app-post-options-image-feature',
  templateUrl: './post-options-image-feature.component.html',
  styleUrls: ['./post-options-image-feature.component.scss']
})
export class PostOptionsImageFeatureComponent implements OnInit {
  mImage:any;
  @Output('onChange') onChange:EventEmitter<number> = new EventEmitter();
  constructor(private modalMediaService:ModalMediaService) { }

  ngOnInit() {
    this.onSubscribeMedia();
  }
  onClickAddImage(){
    this.modalMediaService.showModal();
  }
  onSubscribeMedia(){
    this.modalMediaService.subscribeMedia().subscribe((media)=>{
      this.mImage = media;
      this.onChange.emit(media.id);
    })
  }
}
