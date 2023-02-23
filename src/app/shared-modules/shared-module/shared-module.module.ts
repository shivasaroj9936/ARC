import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from 'src/app/components/common-table/common-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginatorDirective } from 'src/app/directives/app-paginator.directive';


@NgModule({
  declarations: [
    CommonTableComponent,
    PaginatorDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule,
    MatSortModule,
    MatDialogModule,
  ],
  exports: [CommonTableComponent]
})
export class SharedModuleModule { }
