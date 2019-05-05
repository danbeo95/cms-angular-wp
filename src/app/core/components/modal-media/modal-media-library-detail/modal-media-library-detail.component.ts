import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ModalMediaService } from '../modal-media.service';

@Component({
  selector: 'app-modal-media-library-detail',
  templateUrl: './modal-media-library-detail.component.html',
  styleUrls: ['./modal-media-library-detail.component.scss']
})
export class ModalMediaLibraryDetailComponent implements OnInit, OnChanges {
  @Input('image') mImage: any;
  mFormGroup: FormGroup;
  constructor(private formBuider: FormBuilder, private modalMediaService: ModalMediaService) { }
  ngOnChanges() {
    if (this.mImage) this.initForm();
  }
  ngOnInit() {
    this.onApply();
  }
  initForm() {
    this.mFormGroup = this.formBuider.group({
      link: new FormControl(this.mImage.link),
      alt_text: new FormControl(this.mImage.alt_text),
      title: new FormControl(this.mImage.title.rendered),
      caption: new FormControl(this.removeTag(this.mImage.caption.rendered)),
      description: new FormControl(this.removeTag(this.mImage.description.rendered))
    });
  }
  onApply() {
    this.modalMediaService.onApply().subscribe(() => {
      this.doUpdateMedia().subscribe((media)=>{
        this.doPublishMedia(media);
      })
    })
  }
  doUpdateMedia(){
    let mediaData = this.mFormGroup.value;
    let id = this.mImage.id;
    return this.modalMediaService.updateMedia(id,mediaData);
  }
  doPublishMedia(mediaData){
    this.modalMediaService.publishMedia(mediaData);
  }
  removeTag(element: string) {
    return element.replace(/<[^>]*>/g, '');
  };
}
