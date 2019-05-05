import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ModalMediaService } from '../modal-media.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-media-library',
  templateUrl: './modal-media-library.component.html',
  styleUrls: ['./modal-media-library.component.scss']
})
export class ModalMediaLibraryComponent implements OnInit, OnChanges {
  @Input('imageFromUpLoad') mImageFromUpLoad: any;
  mImages: Array<any> = [];
  searchQuery:string = '';
  searchQuery$:Subject<string> = new Subject();
  isLoading: boolean;
  activeImage: any;
  activeSourceUrl: string = '';
  constructor(private modalMediaService: ModalMediaService) { }
  ngOnChanges() {
    if (this.mImageFromUpLoad) {
      this.activeImage = this.mImageFromUpLoad;
      this.activeSourceUrl = this.mImageFromUpLoad.source_url;
    }
  }
  ngOnInit() {
    this.onModalStateChange();
    this.onSearch();
    this.doSearch();
  }
  onSelectImage(img) {
    this.activeSourceUrl = img.source_url;
    this.activeImage = img;
  }
  onModalStateChange() {
    this.modalMediaService.onStateChange().subscribe((state) => {
      if (state) {
        this.searchQuery = '';
        this.doSearch();
      };
    })
  }
  doSearch(){
    this.mImages = [];
    this.isLoading = true;
    this.modalMediaService.doSearch(this.searchQuery);
  }
  onSearch(){
    this.modalMediaService.searchMeidaImages().subscribe((res)=>{
      this.mImages = this.mImages.concat(res);
      this.isLoading = false;
    })
  }
}
