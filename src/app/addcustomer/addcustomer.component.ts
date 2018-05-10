import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MysqlService } from '../service/mysql.service';
import { FormsModule } from '@angular/forms';
export interface Type {
  id: number;
  text: string;
  text1: string;
}
export interface Email {
  id: number;
  text: string;
}
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  phone: string [];
  ph1:string;
    public pages: Type[] = [
      {id: 1, text: 'ph1', text1: 'h1'}
  ];

  public email: Email[] = [
    {id: 1, text: 'e1'}
];
  lead = { uid: '', type: '',fname: '', lname: '', designation: '',fax:'',ph1: '',ph2:'',ph3:'',ph4:'',e1:'',e2:'',e3:'',estdate:'',eeddate:'',h1:'',h2:'',h3:'',h4:''};


    constructor( private route: ActivatedRoute,private _mysqlService: MysqlService,private router: Router) {

      this.route.params.subscribe( params => 
      //  console.log(params)
     {
      this.lead.uid = params['term'];
     
      }
      );
    
    }
     // tslint:disable-next-line:no-trailing-whitespace

    ngOnInit() {
    }

    add(val) {
      if(this.pages.length< 4){
        val = this.pages.length + 1;
        // tslint:disable-next-line:prefer-const
        let date = {  id: val, text: 'ph' + val, text1: 'h' + val };
    this.pages.push(date);
      }else{
        alert("Phone Number maximum limits reached");
      }
    
    }


    addemail(val){
      if(this.email.length< 3){
        val = this.email.length + 1;
        // tslint:disable-next-line:prefer-const
        let date = {  id: val, text: 'e' + val };
    this.email.push(date);
      }else{
        alert("Email maximum limits reached");
      }
    }


    

    addcontact() {

      
    console.log(this.lead);
      this._mysqlService.addcontact(this.lead).then((result) => {
        console.log(result);
        if(result["success"]== 1){
          alert(result["message"]);
          this.router.navigate(['login']); 
        }else{  
          alert(result["message"]);      
        }
      }, (err) => {
        alert(err.state)
      });
    }
}
