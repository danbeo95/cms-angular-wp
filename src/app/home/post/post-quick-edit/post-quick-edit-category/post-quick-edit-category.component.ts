import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Category } from 'src/app/home/data.model/category';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Post } from '../../../../home/data.model/post';
@Component({
  selector: 'app-post-quick-edit-category',
  templateUrl: './post-quick-edit-category.component.html',
  styleUrls: ['./post-quick-edit-category.component.scss']
})
export class PostQuickEditCategoryComponent implements OnInit {
  mCategoriesList: Array<Category> = [];
  mCategoriesChecked: Array<number> = [];
  @Input('post') mPost: Post;
  @Output('onChange') onChange: EventEmitter<Array<number>> = new EventEmitter();
  mFormGroup: FormGroup;
  constructor(private categoryService: CategoryService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.onLoadData();
  }
  onLoadData() {
    this.categoryService.getCategoriesList().subscribe((res) => {
      this.mCategoriesList = this.mCategoriesList.concat(res);
      this.createForm();
    });
  }
  initForm() {
    this.mFormGroup = this.fb.group({
      categories: this.fb.array([])
    })
  }
  get formCategories(): FormArray {
    return this.mFormGroup.get('categories') as FormArray;
  }
  createForm() {
    this.mCategoriesList.map((cate, i) => {
      this.formCategories.push(new FormControl(false));
    });
    this.doCheckedForm();
  }
  doCheckedForm() {
    this.mPost.categories.map((cateId, i) => {
      this.mCategoriesList.map((cate, i) => {
        if (cateId === cate.id) {
          this.formCategories.get(i.toString()).setValue(true);
        }
      })
    })
  };
  onCheckForm() {
    this.doCheckForm();
    this.onChange.emit(this.mCategoriesChecked);
  }
  doCheckForm() {
    this.mCategoriesChecked = [];
    this.mCategoriesList.map((cate, i) => {
      if (this.formCategories.get(i.toString()).value) {
        this.mCategoriesChecked.push(cate.id);
      }
    })
  }
}
