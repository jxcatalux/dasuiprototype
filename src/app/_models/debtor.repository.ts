import { Injectable } from '@angular/core';
import { Debtor } from './Sponsor.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class DebtorRepository {

  private debtors: Debtor[] = [];

  constructor(private datasource: StaticDataSource ) {
    datasource.getDebtors().subscribe(data => {
      this.debtors = data;
    });
   }

 
  getDetors(searchType: number, lastname: string): Debtor[] {
     let myDebtors: Debtor[] = [];
     switch(searchType) {
        case 1:
          myDebtors = this.debtors
          .filter(d => d.lastname.toLowerCase().startsWith(lastname.toLowerCase()));
          //.filter(d => lastname == d.lastname);
          break;
        case 2:
          myDebtors = this.debtors
          .filter(d => d.memberLName.toLowerCase().startsWith(lastname.toLowerCase()));
          break;
        default:
          myDebtors = this.debtors;
          break;
     }
    return myDebtors;
  }
  getDebtor(id: number, searchType: number = null): Debtor {
    let myDebtor: Debtor = null;
     switch(searchType) {
        case 1:
          myDebtor = this.debtors
          .find(d => d.sponsorId = id);
          break;
        case 2:
          myDebtor = this.debtors
          .find(d => d.memberId = id);
          break;
        default:
          myDebtor = this.debtors
          .find(d => d.cosponsorId = id);
          break;
     }
    return myDebtor;
    
  }
}
