import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string,
  position: number,
  weight: number,
  symbol: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 3, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 4, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 5, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 6, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 7, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 8, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 9, name: 'Hydron', weight: 1.0079, symbol: 'H'},
  {position: 10, name: 'Hydron', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
