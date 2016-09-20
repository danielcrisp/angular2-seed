import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NameListService } from '../shared/name-list/index';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [NameListService]
})
export class HomeModule { }
