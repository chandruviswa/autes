import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../service/mysql.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})





export class HomeComponent implements OnInit {
  postList: any ;
  testflag = false;
  displayedColumns = ['firstName', 'lastName', 'email'];
 
  constructor(private _mysqlService: MysqlService,private router: Router) { }

  ngOnInit() {
   this.getUsersMysql();
  }
  private getUsersMysql() {
    this._mysqlService.getVehicle()
    .then(data => {
     this.postList = data;
      console.log(this.postList);
    });

      console.error(this.postList);
  }
  onSearch(term:string) {
    this.router.navigate(['addcus', term]); 
  }

  more(val) {

    if(this.testflag == true){
      this.testflag = false; 
    }else{
      this.testflag = true; 
    }
   
    // for(let yu = 0;this.postList.length;yu++){
    //   if(val ==   this.postList["uid"]){
    //     console.log(this.postList["contact"]);

    //   }
    

    // }

    

  }


}

