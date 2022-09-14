import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss']
})
export class BlogDialogComponent implements OnInit {

  constructor(private mat_dialog_ref: MatDialogRef<BlogDialogComponent>) { }

  ngOnInit(): void {
  }

  handleCloseDialog = () => {
    this.mat_dialog_ref.close();
  }

}
