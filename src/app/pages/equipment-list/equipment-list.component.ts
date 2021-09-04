import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { WarningWindowComponent } from 'src/app/components';
import { Clinic, Equipment } from 'src/app/models';
import { ClinicService, EquipmentService } from 'src/app/services';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss'],
})
export class EquipmentListComponent implements OnInit {
  constructor(
    private _equipmentService: EquipmentService,
    private _clinicService: ClinicService,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  equipments: Equipment[];
  clinics: any;
  paginationConfig = {
    id: 'equipment',
    itemsPerPage: 6,
    currentPage: 1,
  };
  searchText = '';
  dataControl: boolean = true;

  async ngOnInit() {
    const ClinicID = this._activatedRoute.snapshot.paramMap.get('ClinicID');
    if (ClinicID) {
      this.equipments = <Array<Equipment>>(
        await this._equipmentService.getfind('?ClinicID=' + ClinicID)
      );

      this.clinics = <Clinic>(
        await this._clinicService.getFind('?Id=' + ClinicID)
      );
    } else {
      this.equipments = <Array<Equipment>>await this._equipmentService.getAll();

      this.clinics = <Array<Clinic>>await this._clinicService.getAll();
    }
    this.equipments.map((value) =>
      Object.assign(value, {
        ClinicName: this.clinics.find((data) => data.Id === value.ClinicID)
          .ClinicName,
      })
    );
    if (this.equipments[0]?.EquipmentName) this.dataControl = false;
  }

  equipmentDelete(Id, itemName) {
    this._dialog.open(WarningWindowComponent, {
      width: '400px',
      data: { itemName: itemName },
    });
  }
}
