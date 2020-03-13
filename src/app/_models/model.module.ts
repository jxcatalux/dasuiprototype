import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { DebtorRepository } from './debtor.repository';

@NgModule({
  
  providers: [StaticDataSource, DebtorRepository]
})
export class ModelModule { }
