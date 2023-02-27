import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-del-dialog',
  templateUrl: './del-dialog.component.html',
  styleUrls: ['./del-dialog.component.scss']
})
export class DelDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DelDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
console.log(this.data.item);
  }
  closeDialog(del: boolean) {
    this.dialogRef.close(del);
  }
}
