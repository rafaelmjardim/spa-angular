import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";

import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogDialogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class BlogModule { }
