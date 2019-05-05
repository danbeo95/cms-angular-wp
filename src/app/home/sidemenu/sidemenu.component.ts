import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  pages:Array<{name:string,link:any,children:Array<any>}>
  constructor(private router:Router,private activedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.initPage();
  }
  initPage(){
    this.pages = [
      {name:'Posts',link:'post',children:[
        {name:'All Post',link:'./post/list'},
        {name:'Add New',link:'./post/add-new'},
        {name:'Tags',link:'./tags'}
      ]},
      {name:'Medias',link:'media',children:[
        {name:'Library',link:'./media/library'},
        {name:'Add New',link:'./media/add-new'},
      ]}
    ]
  }
  goToPage(link:string){
    this.router.navigate([link],{relativeTo:this.activedRoute});
  }
}
