import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './components';
import {
  AddEquipmentComponent,
  ClinicListComponent,
  EquipmentListComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: ClinicListComponent,
      },
      {
        path: 'equipments',
        component: EquipmentListComponent,
      },
      {
        path: 'clinic/equipments/:ClinicID',
        component: EquipmentListComponent,
      },
      {
        path: 'equipment/edit/:Id',
        component: AddEquipmentComponent,
      },
      {
        path: 'equipment/add',
        component: AddEquipmentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
