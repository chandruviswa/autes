import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from 'src/app/app.component';
import { AddcustomerComponent } from 'src/app/addcustomer/addcustomer.component';
import { AddcontactpersonComponent } from 'src/app/addcontactperson/addcontactperson.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'customer', component: AppComponent,
        children: [{ path: '', component: AddcontactpersonComponent }]
    }, {
      path: 'system', component: AppComponent,
      children: [{ path: '', component: AddcustomerComponent }]
  }, {
    path: 'manufacturer', component: AppComponent,
    children: [{ path: '', component: AddcontactpersonComponent }]
},
    {
      path: 'add', component: AppComponent,
      children: [{ path: '', component: AddcontactpersonComponent }]
    },
    {
      path: 'addcus/:term', component: AppComponent,
      children: [{ path: '', component: AddcustomerComponent }]
    },
  {
    path: 'login', component: AppComponent,
    children: [{ path: '', component: HomeComponent }]
},
    { path : '', redirectTo: '/login', pathMatch : 'full'}

];
