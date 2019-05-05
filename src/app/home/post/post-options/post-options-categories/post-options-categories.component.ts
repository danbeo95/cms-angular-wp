import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CategoryService } from '../../category.service';
import { FormControl,FormBuilder,FormGroup,FormArray } from '@angular/forms';
import { Category } from 'src/app/home/data.model/category';

@Component({
  selector: 'app-post-options-categories',
  templateUrl: './post-options-categories.component.html',
  styleUrls: ['./post-options-categories.component.scss']
})
export class PostOptionsCategoriesComponent implements OnInit {
  @Output('onChange') onChange:EventEmitter<Array<number>> = new EventEmitter();
  mFormGroup:FormGroup;
  mCategories:Array<Category> = [];
  searchModel:string = '';
  isLoading:boolean;
  constructor(private categoryService:CategoryService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.onLoadData();
    this.initForm();
  }

  initForm(){
    this.mFormGroup = this.formBuilder.group({
      categories:this.formBuilder.array([])
    })
  }
  
  onLoadData(){
    this.isLoading = true;
    this.categoryService.searchCategories().pipe().subscribe((res)=>{
      this.mCategories = [];
      this.mCategories = this.mCategories.concat(res);
      this.isLoading = false;
      this.createForm();
    });
    this.categoryService.doFilterName('');
  }
  createForm(){
    this.mCategories.map((cate)=>{
      this.formCategories.push(new FormControl());
    })
  }
  onSelectCategory(){
    let arrCategories = this.doFilterCategories();
    this.onChange.emit(arrCategories);
  }
  doFilterCategories():Array<number>{
    let arrCategories:Array<number> = [];
    this.mCategories.map((cate,i)=>{
      if(this.formCategories.get(i.toString()).value){
        arrCategories.push(this.mCategories[i].id);
      }
    });
    return arrCategories;
  }
  onSearchCategories(query:string){
    this.isLoading = true;
    this.doSearchCategories(query);
  }
  doSearchCategories(query:string){
    this.mCategories = [];
    this.categoryService.doFilterName(query);
  }
  get formCategories():FormArray{
    return this.mFormGroup.get('categories') as FormArray;
  }
}
