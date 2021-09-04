import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Clinic, Equipment } from 'src/app/models';
import {
  ClinicService,
  EquipmentService,
  AlertifyService,
} from 'src/app/services';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss'],
})
export class AddEquipmentComponent implements OnInit {
  constructor(
    private _clinicService: ClinicService,
    private _activatedRoute: ActivatedRoute,
    private _equipmentService: EquipmentService,
    private _alertifyService: AlertifyService
  ) {}

  _model: Equipment = new Equipment();
  clinics: Array<Clinic>;
  title = 'Add Equipment';
  _action: Function;
  Id: any;

  async ngOnInit() {
    this.Id = this._activatedRoute.snapshot.paramMap.get('Id');
    if (this.Id) {
      this.title = 'Edit Equipment';
      this._model = (<Equipment>(
        await this._equipmentService.getfind('?Id=' + this.Id)
      ))[0];
      this._action = this.updateEquipment;
    } else this._action = this.insertEquipment;
    this.clinics = <Array<Clinic>>await this._clinicService.getAll();
  }

  async onSave(equipmentForm: NgForm) {
    if (
      equipmentForm.valid &&
      equipmentForm.value.Price >= 0.01 &&
      equipmentForm.value.Unit >= 1
    ) {
      this._action(equipmentForm);
      return;
    }
    this._alertifyService.error(
      'Please fill in the required fields correctly and completely!'
    );
  }

  updateEquipment(equipmentForm: NgForm) {
    this._alertifyService.success(
      'Equipment information has been successfully updated!'
    );
  }
  insertEquipment(equipmentForm: NgForm) {
    this._alertifyService.success(
      'Equipment information has been successfully saved!'
    );
  }
}
