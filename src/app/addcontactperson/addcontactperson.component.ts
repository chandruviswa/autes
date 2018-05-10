import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../service/mysql.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
export interface Type {
  id: number;
  text: string;
  text1: string;
}
@Component({
  selector: 'app-addcontactperson',
  templateUrl: './addcontactperson.component.html',
  styleUrls: ['./addcontactperson.component.scss']
})
export class AddcontactpersonComponent implements OnInit {

  phone: string [];

  public pages: Type[] = [
    {id: 1, text: 'ph1', text1: 'h1'}
];
lead = { uid: '', name: '',fname: '', ftype: '', address1: '',address2: '',city:'',state:'',zipcode:'',country:'',website:'',email:'',fax:'',ph1:'',ph2:'',ph3:'',ph4:'',ph5:'',h1:'',h2:'',h3:'',h4:'',h5:''};


  constructor(private _mysqlService: MysqlService,private router: Router) {}
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

//     val = this.pages.length + 1;
//     // tslint:disable-next-line:prefer-const
//     let date = {  id: val, text: 'ph' + val, text1: 'h' + val };
// this.pages.push(date);
  }

  slice(val){
    this.pages.splice(val,1);
  }



   getCities(event: any) {

    if(event.target.value != ""){
      this._mysqlService.getCity(event.target.value)
      .then(data => {
       this.lead.state = data["stateName"];
       this.lead.country = data["countryName"];
        console.log(this.lead);
      });
    }else{
      this.lead.state = "";
      this.lead.country = "";
    }
    

    
  }

  addcustomer() {



  console.log(this.lead);

    this._mysqlService.addCustomer(this.lead).then((result) => {
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
