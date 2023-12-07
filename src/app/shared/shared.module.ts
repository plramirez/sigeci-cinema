import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { SearcherComponent } from './searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [
    ConfirmDeleteDialogComponent,
    SearcherComponent,
    SidebarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ConfirmDeleteDialogComponent,
    SearcherComponent,
    SidebarComponent,
    TopBarComponent
  ]
})
export class SharedModule { }
