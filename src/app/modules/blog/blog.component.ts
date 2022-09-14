import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';
import { Client } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  clientList: Client[] = [
    {position: 1, name: 'Rafael', age: 24, job: 'Dev' },
    {position: 2, name: 'Lucas', age: 20, job: 'Analista' },
    {position: 3, name: 'Ana', age: 34, job: 'Professor(a)' },
  ];
  

  // displayedColumns typar e colocar string de ids
  displayedColumns: string[] = ['position', 'name', 'age', 'job'];

  //dataSource = nome do arrayList
  dataSource = this.clientList;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleOpenDialog = () => {
    this.dialog.open(BlogDialogComponent, {
      width: '50rem',
      height: '30rem'
    });
  }

}