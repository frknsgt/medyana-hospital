import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertifyService } from 'src/app/services';

@Component({
  selector: 'app-warning-window',
  templateUrl: './warning-window.component.html',
  styleUrls: ['./warning-window.component.scss'],
})
export class WarningWindowComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<WarningWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}
  deleteControl(control) {
    if (control) {
      this._alertifyService.success(
        'Equipment information deleted successfully!'
      );
    }
    this.dialogRef.close();
    return;
  }
}
