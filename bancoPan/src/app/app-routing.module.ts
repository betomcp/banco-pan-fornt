import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalData2Component } from './pages/personal-data2/personal-data2.component';
import { PersonalData1Component } from './pages/personal-data1/personal-data1.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { AddressComponent } from './pages/address/address.component';

const routes: Routes = [
  {path: '', component: SingInComponent, pathMatch: 'full'},
  {path: 'personaldata1', component: PersonalData1Component},
  {path: 'personaldata2', component: PersonalData2Component},
  {path: 'address', component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
