import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

// PeriodicElement Type
type ClientList = {
  position: number,
  name: string,
  age: number,
  job: string
}

// ELEMENT_DATA: type
const CLIENT_DATA: ClientList[] = [
  {position: 1, name: 'Rafael', age: 24, job: 'Dev' },
  {position: 2, name: 'Lucas', age: 20, job: 'Analista' },
  {position: 3, name: 'Ana', age: 34, job: 'Professor(a)' },
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  // displayedColumns typar e colocar string de ids
  displayedColumns: string[] = ['position', 'name', 'age', 'job'];

  //dataSource = nome do arrayList
  dataSource = CLIENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog = () => {
    this.dialog.open(DialogElementsExampleDialog);
  }
  
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
