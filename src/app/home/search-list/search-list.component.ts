import { Component, OnInit, Input } from '@angular/core';
import { DebtorRepository } from 'src/app/_models/debtor.repository';
import { Debtor } from 'src/app/_models/Sponsor.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent {

  @Input() item: string;
  public itemsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: DebtorRepository) {   }
/*
  get debtors(): Debtor[]{
    let pageIndex = (this.selectedPage - 1) * this.itemsPerPage;
        return this.repository.getDetors(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
  }

*/


}
