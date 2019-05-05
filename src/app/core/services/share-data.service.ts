import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  mPostIdsDeletes:Subject<Array<number>> = new Subject();
  mPostDeleted:Subject<Array<any>> = new Subject();

  constructor() {


   }
   sharePostDeleted(posts:Array<any>){
    this.mPostDeleted.next(posts);
   }
   getSharePostDeleted(){
    return this.mPostDeleted;
  }
   sharePostIdsDelete(postIds:Array<number>){
     this.mPostIdsDeletes.next(postIds);
   }
   getSharePostIdsDelete(){
     return this.mPostIdsDeletes;
   }
}
