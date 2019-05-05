import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagService } from '../../tag.service';
import { Tag } from 'src/app/home/data.model/tag';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
export class TagModel {
  display: string;
  value: string;
  readonly?: boolean;
  constructor(data) {
    this.display = data.display;
    this.value = data.value;
  }
}
@Component({
  selector: 'app-post-options-tags',
  templateUrl: './post-options-tags.component.html',
  styleUrls: ['./post-options-tags.component.scss']
})
export class PostOptionsTagsComponent implements OnInit {
  @Output('onChange') onChange: EventEmitter<Array<number>> = new EventEmitter();
  items: Array<TagModel> = [];
  autocompleteItems: Array<TagModel> = [];
  autocompleteObservable$: Observable<TagModel>;
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.onChange.emit([]);
  }
  onTagsChanges() {

  }
  onTextChange(event) {
   this.doSearchTags(event);
  }
  doSearchTags(searchQuery: string){
     this.tagService.searchTags(searchQuery).pipe(map(tags => {
      return tags.map(tag => {
        return this.convertTagsToAutoComplete(tag);
      })
    })).subscribe((res)=>{
      this.autocompleteItems = [];
      this.autocompleteItems = this.autocompleteItems.concat(res);
    })
  }
  onItemAdded($event){
    this.onChange.emit(this.doFilterDataEmit());
  }
  onItemRemoved(event){
    this.onChange.emit(this.doFilterDataEmit());
  }
  private doFilterDataEmit():Array<any>{
    return this.items.map(item=>{
      return +item.value;
    })
  }
  private convertTagsToAutoComplete(tag: Tag): TagModel {
    let display: string = tag.name;
    let value: string = tag.id.toString();
    let tagAutoComplete: TagModel = new TagModel({
      display: display,
      value: value
    });
    return tagAutoComplete;
  }
}
