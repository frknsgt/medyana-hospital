import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/models';
import { ClinicService } from 'src/app/services';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss'],
})
export class ClinicListComponent implements OnInit {
  constructor(private _clinicService: ClinicService) {}

  clinics: Clinic[];
  paginationConfig = {
    id: 'clinics',
    itemsPerPage: 6,
    currentPage: 1,
  };
  searchText = '';

  async ngOnInit() {
    this.clinics = <Array<Clinic>>await this._clinicService.getAll();
  }
}
